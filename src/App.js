import { useEffect } from 'react';
import Header from './components/Header';
import Map from "./components/Map"


function App() {
  // const url2020 = 'https://u50g7n0cbj.execute-api.us-east-1.amazonaws.com/v2/averages?date_from=2020-09-10T00%3A00%3A00%2B00%3A00&date_to=2020-09-17T23%3A07%3A00%2B00%3A00&parameter=co&unit=string&country_id=US&limit=50&page=1&offset=0&sort=asc&spatial=location&temporal=day&location=1938&group=false';
  // const url2021 = 'https://u50g7n0cbj.execute-api.us-east-1.amazonaws.com/v2/averages?date_from=2021-09-10T00%3A00%3A00%2B00%3A00&date_to=2021-09-17T23%3A07%3A00%2B00%3A00&parameter=co&unit=string&country_id=US&limit=50&page=1&offset=0&sort=asc&spatial=location&temporal=day&location=1938&group=false';

  // useEffect(() => {
  //   fetch(url2020)
  //     .then(resp => resp.json())
  //     .then(data => {
  //       console.log(data);
  //     })
  // }, []);

  const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json";



  return (
    <div className="App">
      <Header />
      <Map 
        url={geoUrl}
      />
    </div>
  );
}

export default App;
