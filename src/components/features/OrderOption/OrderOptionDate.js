import React from 'react';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';

import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const OrderOptionDate = ({setOptionValue, currentValue}) => (
  <DatePicker selected={currentValue} onChange = {setOptionValue} />
);

OrderOptionDate.propTypes = {
  currentValue: PropTypes.any,
  setOptionValue:PropTypes.func,
};

export default OrderOptionDate;
