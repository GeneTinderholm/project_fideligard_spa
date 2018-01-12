import React, {Component} from 'react';
import StockViewer from '../components/StockViewer';
import {connect} from 'react-redux';
import API_KEY from '../api_key.js';
import {insertStocks, clearStocks} from '../actions.js';

class StockViewerContainer extends Component {
  constructor(props) {
    super(props);
    this.props = props;

    this.state = {filter: ''};
  }

  grabData(...args) {
    let tickerSymbols = '';
    args.forEach(symbol => {
      tickerSymbols += ',' + symbol;
    });
    tickerSymbols = tickerSymbols.substring(11);
    let requestDate = new Date(args[0]);
    requestDate.setDate(requestDate.getDate() - 32);
    let requestString = requestDate.toISOString().substring(0,10).split('-').join('');
    fetch(
      `https://www.quandl.com/api/v3/datatables/WIKI/PRICES.json?date.gte=${
        requestString
      }&date.lte=${new Date(args[0]).toISOString().substring(0,10).split('-').join('')}&ticker=${tickerSymbols}&qopts.columns=ticker,close&api_key=${API_KEY}`,
    )
      .then(response => response.json())
      .then(json => {
        const offset = json.datatable.data.length / (args.length - 1);
        for(let i = 0; i < (args.length - 1); i++){
          let valueArray = []
          valueArray.push(json.datatable.data[offset * (i + 1) - 1][1])
          valueArray.push(json.datatable.data[offset * (i + 1) - 2][1])
          valueArray.push(json.datatable.data[offset * (i + 1) - 6][1])
          valueArray.push(json.datatable.data[offset * i ][1])
          this.props.dispatch(
            insertStocks({
              ticker: json.datatable.data[offset * i][0],
              values: valueArray
            }),
          );
        }
      })
      .catch(err => {
        console.error(err);
      });
  }

  componentDidMount() {
    this.grabData(this.props.date, 'AAPL','AMZN','COST','FB','GE','GOOGL','TWTR','XOM');
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.date != nextProps.date){
      this.props.dispatch(clearStocks());
      this.grabData(nextProps.date, 'AAPL','AMZN','COST','FB','GE','GOOGL','TWTR','XOM');

    }

  }

  render() {
    return <StockViewer stocks={this.props.stocks} />;
  }
}

const mapStateToProps = state => {
  const toReturn = state.insertStocks;
  return {
    date: state.date,
    stocks: state.insertStocks,
  };
};

export default connect(mapStateToProps, null)(StockViewerContainer);
