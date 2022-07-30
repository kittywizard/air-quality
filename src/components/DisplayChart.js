import { LineChart, Line, XAxis } from "recharts";

const DisplayChart = (props) => {

    return (
        <LineChart
            width={400} height={400} data={props.measurementData}
        >
            <Line 
                type="monotone"
                dataKey=""
                stroke="#efefef"
            />
            <XAxis dataKey={}
        </LineChart>
    )
}

export default DisplayChart;