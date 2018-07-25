import {connect} from 'react-redux';
import React from 'react';
import {markAllAsUnpacked} from '../actions';
import MarkAllAsUnpacked from '../components/MarkAllAsUnpacked';

function mapDispatchToProps(dispatch) {
  return {
    onClick: () => dispatch(markAllAsUnpacked())
  }
}

const MarkAllAsUnpackedContainer = connect(null, mapDispatchToProps)(MarkAllAsUnpacked);

export default MarkAllAsUnpackedContainer;
