import {connect} from 'react-redux';
import Items from '../components/Items';

const mapStateToProps = (state) => {
  return {
    items: state.filter(item => !item.packed)
  };
}

const UnpackedItemsContainer = connect(mapStateToProps)(Items);

export default UnpackedItemsContainer;
