import {connect} from 'react-redux';
import Item from '../components/Item';
import {toggleItem, removeItem} from '../actions';

function mapDispatchToProps(dispatch) {
  return {
    onRemove: item => dispatch(removeItem(item)),
    onToggle: item => dispatch(toggleItem(item))
  };
}

const ItemContainer = connect(null, mapDispatchToProps)(Item);

export default ItemContainer;
