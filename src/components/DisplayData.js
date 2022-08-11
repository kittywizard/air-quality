import { useEffect, useRef } from "react";
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

    let loadingText = 'Loading! Please wait..';
    const refContainer = useRef();

    useEffect(() => {
        const timerWatch = setTimeout(() => {
            if(refinedMeasurementData.length === 0) {
                //after 4 seconds, if still no data, tell user to go back and try again?
                refContainer.current = "Loading! This is taking a little longer than expected.";
                console.log(refContainer)

            } else {
                refContainer.current = 'Loading! Please wait..';
            }
        }, 4000);
    
        return () => clearTimeout(timerWatch);
    }, [refinedMeasurementData])

    return (
        <section className="data-display">
            { refinedMeasurementData.length === 0 ? 
            
                <div>
                    <h1>
                    {refContainer.current}   
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