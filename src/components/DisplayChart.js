import { LineChart, Line, XAxis, YAxis, Legend, ResponsiveContainer, Tooltip } from "recharts";

const DisplayChart = ({data, parameters, parametersAvailable}) => {

    //need to divide data up by its parameter to get a proper line chart

    
    const lineComponents = parametersAvailable.map(line => {
        return <Line
                type="monotone"
                dataKey={`value${line}`}
                stroke="#2d499c"
                activeDot={{r: 8}}
                />
    });

    console.log(parametersAvailable);

    return (
        <>
        {/* <div className="parameter-info">
            <h3>
                {props.parameters[0].displayName} ({props.parameters[0].preferredUnit})
            </h3>
            <p>{props.parameters[0].description}</p>
        </div> */}
            <LineChart
                width={800} height={400} data={data} className="chart-style"
            >
                <XAxis dataKey="date"/>
                <YAxis />
                {/* <Line 
                    type="monotone"
                    dataKey="value"
                    stroke="#2d499c"
                    activeDot={{r: 8}}
                /> */}
                {lineComponents}
                <Legend />
                <Tooltip />

            </LineChart>
    </>
    )
}

export default DisplayChart;