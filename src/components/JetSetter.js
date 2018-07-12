import React, { Component } from 'react';
import NewItem from './NewItem';
import Items from './Items';

import ItemsStore from '../lib/ItemsStore';
import * as actions from '../lib/actions';

class JetSetter extends Component {
  render() {
    const { packedItems, unpackedItems, markAllAsUnpacked } = this.props;
    return (
      <div className="Application">
        <NewItem />
        <Items
          title="Unpacked Items"
          items={unpackedItems}
        />
        <Items
          title="Packed Items"
          items={packedItems}
        />
        <button className="button full-width" onClick={markAllAsUnpacked}>
          Mark All As Unpacked
        </button>
      </div>
    );
  }
}

class JetSetterContainer extends Component {
  constructor(props){
    super(props);
    this.state = ItemsStore.getState();
    this.updateState = this.updateState.bind(this);
    this.markAllAsUnpacked = this.markAllAsUnpacked.bind(this);
  }

  updateState() {
    this.setState(ItemsStore.getState());
  }

  componentDidMount() {
    ItemsStore.on('change', this.updateState);
  }

  componentWillUnmount() {
    ItemsStore.off('change', this.updateState);
  }

  markAllAsUnpacked() {
    actions.markAllAsUnpacked();
  };

  render() {
    const { items } = this.state;
    const unpackedItems = items.filter(item => !item.packed);
    const packedItems = items.filter(item => item.packed);

    return (
      <JetSetter
        packedItems={packedItems}
        unpackedItems={unpackedItems}
        markAllAsUnpacked={this.markAllAsUnpacked}/>
    );
  }
}

export default JetSetterContainer;
