import React, {Component} from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import {MDCChipSetFoundation} from '@material/chips';

import ChipCheckmark from './ChipCheckmark';
import Chip from './Chip';

export default class ChipSet extends Component {
  checkmarkWidth_ = 0;
  state = {
    selectedChipIds: this.props.selectedChipIds,
  }

  componentDidMount() {
    this.foundation_ = new MDCChipSetFoundation(this.adapter);
    this.foundation_.init();
  }

  componentWillUnmount() {
    this.foundation_.destroy();
  }

  get classes() {
    const {className, filter, choice} = this.props;
    return classnames('mdc-chip-set', className, {
      'mdc-chip-set--filter': filter,
      'mdc-chip-set--choice': choice,
    });
  }

  get adapter() {
    return {
      hasClass: (className) => this.classes.split(' ').includes(className),
    };
  }

  isSelected = (id) => {
    return this.state.selectedChipIds && this.state.selectedChipIds.has(id);
  }

  handleSelect = (chipId) => {
    // We'll have to expose some MDCChipSetFoundation methods so we won't really have
    // to do this hack.
    const e = {
      detail: {
        chipId,
      }
    }
    this.foundation_.chipInteractionHandler_(e);
    this.props.handleSelect(this.foundation_.selectedChipIds_);
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
