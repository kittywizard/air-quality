export default function Filters(props) {
       
   const handleChange = (e) => {
        props.setDataFilters(e.target.value);
    }

    //REFACTOR IDEA : create radio button component
    return (
        <section className="filters">
            {/* 
                    BUG:
                        -government entity search breaks
                            -API call seems identical - not sure why
    
            */}
            
            {/* <div>
                <input type="radio" 
                    name="filter"
                    value="government"
                    checked={props.dataFilters === "government"}
                    onChange={handleChange}
                    />
                <label htmlFor="government">Government</label>
            </div> */}
            
            <div>
                <input type="radio" 
                    name="filter" 
                    value="research"
                    checked={props.dataFilters === "research"}
                    onChange={handleChange}
                    />
                <label htmlFor="research">Research</label>
            </div>
            <div>
                <input type="radio" 
                    name="filter"
                    value="community"
                    checked={props.dataFilters === "community"}
                    onChange={handleChange}
                    />
                <label htmlFor="community">Community</label>
            </div>
        </section>
    )
}

   
