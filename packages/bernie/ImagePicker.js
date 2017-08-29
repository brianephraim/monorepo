/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import styleConstants from './style-constants';
import ConnectResponsiveStatusesDictHOC from './ConnectResponsiveStatusesDictHOC';
import ModalScreen from './ModalScreen';

const StyledButton = ConnectResponsiveStatusesDictHOC(styled.div`
  ${styleConstants.mixins.button()}
`);

const StyledButtonInnerSpan = ConnectResponsiveStatusesDictHOC(styled.span`
  ${styleConstants.mixins.buttonInner()}
`);

const StyledImageOptions = ConnectResponsiveStatusesDictHOC(styled.div`
  padding-right:${styleConstants.appPad}em;
`);

const StyledPhotoImg = ConnectResponsiveStatusesDictHOC(styled.img`
  vertical-align: middle;
  padding-left:${styleConstants.appPad}em;
  padding-bottom:${styleConstants.appPad}em;
  box-sizing:border-box;
  
  cursor:pointer;
  display:inline-block;
  width:25%;
  @media (max-width: 1100px){
    width:33.333%;
  }
  @media (max-width: 600px){
    width:50%;
  }
  @media (max-width: 350px){
    width:100%;
  }
`);

class ImagePicker extends Component {
  constructor() {
    super();
    this.state = {
      images: [],
    };
  }
  /*
    {this.state.images.map((imgSrc) => {
        return  (<img className="photoImg" src={imgSrc} />);
    })
    ;}
  */
  imgOnClick(imgSrc) {
    return () => {
      this.props.onClick(imgSrc);
    };
  }
  render() {
    // const imgSrc =
    //   'https://scontent.xx.fbcdn.net/v/t1.0-9/14729128_10157953620800725_5026720440547477533_n.jpg?oh=ac158b7c520d1310164aabb3c18fa3ff&amp;oe=59F6F820';
    return (
      <ModalScreen hasCloseButton headerText="Pick a photo">
        <StyledImageOptions className="imageOptions">
          {this.props.images.map((imgSrcObj, i) => {
            return (
              <StyledPhotoImg
                className="photoImg"
                src={imgSrcObj.src}
                key={imgSrcObj.src}
                alt={`item number ${i}`}
                onClick={this.imgOnClick(imgSrcObj)}
              />
            );
          })}
        </StyledImageOptions>
      </ModalScreen>
    );
  }
}
ImagePicker.propTypes = {
  onClick: PropTypes.func,
  images: PropTypes.array,
};
ImagePicker.defaultProps = {
  onClick: () => {},
  images: [],
};

export default ImagePicker;
