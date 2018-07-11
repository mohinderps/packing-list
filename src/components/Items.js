import React, { Component } from 'react';
import Item from './Item';
import Filter from './Filter';

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
    const { title, items, onRemove, onToggle } = this.props;
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
            <Item
              key={item.id}
              onToggle={onToggle}
              onRemove={onRemove}
              item={item}
            />
          ))}
      </section>
    );
  }
}

export default Items;
