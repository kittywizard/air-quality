import { useEffect, useState } from 'react';
import ReactTooltip from 'react-tooltip';

import Header from './components/Header';
import Map from "./components/Map";
import Filters from './components/Filters';

function App() {
  
  //controls the tooltip display state (onMouseOver)
  const [tooltip, setTooltip] = useState("");
  const [locationData, setLocationData] = useState([]);
  const [dataFilters, setDataFilters] = useState('');
  //basic JSON data for a map of the US
  const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";
  let url = `https://docs.openaq.org/v2/locations?limit=50&page=1&offset=0&sort=desc&radius=1000&country_id=US&order_by=lastUpdated&dumpRaw=false`;

  useEffect(() => {
    if(dataFilters !== ''){
      url = `${url}&entity=${dataFilters}`
    }

    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        console.log(data.results)
          setLocationData(data.results);
      })
  }, [dataFilters]);


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
    </div>
  );
}

export default App;
