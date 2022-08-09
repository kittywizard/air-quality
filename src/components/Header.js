export default function Header({toggleMap, showMap}) {
    return (
        <header className="header">
            <h1 className="header-headline">
                Air Quality Measurements in the US
            </h1>
            <p className="header-description">
                Select a button to filter data based on air quality measurement type and click on any dot to see detailed measurements.
            </p>
            {
                !showMap &&
                <button className="btn" onClick={toggleMap}>
                {showMap ? "Hide" : "Show"} Map
                </button>
            }
        </header>
    )
}