export const addItem = (item) => {
  return {
    type: 'ADD_ITEM',
    item
  };
}

export const removeItem = (item) => {
  return {
    type: 'REMOVE_ITEM',
    item
  };
}

export const toggleItem = (item) => {
  return {
    type: 'TOGGLE_ITEM',
    item
  };
}

export const markAllAsUnpacked = () => {
  return {
    type: 'MARK_ALL_AS_UNPACKED',
  };
}
