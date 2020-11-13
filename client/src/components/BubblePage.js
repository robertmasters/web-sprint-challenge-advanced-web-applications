import React, { useState, useEffect } from "react";
import axios from "axios";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { fetchColors } from "../api/fetchColors";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  useEffect(()=> {
    fetchColors()
    .then((res)=>{
      setColorList(res)
    })
    .catch((error)=> {
      console.log("error with fetchColors in BubblePage: ", error)
    })
  }, [])

  return (
    <div>
    Bubble Page
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </div>
  );
};

export default BubblePage;
