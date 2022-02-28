export default function DisplayData(props) {

    console.log(props.measurementData)
    const {location, value, unit} = props.measurementData;
    console.log(props.measurementData[0])
    return (
        <section className="data-display">
            {/* {location}
            <p></p>

            <div>
        {value} per {unit}
            </div> */}
        </section>
    )
}