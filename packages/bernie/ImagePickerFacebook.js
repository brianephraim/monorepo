import React, { Component } from 'react';
import PropTypes from 'prop-types';
import fbManager from './fb';
import ImagePicker from './ImagePicker';

let imagesFromFBPromise = null;
class ImagePickerFacebook extends Component {
  constructor() {
    super();

    this.state = {};
  }
  componentWillMount() {
    imagesFromFBPromise = imagesFromFBPromise || fbManager.importStuff();
    imagesFromFBPromise.then(response => {
      if (response && response.data && response.data.length) {
        const images = response.data.reduce((accum, imageObj) => {
          if (
            imageObj &&
            imageObj.images &&
            imageObj.images[0] &&
            imageObj.images[0].source
          ) {
            return [...accum, {
              src: imageObj.images[0].source
            }];
          }
          return accum;
        }, []);
        this.setState({
          images,
        });
      }
      // const r = JSON.stringify(response, null, 2);
      // console.log('response',r);
      /*
        {
          "data": [
            {
              "images": [
                {
                  "height": 600,
                  "source": "https://scontent.xx.fbcdn.net/v/t1.0-9/14729128_10157953620800725_5026720440547477533_n.jpg?oh=ac158b7c520d1310164aabb3c18fa3ff&oe=59F6F820",
                  "width": 600
                },
                {
                  "height": 480,
                  "source": "https://scontent.xx.fbcdn.net/v/t1.0-0/p480x480/14729128_10157953620800725_5026720440547477533_n.jpg?oh=e5703e732313fc7ebe2db6cb06a2ce9e&oe=5A0647D5",
                  "width": 480
                },
                {
                  "height": 320,
                  "source": "https://scontent.xx.fbcdn.net/v/t1.0-0/p320x320/14729128_10157953620800725_5026720440547477533_n.jpg?oh=63b576e74a55024c9393c4c666f6aa21&oe=59F41797",
                  "width": 320
                },
                {
                  "height": 540,
                  "source": "https://scontent.xx.fbcdn.net/v/t1.0-0/p180x540/14729128_10157953620800725_5026720440547477533_n.jpg?oh=2e115bf657645de31812b1e37d0b1f0b&oe=5A3979B2",
                  "width": 540
                },
                {
                  "height": 130,
                  "source": "https://scontent.xx.fbcdn.net/v/t1.0-0/p130x130/14729128_10157953620800725_5026720440547477533_n.jpg?oh=91f1ffe7238f4c7e0b31a554f1f4b6e8&oe=59FE3F87",
                  "width": 130
                },
                {
                  "height": 225,
                  "source": "https://scontent.xx.fbcdn.net/v/t1.0-0/p75x225/14729128_10157953620800725_5026720440547477533_n.jpg?oh=f07f8b6c4ff87a5f6a7f361151f75ab6&oe=59F13531",
                  "width": 225
                }
              ],
              "id": "10157953620800725"
            },
            ...
          ]
          "paging": {
            "cursors": {
              "before": "MTAxNTc5NTM2MjA4MDA3MjUZD",
              "after": "MTAxNTY1NDI3Nzc1NTA3MjUZD"
            },
            "next": "https://graph.facebook.com/v2.4/10155796002540725/photos?access_token=EAAXNn5hh1icBAAvZBBpVTN3nAZAgkD8SQODnkgBAqZCccLpYmh1RDvFM2pTpnp6VrSQCu1MQQtZAxXNA0FQ9z01BCGvE3enwiUpOOE1OCBQerhfozYwpboHmw2czVmHM9osvOC5B9RDyLx9VtGk0NJkKSDNLWWU8r9r0N3FMSYuHpwzkCwZCFHVGSDfZCpmnoZD&pretty=0&fields=images%2Cid&type=uploaded&limit=30&after=MTAxNTY1NDI3Nzc1NTA3MjUZD"
          }
        }
      */
    });
    imagesFromFBPromise.catch(response => {});
  }
  render() {
    return (
      <ImagePicker images={this.state.images} onClick={this.props.onClick} />
    );
  }
}
ImagePickerFacebook.propTypes = {};
export default ImagePickerFacebook;
