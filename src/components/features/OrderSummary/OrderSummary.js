import React from 'react';
import PropTypes from 'prop-types';

import {calculateTotal} from '../../../utils/calculateTotal';
import {formatPrice} from '../../../utils/formatPrice';

import styles from './OrderSummary.scss';

class OrderSummary extends React.Component {

  static propTypes = {
    tripCost: PropTypes.node,
    options: PropTypes.object,
  }

  render() {
    const { tripCost, options } = this.props;
    const totalPrice = calculateTotal(formatPrice(tripCost), options);
    return (
      <h2 className={styles.component}>Total: <strong>${totalPrice}</strong></h2>
    );
  }
}

export default OrderSummary;
