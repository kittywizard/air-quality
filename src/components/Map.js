import { memo, useState } from "react";
import {
    ComposableMap,
    Geographies,
    Geography,
    Marker,
    ZoomableGroup
  } from "react-simple-maps";

const Map = (props) => {
    const locationMarkers = props.locationData.map(location => {
            return (
                <Marker
                key={location.id}
                coordinates={[location.coordinates.longitude, location.coordinates.latitude]}
                >
                    <circle
                        r={2}
                        fill="#444"
                        onMouseOver={() => {
                            //convert date
                            const lastUpdatedDate = new Date(location.lastUpdated);
                            const readableDate = 
                            `${lastUpdatedDate.getMonth() + 1}/${lastUpdatedDate.getDay()}/${lastUpdatedDate.getFullYear()}`

                            props.setTooltip(`
                                <div>
                                    <p>City: ${location.name}</p>
                                    <p>Type: <span class="title-case">${location.entity}</span></p>
                                    <p>Last Updated: ${readableDate}</p>
                                </div>
                            `)
                        }}
                        onMouseOut={() => {
                            props.setTooltip("");
                        }}
                        onClick={(event) => props.toggle(event, location.id)}
                    />
                </Marker>
            )
    });
    
    // const markerDisplay = markers.map(
    //     marker => {
    //         return (
    //             <Marker 
    //                 key={marker.name}
    //                 coordinates={marker.coordinates} 
    //             >
    //                 <circle 
    //                     r={5} 
    //                     fill="#444"
    //                 />
    //             </Marker>

    //         )
    //     });

    return (
        <ComposableMap 
            projection="geoAlbersUsa"
            projectionConfig={{
                scale: 800
            }}
            data-tip=""
            style={{
                outline: "none"
            }}
        >
            <ZoomableGroup 
                zoom={1}
            >
                <Geographies 
                    geography={props.url}>
                    {({ geographies }) =>
                            geographies
                                .map(geo => (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    strokeWidth="1"
                                    style={{
                                        default: {
                                            fill: "#EAEAEC",
                                            stroke: "#D6D6DA",
                                            outline: "none"
                                        },

                                        hover: {
                                            fill: "#0cc0cc",
                                            outline: "none"
                                        },

                                        pressed: {
                                            fill: "#0cc0cc",
                                            outline: "none"
                                        }
                                    }}
                                    onMouseOver={() => {
                                        props.setTooltip(`State: ${geo.properties.name}`);
                                    }}
                                    onMouseOut={() => {
                                        props.setTooltip("");
                                    }}

                                />
                    ))}
                </Geographies>
                
                {locationMarkers}

        
            </ZoomableGroup>
    </ComposableMap>
    )
}

export default memo(Map);