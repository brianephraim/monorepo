
function upload_file(file, signed_request, url, response){
  console.log('upload_file');
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open("PUT", signed_request);
    xhr.setRequestHeader('x-amz-acl', 'public-read');
    xhr.onload = function() {
      if (xhr.status === 200) {
        resolve(url);
      } else {
        reject("upload_file failed");
      }
    };
    xhr.onerror = function() {
      reject("upload_file failed - error");
      // alert("Could not upload file."); 
    };
    xhr.send(file);
  });
}

/*
    Function to get the temporary signed request from the app.
    If request successful, continue to upload the file using this signed
    request.
*/
function get_signed_request(file,folder,mustBeSquare){
  console.log('get_signed_request');
  folder = !!folder ? folder : 'selfies';
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    var filename = file.name;
    filename = folder + '/' + filename;
    xhr.open("GET", "/bernieBackend/get_s3_signed_upload_url?file_name="+filename+"&file_type="+file.type);
    xhr.onreadystatechange = function(){
      if(xhr.readyState === 4){
        if(xhr.status === 200){
          var response = JSON.parse(xhr.responseText);
          upload_file(file, response.signed_request, response.url, response).then(makeGetNormalizedImageInfo(mustBeSquare)).then(resolve);
        }
        else{
          var response = JSON.parse(xhr.responseText);
          var message = "There was a problem.  Try again.";
          message = response.message ? response.message : message;
          message = "Error.: " + message
          reject(message);
          alert(message);
        }
      }
    };
    xhr.send();
  });
}

function makeGetNormalizedImageInfo(mustBeSquare){
  console.log('makeGetNormalizedImageInfo1');
  return function(image_url){
    console.log('makeGetNormalizedImageInfo2');
    return new Promise(function(resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "/bernieBackend/get_normalized_image_info?image_url="+encodeURIComponent(image_url)+"&must_be_square="+mustBeSquare);
      xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
          if(xhr.status === 200){
            var response = JSON.parse(xhr.responseText);
            if(response.failingSquare){
              resolve(response)
            } else {
              var public_id = response.url.split('/');
              public_id = public_id.pop();
              let srcKey = public_id.split('.');
              srcKey.pop();
              srcKey = srcKey.join('');
              resolve({
                width: response.width,
                height: response.height,
                public_id,
                srcKey,
                url: response.url,
                Key:response.Key,
                failingSquare:response.failingSquare
              });
            }
          } else{
            var response = JSON.parse(xhr.responseText);
            var message = "There was a problem.  Try again.";
            message = response.message ? response.message : message;
            message = "Error: " + message
            reject(message);
            alert(message);
          }
        }
      };
      xhr.send();
    });
  }
}

/*
   Function called when file input updated. If there is a file selected, then
   start upload procedure by asking for a signed request from the app.
*/
function initUpload(file,folder,mustBeSquare){
  console.log('initUpload');
  if(!file){
      alert("No file selected.");
      return;
  }
  return get_signed_request(file,folder,mustBeSquare);
}
const getNormalizedImageInfo = makeGetNormalizedImageInfo(false);
export { initUpload, getNormalizedImageInfo };
