import { useEffect, useState } from 'react';
import ReactTooltip from 'react-tooltip';

import Header from './components/Header';
import Map from "./components/Map";
import Filters from './components/Filters';
import DisplayData from './components/DisplayData';

import {getCurrentDate, getOneMonthAgo} from "./helpers/dates";
import useMap from "./hooks/useMap";
import useFilters from "./hooks/useFilters";

function App() {

  const {toggleMap, showMap, setDisplayMeasurements, displayMeasurements, toggle} = useMap();
  const {dataFilters, setDataFilters} = useFilters();
  
  const [tooltip, setTooltip] = useState("");   //controls the tooltip display state (onMouseOver)
  const [locationData, setLocationData] = useState([]); //initial marker data
  const [measurementData, setMeasurementData] = useState([]); //specific measurement info once a marker is clicked

  //basic JSON data for a map of the US
  const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

  // //default URL
  let url = `https://api.openaq.org/v2/locations?limit=50&page=1&offset=0&sort=desc&has_geo=true&radius=1000&country_id=US&order_by=lastUpdated&dumpRaw=false`;

  //marker rendering locations 
  useEffect(() => {
    if(dataFilters !== ''){
      url = `${url}&entity=${dataFilters}`
    }

    fetch(url)
      .then(resp => resp.json())
      .then(data => {
          setLocationData(data.results);
      })
      
  }, [dataFilters]);

  // rendering measurement data
  useEffect(() => {

    const currentDateFormatted = getCurrentDate();
    const dateFrom = getOneMonthAgo();

    let fetchURL = `https://api.openaq.org/v2/measurements?date_from=${dateFrom}&date_to=${currentDateFormatted}&limit=1000&page=1&offset=0&sort=desc&radius=1000&country_id=US&location_id=${displayMeasurements[1]}&order_by=datetime`;
    if(displayMeasurements[0]){
  
        fetch(fetchURL)
        .then(resp => resp.json())
        .then(data => {
          setMeasurementData(data.results);
          toggleMap(); 
        })
        .catch(error => {
          console.log(error)
        })
    }
    
  }, [displayMeasurements]);

  return (
    <div className="App">
      <Header 
        toggleMap={toggleMap}
        showMap={showMap}
      />
      {
        showMap ?
        <>
          <Filters 
            dataFilters={dataFilters} 
            setDataFilters={setDataFilters}
          />
          <Map 
            url={geoUrl}
            setTooltip={setTooltip}
            locationData={locationData}
            toggle={toggle}
          />
          <ReactTooltip
            place="bottom"
            type="dark"
            html={true}
          >
            {tooltip}
          </ReactTooltip>
      </>
      :
        <DisplayData 
          measurementData={measurementData}
        />
      }
    </div>
  );
}

export default App;
