import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import styleConstants from './style-constants';

const StyledButtonWrap = styled.div`
  padding-left: ${styleConstants.appPad}em;
  padding-right: ${styleConstants.appPad}em;
`;
const StyledH2 = styled.h2`
  padding: ${styleConstants.appPad / 2}em ${styleConstants.appPad * 1.5}em;
  text-align: center;
  font-size: ${styleConstants.appPad * 2}em;
  ${styleConstants.mixins.shrinkFontBreakpointStyles()};
`;

const StyledButtonAnchor = styled.a`${styleConstants.mixins.button()};`;
const StyledButtonButton = styled.button`${styleConstants.mixins.button()};`;
const StyledButtonInnerSpan = styled.span`
  ${styleConstants.mixins.buttonInner()};
  background: ${styleConstants.colors.red};
`;
class CompletionInterface extends Component {
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    this.props.onClick(this.props.activeCompositeImageData);
  }
  render(){
    const url = this.props.generateCompletionUrl(this.props.activeCompositeImageData);
    let ButtonComp = StyledButtonAnchor;
    let buttonProps = {href: url};
    if (this.props.useClickHandledButton) {
      ButtonComp = StyledButtonButton;
      buttonProps = {onClick: this.onClick};
    }
    return (
      <div>
        <StyledH2>Drag and resize the box to crop</StyledH2>
        <StyledButtonWrap className="modal_buttonGroup">
          <ButtonComp {...buttonProps} className="button mainButton cropDoneButton">
            <StyledButtonInnerSpan>Done</StyledButtonInnerSpan>
          </ButtonComp>
        </StyledButtonWrap>
      </div>
    );
  }
}
CompletionInterface.propTypes = {
  useClickHandledButton: PropTypes.bool,
  activeCompositeImageData: PropTypes.object.isRequired,
  generateCompletionUrl: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};
CompletionInterface.defaultProps = {
  useClickHandledButton: false,
};
export default CompletionInterface;

const completionInterfaceHeights = {
  normal: 128,
  shrink: 88,
  compact: 88,
};
export { completionInterfaceHeights };
