import {combineReducers} from 'redux';
import {
  SELL,
  BUY,
  CHANGE_DATE,
  CLEAR_STOCKS,
  CHANGE_DISPLAY_STOCKS,
  INSERT_STOCKS
} from './actions';

const insertStocks = (state = [], action) => {
  switch(action.type) {
    case INSERT_STOCKS:
      return [
        ...state,
        action.data
      ]
    case CLEAR_STOCKS:
      return []
    default:
      return state;
  }
}

const displayStocks = (state = [], action) => {
  switch(action.type) {
    case CHANGE_DISPLAY_STOCKS:
      return action.data
    default:
      return state;
  }
}

const userData = (state = {account: { balance: 300000, stocks: {} }, transactions: [] }, action) => {
  let newTransaction;

  switch (action.type) {
    case SELL:
        newTransaction = {
          type: action.data.transaction.type,
          stock: action.data.transaction.stock,
          amount: action.data.transaction.amount,
          date: action.data.transaction.date
        };
        return {
          account: {
            balance: state.account.balance += (action.data.stockPrice * action.data.transaction.amount),
            stocks: { 
              ...state.account.stocks, 
              [action.data.transaction.stock]: Number(state.account.stocks[action.data.transaction.stock]) - Number(action.data.transaction.amount)
            }
          },
          transactions: [...state.transactions, newTransaction]
        };
    case BUY:
        newTransaction = {
          type: action.data.transaction.type,
          stock: action.data.transaction.stock,
          amount: action.data.transaction.amount,
          date: action.data.transaction.date
        };
      console.log(action.data.transaction.stock);
        return {
          account: {
            balance: state.account.balance - (action.data.stockPrice * action.data.transaction.amount),
            stocks: { 
              ...state.account.stocks, 
              [action.data.transaction.stock]: Number(state.account.stocks[action.data.transaction.stock] || '0') + Number(action.data.transaction.amount)
            }
          },
          transactions: [...state.transactions, newTransaction]
        };
    default:
      return state;
  }
};

const date = (state = new Date().toISOString().substring(0,10), action) => {
  switch (action.type) {
    case CHANGE_DATE:
      return action.data;
    default:
      return state;
  }
};

export const stockApp = combineReducers({
  insertStocks,
  displayStocks,
  userData,
  date
});

