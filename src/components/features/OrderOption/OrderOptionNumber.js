import React from 'react';
import PropTypes from 'prop-types';

import styles from './OrderOption.scss';

const OrderOptionNumber = ({limits, currentValue, setOptionValue}) => (
  <div className={styles.number}>
    <input className={styles.inputSmall}
      type='number'
      value={currentValue}
      min={limits.min}
      max={limits.max}
      onChange={event => setOptionValue(event.currentTarget.value)} />
  </div>
);

OrderOptionNumber.propTypes = {
  limits: PropTypes.object,
  currentValue: PropTypes.node,
  setOptionValue: PropTypes.func,
};

export default OrderOptionNumber;
