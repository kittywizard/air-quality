import { memo, useState } from "react";
import {
    ComposableMap,
    Geographies,
    Geography,
    Marker,
    ZoomableGroup
  } from "react-simple-maps";

const Map = (props) => {
    const markers = [
        {
            markerOffset: -30,
            name: "Seattle",
            coordinates: [-122.335167, 47.608013]
        },

        {
            markerOffset: -30,
            name: "New York",
            coordinates: [-74.006, 40.7128]
        }
    ];
    
    const markerDisplay = markers.map(
        marker => {
            return (
                <Marker 
                    key={marker.name}
                    coordinates={marker.coordinates} 
                >
                    <circle 
                        r={5} 
                        fill="#444"
                    />
                </Marker>

            )
        });

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
                
                {markerDisplay}

        
            </ZoomableGroup>
    </ComposableMap>
    )
}

export default memo(Map);