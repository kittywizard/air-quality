export default function Card(props) {
    //convert date object

    return (
        <section className="measurement-card">
            <h3>{props.location}</h3>
            <h5>Date: ///</h5>

            <div>
                {props.value} per {props.unit}
            </div>

        </section>
    )
}