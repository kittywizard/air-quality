import {
    ComposableMap,
    Geographies,
    Geography,
    Marker
  } from "react-simple-maps";

export default function Map(props) {
    return (
        <ComposableMap projection="geoAlbersUsa">
            
        <Geographies geography={props.url}>
        {({ geographies }) =>
                geographies
                    .map(geo => (
                    <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill="#EAEAEC"
                        stroke="#D6D6DA"
                    />
        ))}
        </Geographies>
    </ComposableMap>
    )
}