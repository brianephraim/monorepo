import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { makeActionFetchPhotos } from './fb';
import ImagePicker from './ImagePicker';
import makeActionSetBackground from './makeActionSetBackground';

function appConnect (mapStateToProps,mapDispatchToProps,...args){
  let newMapDispatchToProps = null;
  if (mapDispatchToProps) {
    newMapDispatchToProps = {}
    Object.keys(mapDispatchToProps).forEach((key) => {
      const oldMakeActionSetBackground = mapDispatchToProps[key];
      // const oldActionSetBackground = oldMakeActionSetBackground();
      const makeActionSetBackground = (...args) => {
        const oldActionSetBackground = oldMakeActionSetBackground(...args);
        if (typeof oldActionSetBackground === 'function'){
          return (dispatch,...args2) => {
            console.log('dddd');
            const newDispatch = (action,...args3) => {
              const newAction = {
                ...action,
                appNameSpace: 'BOOYA',
              };
              console.log(args3);
              dispatch(newAction,...args3);
            };
            return oldActionSetBackground(newDispatch, ...args2)
            // const newActionSetBackground = oldActionSetBackground.bind(null, ...[dispatch, ...args2]);
            // return newActionSetBackground;
          };
        }
        return oldActionSetBackground;
        // mapDispatchToProps[key](...args);
      };
      newMapDispatchToProps[key] = makeActionSetBackground;
    })
  }
  return connect(mapStateToProps, newMapDispatchToProps || mapDispatchToProps, ...args);
}

class ImagePickerFacebook extends Component {
  componentWillMount() {
    this.props.fetchFacebookPhotos();
  }
  render() {
    return <ImagePicker images={this.props.images} onClick={this.props.setBackground} {...this.props} />;
  }
}
ImagePickerFacebook.propTypes = {
  setBackground: PropTypes.func.isRequired,
  images: PropTypes.array.isRequired,
  fetchFacebookPhotos: PropTypes.func.isRequired,
};
export default appConnect(
  (state /* , { params }*/) => {
    return {
      images: state.bernie.facebookPhotos,
    };
  },
  {
    fetchFacebookPhotos: makeActionFetchPhotos,
    setBackground: makeActionSetBackground
  }
)(ImagePickerFacebook);
