import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
    });}
  */
  imgOnClick(imgSrc) {
    return () => {
      this.props.onClick(imgSrc);
    };
  }
  render() {
    const imgSrc =
      'https://scontent.xx.fbcdn.net/v/t1.0-9/14729128_10157953620800725_5026720440547477533_n.jpg?oh=ac158b7c520d1310164aabb3c18fa3ff&amp;oe=59F6F820';
    return (
      <div className="modal designModal">
        <div className="closeButton button">
          <span>X</span>
        </div>
        <h2>Pick a photo</h2>
        <div className="imageOptions">
          {!this.props.images
            ? null
            : this.props.images.map((imgSrc, i) => {
                return (
                  <img
                    className="photoImg"
                    src={imgSrc}
                    key={i}
                    onClick={this.imgOnClick(imgSrc)}
                  />
                );
              })}
        </div>
      </div>
    );
  }
}
ImagePicker.propTypes = {};

export default ImagePicker;
