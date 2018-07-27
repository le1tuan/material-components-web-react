import React, {Component} from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import ChipCheckmark from './ChipCheckmark';
import Chip from './Chip';

export default class ChipSet extends Component {
  checkmarkWidth_ = 0;
  state = {
    selectedChipId: this.props.selectedChipId,
  }

  get classes() {
    const {className} = this.props;
    return classnames('mdc-chip-set', className);
  }

  get adapter() {
    return {
      hasClass: (className) => this.classes.split(' ').includes(className),
    };
  }

  isSelected = (id) => {
    return this.state.selectedChipId === id;
  }

  //choice
  handleSelect = (id) => {
    if (this.isSelected(id)) {
      this.setState({selectedChipId: -1});
    } else {
      this.setState({selectedChipId: id});
    }
  }

  setCheckmarkWidth = (checkmark) => {
    if (!!this.checkmarkWidth_) {
      return;
    }
    this.checkmarkWidth_ = checkmark.width;
  }

  computeBoundingRect = (chipElement) => {
    const height = chipElement.getBoundingClientRect().height;
    const width = chipElement.getBoundingClientRect().width + this.checkmarkWidth_;
    return {height, width};
  }

  renderChip = (chip) => {
    return (
      <Chip
        selected={this.isSelected(chip.props.id)}
        chipCheckmark={this.props.filter ? <ChipCheckmark ref={this.setCheckmarkWidth}/> : null}
        computeBoundingRect={this.props.filter ? this.computeBoundingRect : null}
        handleSelect={this.handleSelect}
        {...chip.props} />
    );
  }

  render() {
    return (
      <div className={this.classes}>
        {React.Children.map(this.props.children, this.renderChip)}
      </div>
    );
  }
}

ChipSet.propTypes = {
  className: PropTypes.string,
  filter: PropTypes.bool,
  children: PropTypes.node,
};

ChipSet.defaultProps = {
  className: '',
  filter: false,
  children: null,
};
