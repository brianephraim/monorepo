import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import styleConstants from './style-constants';
import {
  EditDesignButtonGroup,
  GetPhotoMinimalButtonGroup,
} from './buttonGroups';

const StyledControlsBarWrap = styled.div`
  line-height: 0;
  height: ${styleConstants.appPad * 8}em
  overflow: hidden;
  ${styleConstants.mixins.shrinkFontBreakpointStyles()}
`;
class ControlsBar extends Component {
  constructor() {
    super();
    this.reduceButtonInstructions = this.reduceButtonInstructions.bind(this);
  }
  reduceButtonInstructions(buttons) {
    return buttons.reduce((accum, buttonInfo) => {
      if (
        buttonInfo.actionType === 'SELECT_TEMPLATE' &&
        this.props.windowWidth <= styleConstants.breakpoints.compact
      ) {
        accum.push({
          ...buttonInfo,
          text: 'change design',
        });
      } else if (buttonInfo.actionType !== 'UPLOAD_TEMPLATE') {
        accum.push(buttonInfo);
      }
      return accum;
    }, []);
  }
  render() {
    const hideExtras =
      this.props.windowWidth <= styleConstants.breakpoints.compact;
    return (
      <StyledControlsBarWrap>
        <EditDesignButtonGroup
          filter={this.reduceButtonInstructions}
          layoutVariation="header"
          hideExtras={hideExtras}
        />
        <GetPhotoMinimalButtonGroup
          filter={this.reduceButtonInstructions}
          layoutVariation="header"
          hideExtras={hideExtras}
          hasLeftBorder={!hideExtras}
          noLeftPadding={hideExtras}
        />
      </StyledControlsBarWrap>
    );
  }
}
ControlsBar.propTypes = {
  windowWidth: PropTypes.number.isRequired,
};

export default ControlsBar;

const controlsBarHeights = {
  normal: 128,
  shrink: 96,
  compact: 50,
};
export { controlsBarHeights };
