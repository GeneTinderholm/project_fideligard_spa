import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom';

const StockViewerTable = ({stocks}) => {
  return (
    <div id="stock_viewer_table" className="container">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Price</th>
            <th>1D</th>
            <th>7D</th>
            <th>30D</th>
            <th>Trade?</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map(stock => {
            return (
              <tr key={stock.ticker}>
                <td>{stock.ticker}</td>
                <td>{stock.values[0]}</td>
                <td>{(stock.values[1] - stock.values[0]).toPrecision(3)}</td>
                <td>{(stock.values[2] - stock.values[0]).toPrecision(3)}</td>
                <td>{(stock.values[3] - stock.values[0]).toPrecision(3)}</td>
                <td><Link to={`/trade/${stock.ticker}`}>Trade</Link></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default StockViewerTable;
