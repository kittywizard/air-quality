import DisplayChart from "./DisplayChart";
import {results} from "../data/parameters";

import useDisplayData from "../hooks/useDisplayData";

export default function DisplayData(props) {    

    const {
        refinedMeasurementData,
        parametersAvailable
    } = useDisplayData(props);

    console.log(refinedMeasurementData[1000].date)
    //take refinedData and average it out into a new variable
    const averagedData = [];

    //data comes in as an object:
    //locationId, parameter, location String, value, date object
    //average by date (string 9/20 for ex)

    return (
        <section className="data-display">
            { refinedMeasurementData.length === 0 ? 
            
                <div>
                    <h1>
                        Loading, please wait!
                    </h1>
                </div> 
                : 
                        <DisplayChart
                             data={refinedMeasurementData}
                             parameters={results}
                             parametersAvailable={parametersAvailable} 
                        />
            }

        </section>
    )
}