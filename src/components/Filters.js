import { nanoid } from "nanoid";
import Radio from "./Radio";

export default function Filters({dataFilters, setDataFilters}) {
       
   const handleChange = (e) => {
        setDataFilters(e.target.value);
    }

    //now research is broken - API giving 500 server error

    const filterTypes = ["community", "government"];

    const radioDisplay = filterTypes.map(radio => {
        return <Radio
                    name="filter"
                    value={radio}
                    handleChange={handleChange}
                    dataFilters={dataFilters}
                    key={nanoid()}
                />
    });

    return (
        <section className="filters">
            {radioDisplay}
        </section>
    )
}

   
