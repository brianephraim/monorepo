import React from 'react';
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
const StyledButtonInnerSpan = styled.span`
  ${styleConstants.mixins.buttonInner()};
  background: ${styleConstants.colors.red};
`;
function CompletionInterface(props) {
  const url = props.generateCompletionUrl(props.activeCompositeImageData);
  return (
    <div>
      <StyledH2>Drag and resize the box to crop</StyledH2>
      <StyledButtonWrap className="modal_buttonGroup">
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
CompletionInterface.propTypes = {
  activeCompositeImageData: PropTypes.object.isRequired,
  generateCompletionUrl: PropTypes.func.isRequired,
};
export default CompletionInterface;

const completionInterfaceHeights = {
  normal: 128,
  shrink: 88,
  compact: 88,
};
export { completionInterfaceHeights };
