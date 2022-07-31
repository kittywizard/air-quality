import { LineChart, Line, XAxis, YAxis } from "recharts";

const DisplayChart = (props) => {

    //now passing in the parameter info for each unit
        //props.parameters (an array of objects)

    /* 
        need to clean up the data for a chart
        1. clean dates that are readable, not in an object
        2. different units are mixed in the data, so one line for each, need more data then?
        3. don't need the rest, except for a header or something (location, dates, description of the unit)
    */

          // results is an array 
    // displayName, description, preferredUnit


    return (
        <>
        <div>
            <h3>
                {props.parameters[0].displayName} ({props.parameters[0].preferredUnit})
            </h3>
            <p>{props.parameters[0].description}</p>
        </div>
    
        <LineChart
            width={800} height={400} data={props.data}
        >
            <XAxis dataKey="date"/>
            <YAxis datakey="value"/>
            <Line 
                type="monotone"
                dataKey="value"
                stroke="#7593eb"
            />

        </LineChart>
    </>
    )
}

export default DisplayChart;