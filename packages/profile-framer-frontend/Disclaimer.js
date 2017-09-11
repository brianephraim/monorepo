import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import styleConstants from './style-constants';
import ancestorConstantsHoc from './ancestorConstantsHoc';

const StyledDisclaimer = styled.div`
  background: ${styleConstants.colors.grey0};
  border-top: 1px solid ${styleConstants.colors.grey1};
  z-index: 1;
  position: absolute;
  top: 100%;
  padding: ${styleConstants.appPad * 12}em ${styleConstants.appPad}em
    ${styleConstants.appPad}em ${styleConstants.appPad}em;
  width: 100%;
  box-sizing: border-box;
  text-align: center;
`;
const StyledDisclaimerP = styled.p`
  font-size: 12px;
  text-align: center;
  display: inline-block;
  padding: ${styleConstants.appPad / 2}em;
  border: 1px solid ${styleConstants.colors.grey2};
  color: ${styleConstants.colors.grey2};
`;
// This adds padding to the bottom and serves as disclaimer.
function Disclaimer(props) {
  return (
    <StyledDisclaimer>
      <StyledDisclaimerP>
        contact: {props.constants.adminEmail} <br />
        <a href="/terms">Terms&nbsp;and&nbsp;Conditions</a>
        {' -- '}
        <a href="/privacy">Privacy&nbsp;Policy</a>
        <br />
        {props.constants.disclaimerText}
      </StyledDisclaimerP>
    </StyledDisclaimer>
  );
}
Disclaimer.propTypes = {
  constants: PropTypes.object.isRequired,
};
export default ancestorConstantsHoc(Disclaimer);
