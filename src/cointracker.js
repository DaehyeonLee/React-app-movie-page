import { useState, useEffect } from "react";

function CoinTracker(){
  const [loading,setLoaing] = useState(true);
  const [coins, setCoins] = useState([]);
  const [dollor, SetDollor] = useState(0);
  const [toCoin, SetToCoin] = useState(0);
  const onChangeCost = (event)=>{
    SetDollor(event.target.value)
  }
    const onChange = (event)=>{
      console.log(event.target.value)
      SetToCoin(event.target.value)
    }
  useEffect(()=>{
  fetch("https://api.coinpaprika.com/v1/tickers")
  .then((response)=>response.json())
  .then((json) => {
    setCoins(json);
    setLoaing(false);
  });
},[]);
return (<div>
  <h1>The Coins! { loading ? "" : `(${coins.length})`}</h1>
  {loading ? <strong>Loading...</strong> :
    <select onChange={onChange}>
    {coins.map((coin) =>
    <option value={coin.quotes.USD.price}>
      {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price}
    </option>
    )}
  </select>}
    <div>
      <input placeholder="$$" 
      type={"number"} 
      value={dollor} 
      onChange={onChangeCost}>
      </input>
    </div>
    <hr/>
    <h3> your dollor to Coin is : {dollor / toCoin}</h3>
  </div>
  )
}

export default CoinTracker;