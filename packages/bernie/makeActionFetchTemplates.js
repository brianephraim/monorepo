import {fgImagePrefix,imageSuffix,backendApiPrefix} from './constants';

let imagesFromFetchPromise = null;
export default function makeActionFetchTemplates() {
  return (dispatch /* , getState*/) => {
    imagesFromFetchPromise =
      imagesFromFetchPromise ||
      fetch(`${backendApiPrefix}/get_template_list`).then(r => {
        return r.json();
      });
    return imagesFromFetchPromise.then(response => {
      if (response && response.userTemplates && response.userTemplates.length) {
        const images = response.userTemplates.reduce((accum, imageObj) => {
          if (imageObj && imageObj.customTemplate) {
            return [
              ...accum,
              {
                srcKey: imageObj.customTemplate,
                src: `${fgImagePrefix}${imageObj.customTemplate}${imageSuffix}`,
              },
            ];
          }
          return accum;
        }, []);
        dispatch({
          type: 'FETCH_TEMPLATES',
          images,
        });
      }
    });
  };
}
