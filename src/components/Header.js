export default function Header({toggleMap, showMap}) {
    return (
        <header className="header">
            <h1 className="header-headline">
                Air Quality Measurements in the US
            </h1>
            <p className="header-description">
                Select a button to filter data based on air quality measurement type and click on any dot to see detailed measurements.
            </p>
            {/* hide button doesn't show it after grabbing data. yet another variable?? */}
                <button className="btn" onClick={toggleMap}>
                {showMap ? "Hide" : "Show"} Map
                </button>
        </header>
    )
}