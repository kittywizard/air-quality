// import { nanoid } from "nanoid";
// import Card from "./Card";
import DisplayChart from "./DisplayChart";

export default function DisplayData(props) {

    // const measurementDisplay = props.measurementData.map(data => {
    //     const {location, value, unit, date} = data;

    //     return <Card 
    //                 location={location}
    //                 value={value}
    //                 unit={unit}
    //                 date={date}
    //                 key={nanoid()}
    //             />
    // })

    const refinedMeasurementData = props.measurementData.map((data,index) => {
        // const formattedDate = new Date(data.date.local);
        // const readableDate = 
        // `${formattedDate.getMonth() + 1}/${formattedDate.getDate()}/${formattedDate.getFullYear()}`;

        return {
            date: index,
            value: data.value,
            unit: data.unit,
            location: data.location
        }

    });

    console.log(refinedMeasurementData)

    return (
        <section className="data-display">
            { refinedMeasurementData.length === 0 ? 
            
                <div>
                    <h1>
                        Loading!
                    </h1>
                </div> 
                : 
                        // <div className="measurement-container">
                        //     {measurementDisplay}
                        // </div>
                        <DisplayChart data={refinedMeasurementData} />
            }

        </section>
    )
}