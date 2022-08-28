import DisplayChart from "./DisplayChart";
import {results} from "../data/parameters";

export default function DisplayData(props) {    

    const refinedMeasurementData = props.measurementData.map(data => {
        const formattedDate = new Date(data.date.local);
        const readableDate = 
        `${formattedDate.getMonth() + 1}/${formattedDate.getDate()}`;

        const valueObjString = `value${data.parameter}`;
        
        return {
            date: readableDate,
            [valueObjString]: data.value,
            unit: data.unit,
            parameter: data.parameter,
            location: data.location
        }

    });

    //sort data by parameter type
    refinedMeasurementData.sort((a,b) => {
        const paramA = a.parameter.toUpperCase();
        const paramB = b.parameter.toUpperCase();

        if(paramA < paramB) {
            return -1;
        }
        
        if (paramA > paramB) {
            return 1
        }
        return 0;
    });

    //grab all parameters, kill the duplicates
    let parametersAvailable = refinedMeasurementData.map(param => {
        console.log(param);
        if(param.parameter !== "um025" || "um100" || "um010") {
            return param.parameter;
        } 
    });

    //let parametersAvailable = refinedMeasurementData.map(param => param.parameter)
    const paramSet = new Set(parametersAvailable);
    parametersAvailable = Array.from(paramSet);

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