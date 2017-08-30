/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import styleConstants from './style-constants';
import ConnectResponsiveStatusesDictHOC from './ConnectResponsiveStatusesDictHOC';
import {BernieLink} from './routingComponents';
import { compositeImageIntoParams } from './compositeImage';


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
    const images = this.props.limit !== Infinity ? this.props.images.slice(0,this.props.limit) : this.props.images;
    return (
      <StyledImageOptions className="imageOptions">
        {images.map((imgSrcObj, i) => {
          const imgProps = {
            className: "photoImg",
            src: imgSrcObj.src,
            key: imgSrcObj.src,
            alt: `item number ${i}`,
          };
          if (this.props.setsForegroundForCrop) {
            return (
              <BernieLink
                key={imgSrcObj.src}
                to={
                  {
                    type: `BERNIE_CROP`,
                    payload: {
                      ...compositeImageIntoParams(this.props.compositeImageData),
                      fgSrcKey: imgSrcObj.srcKey
                    }
                  }

                }
              >
                <StyledPhotoImg
                  {...imgProps}
                />
              </BernieLink>
            );
          }
          return (
            <StyledPhotoImg
              {...imgProps}
              onClick={this.imgOnClick(imgSrcObj)}
            />
          );
        })}
      </StyledImageOptions>
    );
  }
}
ImagePicker.propTypes = {
  onClick: PropTypes.func,
  images: PropTypes.array,
  setsForegroundForCrop: PropTypes.bool,
  compositeImageData: PropTypes.object,
  limit: PropTypes.number,
};
ImagePicker.defaultProps = {
  onClick: () => {},
  images: [],
  setsForegroundForCrop: false,
  compositeImageData: null,
  limit: Infinity,
};

export default connect(
  ( state /* , { params }*/) => {
    return {
      compositeImageData: state.bernie.compositeImageData,
    };
  },
  {
    // setCompositeImageData: (action) => { 
    //   return action;
    // },
  }
)(ImagePicker);
