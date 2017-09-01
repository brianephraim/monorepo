let imagesFromFetchPromise = null;
export default function makeActionFetchTemplates() {
  return (dispatch /* , getState*/) => {
    imagesFromFetchPromise =
      imagesFromFetchPromise ||
      fetch('/bernieserver/get_template_list').then(r => {
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
                src: `http://s3-us-west-1.amazonaws.com/bernieapp/decorations/${imageObj.customTemplate}.png`,
              },
            ];
          }
          return accum;
        }, []);
        dispatch({
          type: 'BERNIE_FETCH_TEMPLATES',
          images,
        });
      }
    });
  };
}
