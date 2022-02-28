import { nanoid } from "nanoid";
import Radio from "./Radio";

export default function Filters(props) {
       
   const handleChange = (e) => {
        props.setDataFilters(e.target.value);
    }

    //add government to this array eventually - currently a bug where it breaks the API call for unknown reasons
        //check, maybe it takes too long to load?

    const filterTypes = ["community", "research"];

    const radioDisplay = filterTypes.map(radio => {
        return <Radio
                    name="filter"
                    value={radio}
                    handleChange={handleChange}
                    dataFilters={props.dataFilters}
                    key={nanoid()}
                />
    });

    return (
        <section className="filters">
            {radioDisplay}
            {/* 
                    BUG:
                        -government entity search breaks
                            -API call seems identical - not sure why
            */}
        </section>
    )
}

   
