import React from 'react';
import DateComp from '../components/Date';
import { connect } from 'react-redux';
import { changeDate } from '../actions';

const mapDispatchToProps = dispatch => {
  return {
    onChange: (e) => {
      e.preventDefault();
      const newDate = e.target.value;
      dispatch(changeDate(newDate));
    }
  }
}

const DateContainer = connect(null, mapDispatchToProps)(DateComp);
export default DateContainer;
