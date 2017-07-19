import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactCropper from 'react-cropper';
import windowSizer from 'windowSizer';
import 'cropperjs/dist/cropper.css';
import './cropperLibMonkeyPatch';

class Cropper extends Component {
  constructor(props) {
    super();
    this.state = {
      x:0,
      y:0,
      cropWidth:400,
      cropHeight:400,
      src: props.src,
      cropperExists: true,
    };
    this._cropBound = this._crop.bind(this);
  }

  // react-cropper needs a little help because its props don't want to change
  // so lifecycle stuff below
  componentDidMount() {
    this.windowSizerCb = windowSizer.addCb(() => {
      this.setState({cropperExists: false}, () => {
        this.setState({cropperExists: true});
      });
    });
  }
  componentWillUnmount() {
    if (this.windowSizerCb) {
      windowSizer.removeCb();
      delete this.windowSizerCb;
    }
  }

  _crop(cropData){
    var data = cropData.detail;
    var result = {
        x:data.x,
        y:data.y,
        cropWidth:data.width,
        cropHeight:data.height
    };
    // this.setState(result);
    this.setState({asdf:'zxcv'})
    console.log(result)
    // image in dataUrl 
    // console.log(this.refs.cropper);
  }
  render() {
    const styles = {
      cropModal:{height: '799px'},
      cropContainer:{height: '543px'},
    };

    var reactCropperOptions = {
      zoomOnWheel:false,
      aspectRatio: 1/1,
      responsive:true,
      guides:false,
      autoCropArea:.9,
      rotatable:false,
      // crop: function(data) {
      //   console.log('crop data', data);
      //   // var result = {
      //   //     x:data.x,
      //   //     y:data.y,
      //   //     cropWidth:data.width,
      //   //     cropHeight:data.height
      //   // };
      //   // cropSettingToUse = result;
        
      //   // if(isTemplateMode){
      //   //     doCssOnSample();
      //   // }
      // }
    };
    reactCropperOptions.strict = false;
    

    if(false/*bs.featureDetection.is_touch_device*/){
      Object.assign(reactCropperOptions,{
        mouseWheelZoom:false,
        cropBoxMovable:false,
        movable:true,
        cropBoxResizable:false,
        dragCrop:false,
        minCropBoxWidth:windowSizer.dimensions.width -20,
      });
    }


    return (
      <div className="modal cropModal" style={styles.cropModal}>
        <div className="closeButton button"><span>X</span></div>
        <div className="modalFooter clearfix">
          <div className="footer_section footer_imageOptions">
            <h3>Change design</h3>
            <div className="designFrame">
              <div className="designFrame_innerWrap"><img className="designFrame_design standardTemplate" src="http://s3-us-west-1.amazonaws.com/bernieapp/decorations/h3.png" /></div>
            </div>
            <div className="designFrame">
              <div className="designFrame_innerWrap"><img className="designFrame_design standardTemplate" src="http://s3-us-west-1.amazonaws.com/bernieapp/decorations/h4.png" /></div>
            </div>
            <div className="designFrame">
              <div className="designFrame_innerWrap"><img className="designFrame_design standardTemplate" src="http://s3-us-west-1.amazonaws.com/bernieapp/decorations/wg.png" /></div>
            </div>
            <div className="moreimageOptions button"><span className="macro">more options</span><span className="micro">change design</span></div>
          </div>
          <div className="footer_section">
            <h3>&nbsp;</h3>
            <div className="designFrame designFrame-empty"></div>
            <div className="getPhotoButton button"><span>get photo</span></div>
          </div>
        </div>
        <div className="cropOuterContainer">
          <div className="cropContainer" style={styles.cropContainer}>
            {this.state.cropperExists &&
              <ReactCropper
                ref='cropper'
                src={`http://s3-us-west-1.amazonaws.com/bernieapp/selfies/${this.state.src}.png`}
                // Cropper.js options 
                crop={this._cropBound}
                {...reactCropperOptions}
              />
            }
            
            <img src="http://s3-us-west-1.amazonaws.com/bernieapp/selfies/zephyr1476401787491.png" className="cropper-hidden" />
            <div className="cropper-container cropper-bg" stylex="width: 766px; height: 543px;" style={{display: 'none'}}>
              <img stylex="width: 301.967px; height: 301.967px; position: absolute; top: 20.0913px; left: 249.331px; z-index: 4;" src="http://s3-us-west-1.amazonaws.com/bernieapp/decorations/wg.png" />
              <div className="cropper-canvas" stylex="width: 766px; height: 511.128px; left: 0px; top: 15.9358px;"><img src="http://s3-us-west-1.amazonaws.com/bernieapp/selfies/zephyr1476401787491.png?timestamp=1500493217606" className="" stylex="width: 766px; height: 511.128px; margin-left: 0px; margin-top: 0px; transform: none;" /></div>
              <div className="cropper-drag-box cropper-modal cropper-crop"></div>
              <div className="cropper-crop-box" stylex="width: 301.967px; height: 301.967px; left: 249.331px; top: 20.0913px; z-index: 6;"><span className="cropper-view-box" stylex="opacity: 0;"><img src="http://s3-us-west-1.amazonaws.com/bernieapp/selfies/zephyr1476401787491.png" stylex="width: 766px; height: 511.128px; margin-left: -249.331px; margin-top: -4.15552px; transform: none;" /></span><span className="cropper-dashed dashed-h cropper-hidden"></span><span className="cropper-dashed dashed-v cropper-hidden"></span><span className="cropper-center"></span><span className="cropper-face cropper-move"></span><span className="cropper-line line-e" data-action="e"></span><span className="cropper-line line-n" data-action="n"></span><span className="cropper-line line-w" data-action="w"></span><span className="cropper-line line-s" data-action="s"></span><span className="cropper-point point-e" data-action="e"></span><span className="cropper-point point-n" data-action="n"></span><span className="cropper-point point-w" data-action="w"></span><span className="cropper-point point-s" data-action="s"></span><span className="cropper-point point-ne" data-action="ne"></span><span className="cropper-point point-nw" data-action="nw"></span><span className="cropper-point point-sw" data-action="sw"></span><span className="cropper-point point-se" data-action="se"></span></div>
            </div>
          </div>
        </div>
        <div className="modalHeader clearfix">
          <div className="doneSection">
            <h2>Drag and resize the box to crop</h2>
            <div className="modal_buttonGroup">
              <div className="button mainButton cropDoneButton"><span>Done</span></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Cropper.propTypes = {};

export default Cropper;