import {useState} from "react";

function useMap() {
    const [showMap, setShowMap] = useState(true);
    const [displayMeasurements, setDisplayMeasurements] = useState([false, 0]); //checking to see if above is called and displayed

  //controls state on hide/show map button
  function toggleMap() {
    setShowMap(prevState => !prevState);
  }

  //display measurement data 
  function toggle(e,id) {
    setDisplayMeasurements([true, id]);
    e.preventDefault();
  }

  return {showMap, setShowMap, toggleMap, toggle, setDisplayMeasurements, displayMeasurements}

}

export default useMap