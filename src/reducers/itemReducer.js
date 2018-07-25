import uniqueId from 'lodash/uniqueId';

const initialState = [
  { value: 'Pants', id: uniqueId(), packed: false },
  { value: 'Jacket', id: uniqueId(), packed: false },
  { value: 'iPhone Charger', id: uniqueId(), packed: false },
  { value: 'MacBook', id: uniqueId(), packed: false },
  { value: 'Sleeping Pills', id: uniqueId(), packed: true },
  { value: 'Underwear', id: uniqueId(), packed: false },
  { value: 'Hat', id: uniqueId(), packed: false },
  { value: 'T-Shirts', id: uniqueId(), packed: false },
  { value: 'Belt', id: uniqueId(), packed: false },
  { value: 'Passport', id: uniqueId(), packed: true },
  { value: 'Sandwich', id: uniqueId(), packed: true }
];

function ItemReducer(state = initialState, action) {
  switch(action.type) {
    case 'ADD_ITEM':
      return addItem(state, action);

    case 'REMOVE_ITEM':
      return removeItem(state, action);

    case 'TOGGLE_ITEM':
      return toggleItem(state, action);

    case 'MARK_ALL_AS_UNPACKED':
      return markAllAsUnpacked(state, action);

    default:
      return state;
  }
}

function addItem(state, action) {
  return [action.item, ...state];
}

function removeItem(state, action) {
  return state.filter(item => item.id !== action.item.id);
}

function toggleItem(state, action) {
  return state.map(item => {
    if(item.id === action.item.id) {
      return {...item, packed: !item.packed};
    }
    return item;
  })
}

function markAllAsUnpacked(state, action) {
  return state.map(item => ({...item, packed: false}));
}

export default ItemReducer;
