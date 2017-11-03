import { appConnect, appSubscribeConnect } from './nameSpacedResponsive';
import { gql } from 'react-apollo';

let attemptId = 0;
function fetchTemplatesHoc(Comp) {
  const appConnected = appConnect(
    null,
    {
      removeUserTemplate: (customTemplate) => {
        return (dispatch, getState, client) => {
          return client.mutate({
            mutation: gql`
              mutation removeUserTemplate($customTemplate: String!) {
                removeUserTemplate(customTemplate: $customTemplate) {
                  customTemplate
                }
              }
            `,
            variables: {
              customTemplate,
            },
            refetchQueries:[`userTemplates`]
          });
        }
      },
    }
  )(Comp);
  return appSubscribeConnect({
    templates: ({ constants, limit }) => {
      const fetchAttemptId = attemptId++;
      const { fgImagePrefix, imageSuffix } = constants;
      return (dispatch, getState, client) => {
        if (typeof limit !== 'undefined' && limit <= 3) {
          return null;
        }
        dispatch({
          type: 'LOADING',
          where: `fetchTemplatesHoc_${fetchAttemptId}`,
        });
        const observableQuery =client.watchQuery({
          query: gql`
            query userTemplates {
              userTemplates {
                customTemplate
                created
              }
            }
          `,
        });
        const subscription = observableQuery.subscribe({
          next: (response) => {
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
          },
          error: (err) => {
            alert(err);
            dispatch({
              type: 'STOP_LOADING',
              where: `fetchTemplatesHoc_${fetchAttemptId}`,
            });   
          }
        });
        return subscription;
      }
    }
  })(appConnected);
}

export default fetchTemplatesHoc;
