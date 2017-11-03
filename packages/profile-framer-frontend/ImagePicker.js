/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import styleConstants from './style-constants';
import AppReduxLink from './AppReduxLink';

class RemoveButton extends Component {
  constructor(props){
    super();
    this.removeItem = (e) => {
      e.preventDefault();
      e.stopPropagation();
      props.removeItem(props.imgSrcObj.srcKey);
    };
  }
  render(){
    return (
      <div 
        onClick={this.removeItem}
        style={{
          width:'40px',
          height:'40px',
          background: 'yellow',
          position: 'absolute',
          zIndex:'999',
        }}
      >X</div>
    );
  }
}

const StyledOuterWrap = styled.div`
  ${props => {
    if (props.layoutVariation === 'vertical') {
      return `

      `;
    }
    if (props.layoutVariation === 'header') {
      return `
        display: inline-block;
        vertical-align: middle;
        padding-right: ${styleConstants.appPad}em;
        width: ${styleConstants.appPad * 5}em;
        height: ${styleConstants.appPad * 5}em;
      `;
    }
    return `
      padding-left:${styleConstants.appPad}em;
      padding-bottom:${styleConstants.appPad}em;
      vertical-align: middle;
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
    `;
  }} padding-bottom: ${styleConstants.appPad}em;
  box-sizing: border-box;
`;

const StyledImageOptions = styled.div`
  ${props => {
    let toReturn = '';
    if (props.layoutVariation === 'vertical') {
      return ``;
    }
    if (props.layoutVariation === 'header') {
      toReturn += `
        display: inline-block;
      `;
    } else {
      toReturn += `
        padding-right:${styleConstants.appPad}em;
      `;
    }

    return toReturn;
  }};
`;

const innerWrapStyles = `
  cursor: pointer;
  background: #eee;
  display: block;
`;
const StyledPhotoImgInnerWrap = styled.div`${innerWrapStyles};`;

const StyledAppReduxLink = styled(AppReduxLink)`
  ${innerWrapStyles}
`;

const StyledPhotoImg = styled.img`
  display: block;
  width: 100%;
`;

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
    const images =
      this.props.limit !== Infinity
        ? this.props.images.slice(0, this.props.limit)
        : this.props.images;
    return (
      <StyledImageOptions
        className="imageOptions"
        layoutVariation={this.props.layoutVariation}
      >
        {images.map((imgSrcObj, i) => {
          let InnerWrap = StyledPhotoImgInnerWrap;
          const InnerWrapProps = {};
          const imgProps = {
            className: 'photoImg',
            src: imgSrcObj.src,
            alt: `item number ${i}`,
          };
          const generatedLinkTo = this.props.generateLinkTo(imgSrcObj);
          if (generatedLinkTo) {
            InnerWrap = StyledAppReduxLink;
            InnerWrapProps.to = generatedLinkTo;
          } else {
            imgProps.onClick = this.imgOnClick(imgSrcObj);
          }
          return (
            <StyledOuterWrap
              layoutVariation={this.props.layoutVariation}
              key={imgSrcObj.src}
            >
              <InnerWrap
                {...InnerWrapProps}
                layoutVariation={this.props.layoutVariation}
              >
                <RemoveButton removeItem={this.props.removeItem} imgSrcObj={imgSrcObj} />
                <StyledPhotoImg
                  {...imgProps}
                  layoutVariation={this.props.layoutVariation}

                />
              </InnerWrap>
            </StyledOuterWrap>
          );
        })}
      </StyledImageOptions>
    );
  }
}
ImagePicker.propTypes = {
  onClick: PropTypes.func,
  images: PropTypes.array,
  generateLinkTo: PropTypes.func,
  limit: PropTypes.number,
  layoutVariation: PropTypes.string,
  removeItem: PropTypes.func,
};
ImagePicker.defaultProps = {
  onClick: () => {},
  images: [],
  generateLinkTo: () => {},
  limit: Infinity,
  layoutVariation: '',
  removeItem: () => {},
};

export default ImagePicker;
