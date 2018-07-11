import React, { Component } from 'react';
import uniqueId from 'lodash/uniqueId';
import NewItem from './NewItem';
import Items from './Items';

import './Application.css';

class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
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
      ]
    };

    this.toggleItem = this.toggleItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.markAllAsUnpacked = this.markAllAsUnpacked.bind(this);
  }

  addItem(item) {
    this.setState({
      items: [item, ...this.state.items]
    });
  }

  removeItem(itemToRemove) {
    this.setState({
      items: this.state.items.filter(item => item.id != itemToRemove.id)
    });
  }

  toggleItem(itemToToggle) {
    const items = this.state.items.map(item => {
      if(item.id !== itemToToggle.id) {
        return item;
      }
      return {...item, packed: !item.packed}
    });

    this.setState({
      items
    });
  }

  markAllAsUnpacked() {
    const items = this.state.items.map(item => ({...item, packed: false}));

    this.setState({
      items
    });
  }

  render() {
    const {items} = this.state;
    const unpackedItems = items.filter(item => !item.packed);
    const packedItems = items.filter(item => item.packed);

    return (
      <div className="Application">
        <NewItem onSubmit={this.addItem} />
        <Items title="Unpacked Items" items={unpackedItems} onToggle={this.toggleItem} onRemove={this.removeItem} />
        <Items title="Packed Items" items={packedItems} onToggle={this.toggleItem} onRemove={this.removeItem} />
        <button className="button full-width" onClick={this.markAllAsUnpacked}>Mark All As Unpacked</button>
      </div>
    );
  }
}

export default Application;
