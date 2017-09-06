import constants from './constants';

let imagesFromFetchPromise = null;
export default function makeActionFetchTemplates() {
  return (dispatch /* , getState*/) => {
    imagesFromFetchPromise =
      imagesFromFetchPromise ||
      fetch(`${constants.backendApiPrefix}/get_template_list`).then(r => {
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
                src: `${constants.fgImagePrefix}${imageObj.customTemplate}${constants.imageSuffix}`,
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
