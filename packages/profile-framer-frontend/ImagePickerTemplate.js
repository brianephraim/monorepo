import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { gql } from 'react-apollo';
import { appConnect } from './nameSpacedResponsive';
import ImagePicker from './ImagePicker';
import { compositeImageIntoParams } from './compositeImage';
import fetchTemplatesHoc from './fetchTemplatesHoc';
import {appApolloClientHoc} from './nameSpacedResponsive';
import ancestorConstantsHoc from './ancestorConstantsHoc';

class ImagePickerTemplate extends Component {
  constructor() {
    super();
    this.generateLinkTo = this.generateLinkTo.bind(this);
  }
  componentWillMount() {
    if (this.props.limit > 3) {
      this.props.fetchTemplates();
    }
  }
  generateLinkTo(imgSrcObj) {
    return {
      type: `CROP`,
      payload: {
        ...compositeImageIntoParams(this.props.compositeImageData),
        fgSrcKey: imgSrcObj.srcKey,
      },
    };
  }
  render() {
    // const userTemplates = this.props.userTemplatesQuery.userTemplates;
    // console.log('userTemplates',userTemplates);
    // console.log('this.props.images',this.props.images);
    return (
      <ImagePicker
        images={this.props.images}
        limit={this.props.limit}
        layoutVariation={this.props.layoutVariation}
        generateLinkTo={this.generateLinkTo}
      />
    );
  }
}

ImagePickerTemplate.propTypes = {
  fetchTemplates: PropTypes.func.isRequired,
  images: PropTypes.array,
  limit: PropTypes.number,
  layoutVariation: PropTypes.string,
  compositeImageData: PropTypes.object.isRequired,
};
ImagePickerTemplate.defaultProps = {
  generateLinkTo: () => {},
  images: [],
  limit: Infinity,
  layoutVariation: '',
};

function templatesHoc(Comp) {
  function Asdf1(props) {
    const constants = props.constants;
    // console.log(constants);
    const featured = ['h3', 'h4', 'wg'].map(srcKey => {
      return {
        src: `${constants.fgImagePrefix}${srcKey}${constants.imageSuffix}`,
        srcKey,
      };
    });
    // console.log('featured',featured);
    const userTemplatesRaw = props.userTemplatesQuery.userTemplates || [];
    const userTemplates = userTemplatesRaw.map((item) => {
      return {
        src: `${constants.fgImagePrefix}${item.customTemplate}${constants.imageSuffix}`,
        srcKey:item.customTemplate,
      };
    });
    // console.log('featured',featured);
    // console.log('userTemplates',userTemplates);
    const allTemplatesx = [...featured, ...userTemplates];
    // console.log(allTemplatesx);
    const allTemplates = [/*...featured, ...userTemplates*/]
    return <Comp {...props} templatesx={allTemplatesx} />
  }
  // return Asdf1;

  

  // const Qwer = ancestorConstantsHoc(Asdf);

  return appApolloClientHoc({
    userTemplatesQuery: {
      gql: gql`
        query userTemplates {
          userTemplates {
            customTemplate
            created
          }
        }
      `,
      options: {
        variables: {
          avatarSize: 100,
          headers: {
            showLoader: true,
            b1:1,
            b2:2,
          },
        },
      },
    },
  })(Asdf1)
}


// export default appApolloClientHoc({
//   userTemplatesQuery: {
//     gql: gql`
//       query userTemplates {
//         userTemplates {
//           customTemplate
//           created
//         }
//       }
//     `,
//     options: {
//       variables: {
//         avatarSize: 100,
//         headers: {
//           showLoader: true,
//           b1:1,
//           b2:2,
//         },
//       },
//     },
//   },
// })(fetchTemplatesHoc(appConnect((appState) => {
//   return {
//     images: appState.templates,
//     compositeImageData: appState.compositeImageData,
//   };
// })(templatesHoc(ImagePickerTemplate))));

export default fetchTemplatesHoc(appConnect((appState) => {
  return {
    images: appState.templates,
    compositeImageData: appState.compositeImageData,
  };
})(ImagePickerTemplate));