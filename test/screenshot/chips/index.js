import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import {Chip, ChipSet} from '../../../packages/chips';

class ShirtSizes extends React.Component {

  render() {
    return (
      <ChipSet selectedChipId={1} >
        <Chip id={0} label='Small' />
        <Chip id={1} label='Medium' />
        <Chip id={2} label='Large' />
      </ChipSet>
    );
  }
}

// class ShoppingFilters extends React.Component {
//   state = {
//     selectedChipIds: new Set([0, 1]),
//   };

//   isSelected = (id) => {
//     return this.state.selectedChipIds.has(id);
//   }

//   handleSelect = (id) => {
//     const selectedChipIds = new Set(this.state.selectedChipIds);
//     if (this.isSelected(id)) {
//       selectedChipIds.delete(id);
//     } else {
//       selectedChipIds.add(id);
//     }
//     this.setState({selectedChipIds});
//   }

//   render() {
//     return (
//       <ChipSet filter>
//         <Chip selected={this.isSelected(0)} id={0} label='Tops' handleSelect={this.handleSelect}/>
//         <Chip selected={this.isSelected(1)} id={1} label='Bottoms' handleSelect={this.handleSelect}/>
//         <Chip selected={this.isSelected(2)} id={2} label='Shoes' handleSelect={this.handleSelect}/>
//       </ChipSet>
//     );
//   }
// }

ReactDOM.render((
  <div>
    Choice chips
    <ShirtSizes />
    Filter chips
    {/* <ShoppingFilters /> */}
  </div>
), document.getElementById('app'));
