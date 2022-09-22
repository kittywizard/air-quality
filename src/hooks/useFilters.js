import {useState} from "react";

function useFilters() {
    const [dataFilters, setDataFilters] = useState(''); //filters
    const [locationData, setLocationData] = useState([]); //initial marker data

    


    return {dataFilters, setDataFilters, locationData, setLocationData}

}

export default useFilters