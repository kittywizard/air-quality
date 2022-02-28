import { nanoid } from "nanoid";
import Card from "./Card";

export default function DisplayData(props) {

    console.log(props)

    const measurementDisplay = props.measurementData.map(data => {
        const {location, value, unit, date} = data;

        return <Card 
                    location={location}
                    value={value}
                    unit={unit}
                    date={date}
                    key={nanoid()}
                />
    })
    return (
        <section className="data-display">
            { props.measurementData === undefined ? 
            
                <div>Loading!</div> 
                : 
                        <div className="measurement-container">
                            {measurementDisplay}
                        </div>}

        </section>
    )
}