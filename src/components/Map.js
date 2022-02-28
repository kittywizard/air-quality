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
                        r={3}
                        fill="#444"
                        onMouseOver={() => {
                            //convert date
                            const lastUpdatedDate = new Date(location.lastUpdated);
                            const readableDate = 
                            `${lastUpdatedDate.getMonth() + 1}/${lastUpdatedDate.getDate()}/${lastUpdatedDate.getFullYear()}`;

                            props.setTooltip(`
                                <div class="tooltip">
                                    <p class="title-case">
                                        <strong>Location:</strong> ${location.name}
                                    </p>
                                    <p>
                                        <strong>Type:</strong> <span class="title-case">${location.entity}</span>
                                    </p>
                                    <p>
                                        <strong>Last Updated:</strong> ${readableDate}
                                    </p>
                                        <br>
                                    <p>
                                        <strong>Sensor Type:</strong> <span class="title-case">${location.sensorType}</span>
                                    </p>
                                    <p>
                                        <strong>Source:</strong> ${location.sources[0].name}
                                    </p>
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

    return (
    <div className="container">
        <ComposableMap 
            projection="geoAlbersUsa"
            // projectionConfig={{
            //     scale: 800
            // }}
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
                                            fill: "#f0f4ff",
                                            stroke: "#7593eb",
                                            outline: "none"
                                        },

                                        hover: {
                                            fill: "#d8def0",
                                            stroke: "#7593eb",
                                            outline: "none"
                                        },

                                        pressed: {
                                            fill: "#d8def0",
                                            stroke: "#7593eb",
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
</div>
    )
}

export default memo(Map);