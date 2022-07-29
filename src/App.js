import { useEffect, useState } from 'react';
import ReactTooltip from 'react-tooltip';

import Header from './components/Header';
import Map from "./components/Map";
import Filters from './components/Filters';
import DisplayData from './components/DisplayData';

function App() {
  
  //controls the tooltip display state (onMouseOver)
  const [tooltip, setTooltip] = useState("");
  const [locationData, setLocationData] = useState([]);
  const [dataFilters, setDataFilters] = useState('');
  const [measurementData, setMeasurementData] = useState([]);
  const [displayMeasurements, setDisplayMeasurements] = useState([false, 0]);

  //basic JSON data for a map of the US
  const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

  //default URL
  //need to get new API URL
  //let url = `https://docs.openaq.org/v2/locations?limit=50&page=1&offset=0&sort=desc&radius=1000&country_id=US&dumpRaw=false&has_geo=true`;
  let url = `https://api.openaq.org/v2/locations?limit=50&page=1&offset=0&sort=desc&has_geo=true&radius=1000&country_id=US&order_by=lastUpdated&dumpRaw=false`;

  //use effect for marker rendering locations 
  useEffect(() => {
   
    if(dataFilters !== ''){
      url = `${url}&entity=${dataFilters}`
    }
    console.log(url)

    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        console.log(data.results)
          setLocationData(data.results);
      })
      
  }, [dataFilters]);

  //use effect for rendering measurement data
  useEffect(() => {
    //default URL - works for community locations

    //NEED NEW URL
    let fetchURL = `https://docs.openaq.org/v2/measurements?date_from=2022-01-01T00%3A00%3A00%2B00%3A00&date_to=2022-02-27T22%3A56%3A00%2B00%3A00&limit=10&page=1&offset=0&sort=desc&radius=1000&country_id=US&location_id=${displayMeasurements[1]}&order_by=datetime`;

    if(displayMeasurements[0]){
      //need to check and see if research is selected - different URL
      if(dataFilters === "research") fetchURL = `https://u50g7n0cbj.execute-api.us-east-1.amazonaws.com/v2/measurements?date_from=2022-01-01T00%3A00%3A00%2B00%3A00&date_to=2022-02-28T17%3A56%3A00%2B00%3A00&limit=10&page=1&offset=0&sort=desc&radius=1000&country_id=US&location_id=${displayMeasurements[1]}&order_by=datetime&entity=research`;

      fetch(fetchURL)
      .then(resp => resp.json())
      .then(data => {        
        setMeasurementData(data.results);
      })
    }
    
  }, [displayMeasurements]);

  //display measurement data 
  function toggle(e,id) {
    setDisplayMeasurements([true, id]);
    e.preventDefault();
  }

  return (
    <div className="App">
      <Header />
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

      {displayMeasurements[0] &&
        <DisplayData 
          measurementData={measurementData}
        />
      }
    </div>
  );
}

export default App;
