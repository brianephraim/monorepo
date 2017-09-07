import React from 'react';
import { back } from 'redux-first-router';

import styled from 'styled-components';
import styleConstants from './style-constants';

const StyledButton = styled.div`
  ${styleConstants.mixins.button()} position:absolute;
  right: 0;
  width: ${styleConstants.appPad * 3}em;
`;
const StyledButtonInnerSpan = styled.span`
  ${styleConstants.mixins.buttonInner()} background: ${styleConstants.colors
      .red};
  width: ${styleConstants.appPad * 3}em;
`;

export default function CloseButton() {
  return (
    <StyledButton
      className="closeButton button"
      onClick={back}
      role="button"
      tabIndex={0}
    >
      <StyledButtonInnerSpan>X</StyledButtonInnerSpan>
    </StyledButton>
  );
}
