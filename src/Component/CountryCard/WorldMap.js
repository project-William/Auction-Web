import React, {useState} from "react";

import ReactTooltip from "react-tooltip";

import "./worldMap.module.css";
import MapChart from "./MapChart";


const WorldMap=()=> {
    const [content,setContent]=useState("");
  return (
    <div>
      <MapChart setTooltipContent={setContent}/>
      <ReactTooltip>{content}</ReactTooltip>
    </div>
  );
}

export default WorldMap;


