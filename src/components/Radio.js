export default function Radio(props) {
    const value = props.value; //props.value breaks in the checked ..check for some reason

    return (
        <div className="radio-btn">
            <input type="radio" 
                    name={props.name} 
                    value={value}
                    checked={props.dataFilters === {value}}
                    onChange={props.handleChange}
            />
            <label htmlFor={value}><span className="title-case">{value}</span></label>
        </div>
    )
}

/*
    BUG: radio buttons no longer show as active - started after I tried implementing custom ones, but has persisted beyond that.
        but they still work
*/