import { LineChart, Line, XAxis, YAxis } from "recharts";

const DisplayChart = (props) => {

    /* 
        need to clean up the data for a chart
        1. clean dates that are readable, not in an object
        2. different units are mixed in the data, so one line for each, need more data then?
        3. don't need the rest, except for a header or something (location, dates, description of the unit)
    */

    return (
        <LineChart
            width={800} height={400} data={props.refinedMeasurementData}
        >
            <XAxis dataKey="unit"/>
            <YAxis datakey="date"/>
            <Line 
                type="monotone"
                dataKey="value"
                stroke="#22eecc"
            />

        </LineChart>
    )
}

export default DisplayChart;