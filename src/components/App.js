import React, { useEffect, useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushiList, setSushiList] = useState([])
  const [plates, setPlates] = useState([])
  const [wallet, setWallet] = useState(100)

  useEffect (() => {
    fetch("http://localhost:3001/sushis")
    .then((response) => response.json())
    .then((data) => setSushiList(data))
  }, [])
  
  function handleSushiClick (sushiId, sushiPrice) {
    setPlates([...plates, ()=> {
      sushiList.filter((sushi)=> sushi.id === sushiId)
    }])
    setWallet(wallet - sushiPrice)
  }

  return (
    <div className="app">
      <SushiContainer wallet={wallet} sushiList={sushiList} handleSushiClick={handleSushiClick}/>
      <Table plates={plates} wallet={wallet} />
    </div>
  );
}

export default App;
