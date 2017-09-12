import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import styleConstants from './style-constants';

import {formPublishTemplateCropRequest} from './deriveUrlInfo';

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
    this.publishTemplateCrop = this.publishTemplateCrop.bind(this);
  }
  publishTemplateCrop() {
    console.log('this.props.activeCompositeImageData',this.props.activeCompositeImageData);
    const newTemplateCropSrcKey = formPublishTemplateCropRequest(this.props.activeCompositeImageData);
    console.log('newTemplateCropSrcKey',newTemplateCropSrcKey);
    this.props.publishTemplateCrop(newTemplateCropSrcKey,this.props.activeCompositeImageData);
  }
  render(){
    const url = this.props.generateCompletionUrl(this.props.activeCompositeImageData);
    return (
      <div>
        <StyledH2>Drag and resize the box to crop</StyledH2>
        <StyledButtonWrap className="modal_buttonGroup">
          <StyledButtonButton
            onClick={this.publishTemplateCrop}
            className="button mainButton cropDoneButton"
          >
            <StyledButtonInnerSpan>Done</StyledButtonInnerSpan>
          </StyledButtonButton>
          <StyledButtonAnchor
            href={url}
            className="button mainButton cropDoneButton"
          >
            <StyledButtonInnerSpan>Done</StyledButtonInnerSpan>
          </StyledButtonAnchor>
        </StyledButtonWrap>
      </div>
    );
  }
}
CompletionInterface.propTypes = {
  activeCompositeImageData: PropTypes.object.isRequired,
  generateCompletionUrl: PropTypes.func.isRequired,
  publishTemplateCrop: PropTypes.func.isRequired,
};
export default CompletionInterface;

const completionInterfaceHeights = {
  normal: 128,
  shrink: 88,
  compact: 88,
};
export { completionInterfaceHeights };
