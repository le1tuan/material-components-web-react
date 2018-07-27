import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import {Chip, ChipSet} from '../../../packages/chips';

class ShirtSizes extends React.Component {
  state = {
    selectedChipId: 1,
  }

  render() {
    return (
      <ChipSet selectedChipIds={new Set([this.state.selectedChipId])} >
        <Chip id={0} label='Small' />
        <Chip id={1} label='Medium' />
        <Chip id={2} label='Large' />
      </ChipSet>
    );
  }
}

class ShoppingFilters extends React.Component {
  state = {
    selectedChipIds: new Set([0, 1]),
  };

  render() {
    return (
      <ChipSet filter selectedChipIds={this.state.selectedChipIds}>
        <Chip id={0} label='Tops' />
        <Chip id={1} label='Bottoms' />
        <Chip id={2} label='Shoes' />
      </ChipSet>
    );
  }
}

ReactDOM.render((
  <div>
    Choice chips
    <ShirtSizes />
    Filter chips
    <ShoppingFilters />
  </div>
), document.getElementById('app'));
