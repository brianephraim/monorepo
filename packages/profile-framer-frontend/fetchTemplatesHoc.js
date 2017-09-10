import {appConnect} from './nameSpacedResponsive';
import ancestorConstantsHoc from './ancestorConstantsHoc';

// if already fetching, or fetching already done, be efficient.
// But accomodate namespace.
// Different namespaces can have simultaneous fetching,
// but each namespace on does one fetch.
const imagesFromFetchPromises = {};
function fetchTemplatesHoc(Comp){
  return ancestorConstantsHoc(appConnect(
    null,
    {
      fetchTemplates: ({constants}) => {
        const {backendApiPrefix, fgImagePrefix, imageSuffix} = constants;
        return (dispatch) => {
          const imagesFromFetchPromise =
            imagesFromFetchPromises[constants.appNameSpace] ||
            fetch(`${backendApiPrefix}/get_template_list`).then(r => {
              return r.json();
            });
          imagesFromFetchPromises[constants.appNameSpace] = imagesFromFetchPromise;
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
      },
    }
  )(Comp));
}
export default fetchTemplatesHoc;
