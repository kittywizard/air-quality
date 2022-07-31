import { useState } from "react";
import DisplayChart from "./DisplayChart";
import {results} from "../data/parameters";

export default function DisplayData(props) {

    const refinedMeasurementData = props.measurementData.map(data => {
        const formattedDate = new Date(data.date.local);
        const readableDate = 
        `${formattedDate.getMonth() + 1}/${formattedDate.getDate()}`;

        return {
            date: readableDate,
            value: data.value,
            unit: data.unit,
            location: data.location
        }

    });

    return (
        <section className="data-display">
            { refinedMeasurementData.length === 0 ? 
            
                <div>
                    <h1>
                        Loading!
                    </h1>
                </div> 
                : 
                        <DisplayChart
                             data={refinedMeasurementData}
                             parameters={results} 
                        />
            }

        </section>
    )
}