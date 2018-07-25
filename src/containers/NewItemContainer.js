import {connect} from 'react-redux';
import NewItem from '../components/NewItem';
import {addItem} from '../actions';

function mapDispatchToProps(dispatch) {
  return {
    onSubmit: item => dispatch(addItem(item))
  };
}

const NewItemContainer = connect(null, mapDispatchToProps)(NewItem);

export default NewItemContainer;
