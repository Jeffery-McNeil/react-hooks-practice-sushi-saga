import React, { useState } from "react";

function Sushi({ wallet, sushi, handleSushiClick }) {
  const [isEaten, setIsEaten] = useState(false)

  function handleClick() {
    
    if (wallet <= 9) {
      return null
    } else {
    return ( 
      handleSushiClick(sushi.id, sushi.price), 
      setIsEaten(true)
    )}
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleClick}>
        {isEaten ? null : (
          <img
            src={sushi.img_url}
            alt={sushi.name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
