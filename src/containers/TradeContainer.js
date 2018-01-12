import React, {Component} from 'react';
import Trade from '../components/Trade';
import {connect} from 'react-redux';
import API_KEY from '../api_key.js';
import {buy, sell} from '../actions.js';

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  return{
    date: state.date,
    userData: state.userData,
    match: ownProps.match
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log(this);
  return {
    onSubmit: (e) => {
      e.preventDefault();
      let form = e.target;
      console.log(form);
      if(form.transaction.value === "sell"){
        if(form.userStock.value >= form.quantity.value){
          dispatch(sell({ticker: ownProps.match.params.ticker, price: form.price.value}, form.quantity.value, new Date()));
      }
    } else if(form.transaction.value === "buy"){
      console.log(form.userData.value, form.price.value, form.quantity.value);
      if(form.userData.value >= (form.price.value * form.quantity.value)){
        dispatch(buy({ticker: ownProps.match.params.ticker, price: form.price.value}, form.quantity.value, new Date()));
      }
    }
  }
}
}

class TradeContainer extends Component {
  constructor(props){
    super(props);
    this.props = props;
    this.state = {
      price: ''
    }
  }
  render(){
    return(
      <Trade date={this.props.date} userData={this.props.userData} match={this.props.match} onSubmit={this.props.onSubmit} handleChange = {(price)=>{this.setState({price: price.toString()})}} price={this.state.price} />
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TradeContainer);

