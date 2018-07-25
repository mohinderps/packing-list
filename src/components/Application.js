import React, { Component } from 'react';
import uniqueId from 'lodash/uniqueId';
import PackedItemsContainer from '../containers/PackedItemsContainer';
import UnpackedItemsContainer from '../containers/UnpackedItemsContainer';
import MarkAllAsUnpackedContainer from '../containers/MarkAllAsUnpackedContainer';
import NewItemContainer from '../containers/NewItemContainer';

import './Application.css';

class Application extends Component {

  render() {
    return (
      <div className="Application">
        <NewItemContainer />
        <UnpackedItemsContainer title="Unpacked Items" />
        <PackedItemsContainer title="Packed Items" />
        <MarkAllAsUnpackedContainer />
      </div>
    );
  }
}

export default Application;
