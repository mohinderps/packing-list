import ApplicationDispatcher from './ApplicationDispatcher';
import EventEmitter from 'events';
import uniqueId from 'lodash/uniqueId';

let items = [
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
  { value: 'Sandwich', id: uniqueId(), packed: true },
];

class ItemsStore extends EventEmitter {
  constructor() {
    super();
    ApplicationDispatcher.register(action => {
      switch(action.type){
        case 'ADD_ITEM':
          const itemToAdd = action.item;
          items = [itemToAdd, ...items];
          this.emit('change');
          break;

        case 'REMOVE_ITEM':
          const itemToRemove = action.item;
          items = items.filter(item => item.id !== itemToRemove.id);
          this.emit('change');
          break;

        case 'TOGGLE_ITEM':
          const itemToToggle = action.item;
          items = items.map(item => {
            if(item.id !== itemToToggle.id) {
              return item;
            }
            return {...item, packed: !item.packed};
          });
          this.emit('change');
          break;

        case 'MARK_ALL_AS_UNPACKED':
          items = items.map(item => ({...item, packed: false}));
          this.emit('change');
          break;
      }
    });
  }

  getState() {
    return {items};
  }
}

export default new ItemsStore();
