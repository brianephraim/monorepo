import {appConnect} from './nameSpacedResponsive';
import ancestorConstantsHoc from './ancestorConstantsHoc';

let imagesFromFetchPromise = null;
function fetchTemplatesHoc(Comp){
  return ancestorConstantsHoc(appConnect(
    null,
    {
      fetchTemplates: ({backendApiPrefix, fgImagePrefix, imageSuffix}) => {
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
      },
    },
    (stateProps, dispatchProps, ownProps) => {
      const originalFetchTemplates = dispatchProps.fetchTemplates;
      const newDispatchProps = {
        ...dispatchProps,
        fetchTemplates: (...args) => {
          originalFetchTemplates(...args, ownProps.constants);
        },
      }
      return Object.assign({}, ownProps, stateProps, newDispatchProps);
    }
  )(Comp));
}
export default fetchTemplatesHoc;
