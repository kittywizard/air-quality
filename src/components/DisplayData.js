import DisplayChart from "./DisplayChart";
import {results} from "../data/parameters";

import useDisplayData from "../hooks/useDisplayData";

export default function DisplayData(props) {    

    const {
        refinedMeasurementData,
        parametersAvailable
    } = useDisplayData(props);


    const filteredResults = results.filter(item => item.name === "pm1" || item.name === "pm10" || item.name === "pm25");

    const um25 = refinedMeasurementData.filter(item => item.parameter === "um025");
    const um100 = refinedMeasurementData.filter(item => item.parameter === "um100");
    const um10 = refinedMeasurementData.filter(item => item.parameter === "um010");


    return (
        <section className="data-display">
            { refinedMeasurementData.length === 0 ? 
            
                <div>
                    <h1>
                        Loading, please wait!
                    </h1>
                </div> 
                : 
                <div className="charts">
                    <DisplayChart 
                        data={um25}
                        parameters={filteredResults[1]}
                    />
                    <DisplayChart 
                        data={um100}
                        parameters={filteredResults[2]}
                    />
                    <DisplayChart 
                        data={um10}
                        parameters={filteredResults[0]}
                    />

                </div>
            }

        </section>
    )
}