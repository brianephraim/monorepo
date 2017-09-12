import { appConnect } from './nameSpacedResponsive';
import { formUrl } from './deriveUrlInfo';
import ancestorConstantsHoc from './ancestorConstantsHoc';

// if already fetching, or fetching already done, be efficient.
// But accomodate namespace.
// Different namespaces can have simultaneous fetching,
// but each namespace on does one fetch.
function publishTemplateCropHoc(Comp) {
  return ancestorConstantsHoc(appConnect(null, {
    // fetchTemplates: (srcKey, { constants }) => {
    publishTemplateCrop: (srcKey,activeCompositeImageData, { constants }) => {
      console.log('srcKey',srcKey,constants);
      return (dispatch, getState) => {          
        // hmm no backendApiPrefix ala `${backendApiPrefix}/get_template_list`
        return fetch(`/image/undefined/${srcKey}.json`).then(r => {
          return r.json();
        }).then(response => {
          console.log('responseresponse',response)
          if (
            response &&
            response.Key &&
            response.Key.length
          ) {
            console.log('response.Key',response.Key, getState()[constants.appNameSpace].compositeImageData);
          let strippedKey = response.Key.split('/');
          strippedKey.shift();
          strippedKey = strippedKey.join('/');
          strippedKey = strippedKey.split('.png');
          strippedKey.pop();
          strippedKey = strippedKey.join('.png');
          console.log('strippedKey',strippedKey);
          const compositeImageData = getState()[constants.appNameSpace].compositeImageData;
          console.log('compositeImageData',compositeImageData);
          console.log('activeCompositeImageData',activeCompositeImageData);

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
          console.log(`${constants.urlAppNameSpace}/${urlStuff}`);
          window.location = `${constants.urlAppNameSpace}/${urlStuff}`;

          //

          // good
          // /boomer/ut/dude-with-hat1505168597207/265_-458_1648_1648_1200_1200/c2kkzyyg92seahxcoml1
          // bad
          // /boomer/ut/c2kkzyyg92seahxcoml1/265_-458_1648_1648_1200_1200/dolphin1505168734276_225_225_168_18
          // /boomer/ut/dolphin1505165985092/309_36_305_305_1200_1200/dolphin1505165985092_115_115_7_106
            // dispatch({
            //   // type: 'FETCH_TEMPLATES',
            //   type: 'PUBLISH_TEMPLATE_COMPLETE',
            //   Key: response.Key,
            // });
          }
        });
      };
    },
  })(Comp));
}
export default publishTemplateCropHoc;
