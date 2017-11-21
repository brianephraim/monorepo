import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import styleConstants from './style-constants';
import CloseButton from './CloseButton';

/*
.modalizer {
  z-index: $modal-z-index;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: table;
  // with display:table, firefox REALLY needs height
  height: 100%;

  @include destyle-role-button();

  &__vertical-center-wrap {
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    // ios safari ipad wants 100%
    height: 100%;
  }

  &__background-click-surface {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &__horizontal-center-wrap {
    display: inline-block;
    text-align: left;

    @include destyle-role-button();
  }
}
*/
/*
<div class="modalizer" ng-if="$ctrl.shouldOpen()" ng-click="$ctrl.onOverlayClick($event)">
  <div class="modalizer__vertical-center-wrap">
    <div class="modalizer__horizontal-center-wrap" ng-click="$ctrl.onPanelClick($event)" ng-transclude></div>
  </div>
</div>
*/


const StyledWrap = styled.div`
  color: black;
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: 3;
  background: ${styleConstants.colors.white};
`;

const StyledWrapCenter = styled.div`
  color: black;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 3;
  background: ${styleConstants.colors.white};
  display: table;
  // with display:table, firefox REALLY needs height
  height: 100%;
`;

const StyledVerticalCenter = styled.div`
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  // ios safari ipad wants 100%
  height: 100%;
`;

const StyledHorizontalCenter = styled.div`
  display: inline-block;
  text-align: left;
`;

const StyledH2 = styled.h2`
  padding: ${styleConstants.appPad * 0.5}em ${styleConstants.appPad * 1.5}em;
  text-align: center;
  font-size: ${styleConstants.appPad * 2}em;
`;

export default function ModalScreen(props) {
  if (!props.center){
    return (
      <StyledWrap>
        {props.hasCloseButton && <CloseButton />}
        {props.headerContent && props.headerContent}
        {props.headerText &&
          <StyledH2>
            {props.headerText}
          </StyledH2>}
        {props.children}
      </StyledWrap>
    );
  }
  return (
    <StyledWrapCenter>
      {props.hasCloseButton && <CloseButton />}
      <StyledVerticalCenter>
        <StyledHorizontalCenter>
          {props.headerContent && props.headerContent}
          {props.headerText &&
            <StyledH2>
              {props.headerText}
            </StyledH2>}
          {props.children}
        </StyledHorizontalCenter>
      </StyledVerticalCenter>
    </StyledWrapCenter>
  );
}
ModalScreen.propTypes = {
  center: PropTypes.bool,
  hasCloseButton: PropTypes.bool,
  children: PropTypes.node,
  headerText: PropTypes.string,
  headerContent: PropTypes.node,

};
ModalScreen.defaultProps = {
  center: true,
  hasCloseButton: false,
  headerText: '',
  children: null,
  headerContent:null,
};
