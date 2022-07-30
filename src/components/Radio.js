export default function Radio({name, value, dataFilters, handleChange}) {
    return (
        <div className="radio-btn">
            <input type="radio" 
                    name={name} 
                    value={value}
                    checked={dataFilters === {value}}
                    onChange={handleChange}
            />
            <label htmlFor={value}>
                <span className="title-case">
                    {value}
                </span>
            </label>
        </div>
    )
}

/*
    BUG: radio buttons no longer show as active - started after I tried implementing custom ones, but has persisted beyond that.
        but they still work
*/