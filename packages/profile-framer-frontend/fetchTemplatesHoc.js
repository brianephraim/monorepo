import { appConnect } from './nameSpacedResponsive';
import ancestorConstantsHoc from './ancestorConstantsHoc';

import { gql } from 'react-apollo';


// if already fetching, or fetching already done, be efficient.
// But accomodate namespace.
// Different namespaces can have simultaneous fetching,
// but each namespace on does one fetch.
let attemptId = 0;
function fetchTemplatesHoc(Comp) {
  return ancestorConstantsHoc(
    appConnect(null, {
      fetchTemplates: ({ constants }) => {
        const fetchAttemptId = attemptId++;
        const { backendApiPrefix, fgImagePrefix, imageSuffix } = constants;
        return (dispatch, getState, client) => {
          dispatch({
            type: 'LOADING',
            where: `fetchTemplatesHoc_${fetchAttemptId}`,
          });
          return client.query({
            query: gql`
              query userTemplates {
                userTemplates {
                  customTemplate
                  created
                }
              }
            `,
          })
          .then(response => {
            dispatch({
              type: 'STOP_LOADING',
              where: `fetchTemplatesHoc_${fetchAttemptId}`,
            });
            if (
              response &&
              response.data &&
              response.data.userTemplates &&
              response.data.userTemplates.length
            ) {
            // if (
            //   response &&
            //   response.userTemplates &&
            //   response.userTemplates.length
            // ) {
              const images = response.data.userTemplates.reduce(
                (accum, imageObj) => {
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
                },
                []
              );
              dispatch({
                type: 'FETCH_TEMPLATES',
                images,
              });
            }
          })
          .catch((e) => {
            if (e) {
              alert(e && e.message);
            }
            dispatch({
              type: 'STOP_LOADING',
              where: `fetchTemplatesHoc_${fetchAttemptId}`,
            });
          })
        };
      },
    })(Comp)
  );
}
export default fetchTemplatesHoc;
