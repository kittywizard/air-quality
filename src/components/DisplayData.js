import DisplayChart from "./DisplayChart";
import {results} from "../data/parameters";

import useDisplayData from "../hooks/useDisplayData";

export default function DisplayData(props) {    

    const {
        refinedMeasurementData,
        parametersAvailable
    } = useDisplayData(props);


    //data comes in as an object:
    //locationId, parameter, location String, value, date object
    //average by date (string 9/20 for ex)

    //create a new map for each parameter

    //then display all the charts
    const um25 = refinedMeasurementData.filter(item => item.parameter === "um025");
    const um100 = refinedMeasurementData.filter(item => item.parameter === "um100");
    const um10 = refinedMeasurementData.filter(item => item.parameter === "um010")


    return (
        <section className="data-display">
            { refinedMeasurementData.length === 0 ? 
            
                <div>
                    <h1>
                        Loading, please wait!
                    </h1>
                </div> 
                : 
                <div>
                    <DisplayChart 
                        data={um25}
                        parameters={results}
                        parametersAvailable={parametersAvailable}
                    />
                    <DisplayChart 
                        data={um100}
                        parameters={results}
                        parametersAvailable={parametersAvailable}
                    />
                    <DisplayChart 
                        data={um10}
                        parameters={results}
                        parametersAvailable={parametersAvailable}
                    />

                </div>
                        // <DisplayChart
                        //      data={refinedMeasurementData}
                        //      parameters={results}
                        //      parametersAvailable={parametersAvailable} 
                        // />
            }

        </section>
    )
}