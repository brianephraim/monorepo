import constants from './constants';

function uploadFile(file, signedRequest, url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('PUT', signedRequest);
    xhr.setRequestHeader('x-amz-acl', 'public-read');
    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(url);
      } else {
        reject('uploadFile failed');
      }
    };
    xhr.onerror = () => {
      reject(new Error('uploadFile failed - error'));
      // alert("Could not upload file.");
    };
    xhr.send(file);
  });
}

function makeGetNormalizedImageInfo(mustBeSquare) {
  return imageUrl => {
    return new Promise((resolve, reject) => {
      if (!imageUrl) {
        reject(new Error('No image url passed.'));
      }
      const xhr = new XMLHttpRequest();
      xhr.open(
        'GET',
        `${constants.backendApiPrefix}/get_normalized_image_info?image_url=${encodeURIComponent(
          imageUrl
        )}&must_be_square=${mustBeSquare}`
      );
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            if (response.failingSquare) {
              resolve(response);
            } else {
              let publicId = response.url.split('/');
              publicId = publicId.pop();
              let srcKey = publicId.split('.');
              srcKey.pop();
              srcKey = srcKey.join('');
              resolve({
                width: response.width,
                height: response.height,
                public_id: publicId,
                srcKey,
                src: response.url,
                Key: response.Key,
                failingSquare: response.failingSquare,
              });
            }
          } else {
            const response = JSON.parse(xhr.responseText);
            let message = 'There was a problem.  Try again.';
            message = response.message ? response.message : message;
            message = `Error: ${message}`;
            reject(new Error(message));
          }
        }
      };
      xhr.send();
    });
  };
}

/*
    Function to get the temporary signed request from the app.
    If request successful, continue to upload the file using this signed
    request.
*/
function getSignedRequest(file, folder, mustBeSquare) {
  folder = folder || 'selfies';
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    let filename = file.name;
    filename = `${folder}/${filename}`;
    xhr.open(
      'GET',
      `${constants.backendApiPrefix}/get_s3_signed_upload_url?file_name=${filename}&file_type=${file.type}`
    );
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          const response = JSON.parse(xhr.responseText);
          uploadFile(file, response.signed_request, response.url, response)
            .then(makeGetNormalizedImageInfo(mustBeSquare))
            .then(resolve);
        } else {
          const response = JSON.parse(xhr.responseText);
          let message = 'There was a problem.  Try again.';
          message = response.message ? response.message : message;
          message = `Error.: ${message}`;
          reject(new Error(message));
        }
      }
    };
    xhr.send();
  });
}

/*
   Function called when file input updated. If there is a file selected, then
   start upload procedure by asking for a signed request from the app.
*/
function initUpload(file, folder, mustBeSquare) {
  if (!file) {
    return Promise.reject(new Error('No file selected.'));
  }
  return getSignedRequest(file, folder, mustBeSquare);
}
const getNormalizedImageInfo = makeGetNormalizedImageInfo(false);
export { initUpload, getNormalizedImageInfo };
