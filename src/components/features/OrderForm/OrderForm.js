import React from 'react';
import PropTypes from 'prop-types';

import OrderSummary from '../OrderSummary/OrderSummary.js';
import OrderOption from '../OrderOption/OrderOption.js';
import pricing from '../../../data/pricing.json';
import Button from '../../common/Button/Button';
import settings from '../../../data/settings';
import {formatPrice} from '../../../utils/formatPrice';
import {calculateTotal} from '../../../utils/calculateTotal';

import {Grid, Row, Col} from 'react-flexbox-grid';

const sendOrder = (options, tripCost, tripName, tripId, countryCode) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));

  const payload = {
    ...options,
    totalCost,
    tripName,
    tripId,
    countryCode,
  };

  if (options.name !='' && options.contact != '') {

    const url = settings.db.url + '/' + settings.db.endpoint.orders;

    const fetchOptions = {
      cache: 'no-cache',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    };

    fetch(url, fetchOptions)
      .then(function(response){
        return response.json();
      }).then(function(parsedResponse){
        console.log('parsedResponse', parsedResponse);
      });
  } else {
    alert('Please fill your name and contact');
  }
};

class OrderForm extends React.Component {

  static propTypes = {
    tripCost: PropTypes.node,
    options: PropTypes.object,
    pricing: PropTypes.array,
    setOrderOption: PropTypes.func,
    tripName: PropTypes.string,
    tripId: PropTypes.string,
    countryCode: PropTypes.string,
  }

  render() {
    const { tripCost, options, setOrderOption, tripName, tripId, countryCode} = this.props;
    return(
      <Grid>
        <Row>
          {pricing.map(option =>
            <Col md={4} key={option.id}>
              <OrderOption {...option} currentValue={options[option.id]} setOrderOption={setOrderOption}></OrderOption>
            </Col>
          )}
          <Col xs={12}>
            <OrderSummary tripCost={tripCost} options={options} />
            <Button onClick={() => sendOrder(options, tripCost, tripName, tripId, countryCode)}>Order now!</Button>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default OrderForm;
