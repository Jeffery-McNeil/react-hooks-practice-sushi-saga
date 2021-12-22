import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ wallet, sushiList, handleSushiClick }) {
  
  const [startPoint, setStartPoint] = useState(0)
  const [endPoint, setEndPoint] = useState(4)
  
  
    
  function handleMoreClick() {
    setStartPoint(startPoint +4)
    setEndPoint(endPoint + 4)
  }

  return (
    <div className="belt">
      {sushiList.slice(startPoint, endPoint).map((sushi)=> {
        return <Sushi wallet={wallet} key={sushi.id} sushi={sushi} handleSushiClick={handleSushiClick}/>
      })}
      <MoreButton handleMoreClick={handleMoreClick}/>
    </div>
  );
}

export default SushiContainer;
