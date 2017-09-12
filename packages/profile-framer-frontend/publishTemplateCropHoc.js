import { appConnect } from './nameSpacedResponsive';
import { formUrl,formPublishTemplateCropRequest } from './deriveUrlInfo';
import ancestorConstantsHoc from './ancestorConstantsHoc';

// if already fetching, or fetching already done, be efficient.
// But accomodate namespace.
// Different namespaces can have simultaneous fetching,
// but each namespace on does one fetch.
function publishTemplateCropHoc(Comp) {
  return ancestorConstantsHoc(appConnect(null, {
    // fetchTemplates: (srcKey, { constants }) => {
    publishTemplateCrop: (activeCompositeImageData, { constants }) => {
      const srcKey = formPublishTemplateCropRequest(activeCompositeImageData);
      return (dispatch, getState) => {          
        // hmm no backendApiPrefix ala `${backendApiPrefix}/get_template_list`
        return fetch(`/image/undefined/${srcKey}.json`).then(r => {
          return r.json();
        }).then(response => {
          if (
            response &&
            response.Key &&
            response.Key.length
          ) {
            let strippedKey = response.Key.split('/');
            strippedKey.shift();
            strippedKey = strippedKey.join('/');
            strippedKey = strippedKey.split('.png');
            strippedKey.pop();
            strippedKey = strippedKey.join('.png');
            const compositeImageData = getState()[constants.appNameSpace].compositeImageData;

            // Remeber, the old background was cached in the fgSrcKey
            const urlStuff = formUrl({
              foreground: {
                ...compositeImageData.foreground,
                srcKey: strippedKey,
              },
              background: {
                ...compositeImageData.background,
                srcKey: compositeImageData.foreground.srcKey,
              },
            });
            window.location = `${constants.urlAppNameSpace}/${urlStuff}`;
          }
        });
      };
    },
  })(Comp));
}
export default publishTemplateCropHoc;
