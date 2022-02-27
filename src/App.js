import { useEffect, useState } from 'react';
import ReactTooltip from 'react-tooltip';

import Header from './components/Header';
import Map from "./components/Map";


function App() {
  const url = "https://docs.openaq.org/v2/locations?limit=50&page=1&offset=0&sort=desc&radius=1000&country_id=US&order_by=lastUpdated&dumpRaw=false"
  //const url = "https://u50g7n0cbj.execute-api.us-east-1.amazonaws.com/v2/locations?limit=100&page=1&offset=0&sort=desc&has_geo=true&radius=1000&country_id=US&order_by=country&isAnalysis=true&dumpRaw=falsehttps://u50g7n0cbj.execute-api.us-east-1.amazonaws.com/v2/locations?limit=100&page=1&offset=0&sort=desc&has_geo=true&radius=1000&country_id=US&order_by=lastUpdated&isAnalysis=true&dumpRaw=false";
  useEffect(() => {
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
       setLocationData(data.results);
      })
  }, []);

  //controls the tooltip display state (onMouseOver)
   const [tooltip, setTooltip] = useState("");
   const [locationData, setLocationData] = useState([]);
   //const [detailedData, setDetailedData] = useState('');

  //basic JSON data for a map of the US
  const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

  function toggle(e,id) {
      //grab ID when user clicks tooltip? 
    console.log(id);

    fetch('')
      .then(resp => resp.json())
      .then(data => {
        //do something
      })

    e.preventDefault();
  }
  return (
    <div className="App">
      <Header />
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
    </div>
  );
}

export default App;
