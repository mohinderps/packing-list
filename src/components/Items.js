import React, { Component } from 'react';
import Item from './Item';
import Filter from './Filter';
import ItemContainer from '../containers/ItemContainer';

class Items extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchTerm: ''
    };
    this.updateSearchTerm = this.updateSearchTerm.bind(this);
  }

  updateSearchTerm(searchTerm) {
    this.setState({
      searchTerm
    });
  };

  render() {
    const { title, items} = this.props;
    const {searchTerm} = this.state;
    return (
      <section className="Items">
        <h2>
          {title} ({items.length})
        </h2>
        <Filter searchTerm={searchTerm} onChange={this.updateSearchTerm} />
        {items
          .filter(item =>
            item.value.toLowerCase().includes(searchTerm.toLowerCase()),
          )
          .map(item => (
            <ItemContainer
              key={item.id}
              item={item}
            />
          ))}
      </section>
    );
  }
}

export default Items;
