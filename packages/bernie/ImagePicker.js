/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import styleConstants from './style-constants';
import ConnectResponsiveStatusesDictHOC from './ConnectResponsiveStatusesDictHOC';
import BernieLink from './BernieLink';
import { compositeImageIntoParams } from './compositeImage';
/*
const StyledDesignImg = styled.img`
  width: 100%;
  display: block;
`;
const StyledDesignInnerWrap = styled.div`
  cursor: pointer;
  background: #eee;
`;
const StyledDesign = styled.div`
  padding-bottom: ${styleConstants.appPad}em;
  box-sizing: border-box;
`;

<StyledDesign>
  <StyledDesignInnerWrap>
    <StyledDesignImg src="http://s3-us-west-1.amazonaws.com/bernieapp/decorations/h3.png" />
  </StyledDesignInnerWrap>
</StyledDesign>
<StyledDesign>
  <StyledDesignInnerWrap>
    <StyledDesignImg src="http://s3-us-west-1.amazonaws.com/bernieapp/decorations/h4.png" />
  </StyledDesignInnerWrap>
</StyledDesign>
<StyledDesign>
  <StyledDesignInnerWrap>
    <StyledDesignImg src="http://s3-us-west-1.amazonaws.com/bernieapp/decorations/wg.png" />
  </StyledDesignInnerWrap>
</StyledDesign>
*/
const StyledOuterWrap = styled.div`
  ${props => {
    console.log(props)
    if(props.inButtonGroup) {
      return `

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
    
  }}
  padding-bottom: ${styleConstants.appPad}em;
  box-sizing: border-box;
`;

const StyledImageOptions = styled.div`
  ${props => {
    if(props.inButtonGroup) {
      return ``;
    }
    return `
      padding-right:${styleConstants.appPad}em;
    `;
  }}
`;

const innerWrapStyles = `
  cursor: pointer;
  background: #eee;
  display: block;
`;
const StyledPhotoImgInnerWrap = styled.div`
  ${innerWrapStyles}
`;

const StyledBernieLink = styled(BernieLink)`
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
    const images = this.props.limit !== Infinity ? this.props.images.slice(0,this.props.limit) : this.props.images;
    return (
      <StyledImageOptions className="imageOptions" inButtonGroup={this.props.inButtonGroup}>
        {images.map((imgSrcObj, i) => {
          let InnerWrap = StyledPhotoImgInnerWrap;
          const InnerWrapProps = {
            
          };
          const imgProps = {
            className: "photoImg",
            src: imgSrcObj.src,
            alt: `item number ${i}`,
            
          };
          if (this.props.setsForegroundForCrop) {
            InnerWrap = StyledBernieLink;
            InnerWrapProps.to = {
              type: `BERNIE_CROP`,
              payload: {
                ...compositeImageIntoParams(this.props.compositeImageData),
                fgSrcKey: imgSrcObj.srcKey
              }
            };
          } else {
            imgProps.onClick = this.imgOnClick(imgSrcObj);
          }
          return (
            <StyledOuterWrap inButtonGroup={this.props.inButtonGroup} key={imgSrcObj.src} >
              <InnerWrap {...InnerWrapProps}  inButtonGroup={this.props.inButtonGroup} >
                <StyledPhotoImg {...imgProps}  inButtonGroup={this.props.inButtonGroup} />
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
  setsForegroundForCrop: PropTypes.bool,
  compositeImageData: PropTypes.object,
  limit: PropTypes.number,
  inButtonGroup: PropTypes.bool,
};
ImagePicker.defaultProps = {
  onClick: () => {},
  images: [],
  setsForegroundForCrop: false,
  compositeImageData: null,
  limit: Infinity,
  inButtonGroup: false,
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
