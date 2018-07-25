import {connect} from 'react-redux';
import Items from '../components/Items';

const mapStateToProps = (state) => {
  return {
    items: state.filter(item => item.packed)
  };
}

const PackedItemsContainer = connect(mapStateToProps)(Items);

export default PackedItemsContainer;
