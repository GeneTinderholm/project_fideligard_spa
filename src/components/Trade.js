import React from 'react';
import API_KEY from '../api_key.js';

const Trade = ({date, userData, match, onSubmit, handleChange, price})=> {
  console.log(price);
  let tickerValue = ''
  console.log(match);
  if(match.params.ticker){
    tickerValue = match.params.ticker
    let reqDate = new Date(date);
    if(reqDate.getDay() === 5){
      reqDate.setDate(reqDate.getDate() - 1);
    } else if(reqDate.getDay() === 6){
      reqDate.setDate(reqDate.getDate() - 2);
    }
    const reqDateString = reqDate.toISOString().substring(0,10);
    fetch(
      `https://www.quandl.com/api/v3/datatables/WIKI/PRICES.json?date=${reqDateString}&ticker=${match.params.ticker}&qopts.columns=close&api_key=${API_KEY}`,
    )
      .then(response => response.json())
      .then(json => {
        if(typeof json.datatable.data[0] !== "undefined"){
          if(json.datatable.data[0][0].toString() !== price){
            handleChange(json.datatable.data[0][0]);
          }
        }
      })
  }
  return(
    <div className='container'>
      <h4>Trade</h4>
      <form style={{"textAlign": "left"}} onSubmit = {onSubmit}>
        <input className='form-control' type="text" name="ticker" defaultValue={tickerValue} />
        <select name="transaction">
          <option defaultValue="buy">Buy</option>
          <option value="sell">Sell</option>
        </select>
        <input className='form-control' type="text" name="quantity" />
        <input type="date" name="date" defaultValue={date} />
        <input type="hidden" name="price" defaultValue={price} />
        <input type="hidden" name="userData" defaultValue={userData.account.balance} />
        <input type="hidden" name="userStock" value={userData.account.stocks[match.params.ticker]} />
        <p>Price: {price}</p>
        <input type="submit" />
      </form>
    </div>
  )
}

export default Trade;
