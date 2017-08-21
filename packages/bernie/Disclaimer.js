/* eslint-disable camelcase */
/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import styled from 'styled-components';
/*
$blue: #087ED7;
$red: #EA504E;
$white: #fff;
$grey0: #eee;
$grey1: #ccc;
$grey2: #666;

$appPad: 1em;
$headerHeight: $appPad*2;

$singleColHome: '.responsive_singleCol .homeLayout &';// #{$singleColHome}

$font1: 'Fjalla One', sans-serif;
$font2: 'Cantarell', sans-serif;
*/
const styleConstants = {
  colors: {
    blue: '#087ED7',
    red: '#EA504E',
    white: '#fff',
    grey0: '#eee',
    grey1: '#ccc',
    grey2: '#666',
  },
  font1: "'Fjalla One', sans-serif",
  font2: "'Cantarell', sans-serif",
  appPad: 1,
};
styleConstants.headerHeight = styleConstants.appPad * 2;

const Styled_Disclaimer = styled.div`
  background: ${styleConstants.colors.grey0};
  border-top:1px solid ${styleConstants.colors.grey1};
  z-index:1;
  position:absolute;
  top:100%;
  padding: ${styleConstants.appPad * 12}em ${styleConstants.appPad}em ${styleConstants.appPad}em ${styleConstants.appPad}em;
  width:100%;
  box-sizing:border-box;
  text-align:center;
`;
const Styled_Disclaimer_P = styled.p`
  font-size: 12px;
  text-align:center;
  display:inline-block;
  padding:${styleConstants.appPad/2}em;
  border:1px solid ${styleConstants.colors.grey2};
  color:${styleConstants.colors.grey2};
`;
// This adds padding to the bottom and serves as disclaimer.
function BernieDisclaimer() {
  return (
    <Styled_Disclaimer>
      <Styled_Disclaimer_P>
        contact: admin@bernieselfie.com <br />
        <a href="/terms">Terms&nbsp;and&nbsp;Conditions</a>
        {' -- '}
        <a href="/privacy">Privacy&nbsp;Policy</a>
        <br />
        bernieselfie.com is not affiliated with any political party, candidate,
        or interest group.
      </Styled_Disclaimer_P>
    </Styled_Disclaimer>
  );
}

export default BernieDisclaimer;