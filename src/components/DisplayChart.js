import { LineChart, Line, XAxis, YAxis, Legend, ResponsiveContainer, Tooltip } from "recharts";

const DisplayChart = ({data, parameters}) => {

    //need to divide data up by its parameter to get a proper line chart

    
    // const lineComponents = parametersAvailable.map(line => {
    //     return <Line
    //             type="monotone"
    //             dataKey={`value${line}`}
    //             stroke="#000"
    //             activeDot={{r: 8}} 
    //             />
    // });

    return (
        <section className="single-chart">
        <div className="parameter-info">
            <h3>
                {parameters.displayName} ({parameters.preferredUnit})
            </h3>
            <p>{parameters.description}</p>
        </div>
            <LineChart
                width={400} height={400} data={data} className="chart-style"
            >
                <XAxis dataKey="date"/>
                <YAxis />
                <Line 
                    type="monotone"
                    dataKey="value"
                    stroke="#2d499c"
                    activeDot={{r: 8}}
                />
                <Legend />
                <Tooltip />

            </LineChart>
    </section>
    )
}

export default DisplayChart;