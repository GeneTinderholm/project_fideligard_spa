export const SELL = "SELL";
export const BUY = "BUY";
export const CHANGE_DATE = "CHANGE_DATE";
export const CHANGE_DISPLAY_STOCKS = "CHANGE_DISPLAY_STOCKS";
export const INSERT_STOCKS = "INSERT_STOCKS";
export const CLEAR_STOCKS = "CLEAR_STOCKS";

// ---------------------------------------------------------
// Thunks 
// 2018-01-05 14:01
// ---------------------------------------------------------

// const file = require('./data.js');

//export getInitialData = (dispatch) => {
  //return distpatch => {
    //return new Promise((resolve, reject) => {
      //setTimeout(() => { 
        //resolve(
          //dispatch(insertStocks(file.object));
        //);
      //}, 1000);
    //});
  //}
//}

// ---------------------------------------------------------
// Actions 
// 2018-01-05 14:04
// ---------------------------------------------------------
export const changeDisplayStocks = data => {
  return {
    type: CHANGE_DISPLAY_STOCKS,
    data
  }
}

export const clearStocks = () => {
  return {
    type: CLEAR_STOCKS
  }
}

export const changeDate = data => {
  return {
    type: CHANGE_DATE,
    data
  };
};

export const sell = (stock, amount, date) => {
  return {
    type: SELL,
    data: {
      transaction: { 
        type: SELL,
        stock: stock.ticker,
        amount,
        date
      },
      stockPrice: stock.price
    }
  }
}

export const buy = (stock, amount, date) => {
  return {
    type: BUY,
    data: {
      transaction: { 
        type: BUY,
        stock: stock.ticker,
        amount,
        date
      },
      stockPrice: stock.price
    }
  }
}

export const insertStocks = (stocks) => {
  return {
    type: INSERT_STOCKS,
    data: stocks
  }
}

export const replaceDisplayStocks = (stocks) => {
  return {
    type: CHANGE_DISPLAY_STOCKS,
    data: stocks
  }
}
