import ApplicationDispatcher from './ApplicationDispatcher';

export const addItem = (itemToAdd) => {
  ApplicationDispatcher.dispatch({
    type: 'ADD_ITEM',
    item: itemToAdd
  });
}

export const removeItem = (itemToRemove) => {
  ApplicationDispatcher.dispatch({
    type: 'REMOVE_ITEM',
    item: itemToRemove
  });
}

export const toggleItem = (itemToToggle) => {
  ApplicationDispatcher.dispatch({
    type: 'TOGGLE_ITEM',
    item: itemToToggle
  });
}

export const markAllAsUnpacked = () => {
  ApplicationDispatcher.dispatch({
    type: 'MARK_ALL_AS_UNPACKED'
  });
}
