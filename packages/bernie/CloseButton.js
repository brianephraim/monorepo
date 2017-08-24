import React from 'react';
import {back} from 'redux-first-router';

import styled from 'styled-components';
import styleConstants from './style-constants';
import ConnectResponsiveStatusesDictHOC from './ConnectResponsiveStatusesDictHOC';

const StyledButton = ConnectResponsiveStatusesDictHOC(styled.div`
  ${styleConstants.mixins.button()}
`);
const StyledButtonInnerSpan = ConnectResponsiveStatusesDictHOC(styled.span`
  ${styleConstants.mixins.buttonInner()}
  background: ${styleConstants.colors.red};
`);

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
