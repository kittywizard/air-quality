export default function Card(props) {

    //REFACTOR: CREATE DATE FUNCTION (also used in the Map tooltip render)
    const updatedDate = new Date(props.date.utc);
    const readableUpdatedDate = `${updatedDate.getMonth() + 1}/${updatedDate.getDate()}/${updatedDate.getFullYear()}`;
    const readableTime = `${updatedDate.getUTCHours()}:${updatedDate.getUTCMinutes()}`;

    const readableNumber = props.value.toFixed(3);
    return (
        <section className="measurement-card">
            <h3 className="measurement-card--header">{props.location}</h3>
            <h5 className="measurement-card--date">Last Updated: {readableUpdatedDate} at {readableTime}</h5>

            <div className="measurement-card--units">
                <span className="measurement-card--units-value">
                {readableNumber}
                </span> per {props.unit}
            </div>

        </section>
    )
}