import {connect} from 'react-redux';
import OrderForm from './OrderForm';
import {getOrderOptions, setOrderOption} from '../../../redux/orderRedux';

const mapStateToProps = (state) => ({
  options: getOrderOptions(state),
});

const mapDispatchToProps = dispatch => ({
  getOrderOptions: option => dispatch(getOrderOptions(option)),
  setOrderOption: option => dispatch(setOrderOption(option)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);
