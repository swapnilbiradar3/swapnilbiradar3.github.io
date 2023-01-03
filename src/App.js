import Maincomponent from "./Components/Maincomponent";
import {useState, useEffect} from 'react';
import { css } from "@emotion/react";
import HashLoader from "react-spinners/HashLoader";

import { Fade } from "react-awesome-reveal";

function App() {
  const [loading, setloading] = useState(false);

  useEffect( ()=> {
    setloading(true)
    setTimeout(() => {
      setloading(false)
    }, 1000);
  }, [])

  return (
    <div className="App-header"> 
      {
         loading ? (
          <div className="loader">
            <HashLoader color={"#36D7B7"} 
            loading={loading} 
            size={50} />
            &nbsp;&nbsp;&nbsp;
            <h3> Loading </h3>
          </div>
          )
         :
         (<Fade><Maincomponent/></Fade>)
      }
      
    </div>
  );
}

export default App;
