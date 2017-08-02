import deferred from './deferred';

const offline = false;
const bs = {
  loader: {
    load: () => {},
    unload: () => {},
  },
  util: {
    getPageUrl: () => {
      console.warn('getPageUrl WTF');
      return '';
    },
  },
};
const FbManager = function() {
  const self = this;
  this.attemptedAuth = false;
  self.urlToExport = null;
  this.asyncInitPromise = this.asyncInit();
};

FbManager.prototype.loadSdk = function() {
  (function(d, s, id) {
    let js,
      fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = '//connect.facebook.net/en_US/sdk.js';
    fjs.parentNode.insertBefore(js, fjs);
  })(document, 'script', 'facebook-jssdk');
};

FbManager.prototype.asyncInit = function() {
  const self = this;
  return new Promise((resolve, reject) => {
    if (!offline) {
      window.fbAsyncInit = function() {
        FB.init({
          appId: '1633460223596071',
          cookie: true, // enable cookies to allow the server to access
          // the session
          xfbml: true, // parse social plugins on this page
          version: 'v2.2', // use version 2.2
        });

        resolve();
      };
      // window.laterScripts.push(function() {
      self.loadSdk();
      // });
    } else {
      setTimeout(() => {
        resolve();
      }, 300);
    }
  });
};

FbManager.prototype.fbApi = function(...args) {
  return new Promise((resolve, reject) => {
    FB.api(...args, response => {
      if (!response || response.error) {
        reject(response);
      } else {
        resolve(response);
      }
    });
  });
};

FbManager.prototype.uploadPhoto = function(response) {
  return this.fbApi(`/${response.id}/photos`, 'post', {
    url: this.urlToExport,
  });
};

FbManager.prototype.getMyInfo = function() {
  let toReturn;
  if (!offline) {
    const promise = this.fbApi('/me');
    // promise.then((response) => {
    //   console.log('getMyInfo', response)
    // }).catch((response) => {
    //   console.log('getMyInfo catch', response)
    // });
    return promise;
  }
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({});
    }, 500);
  });
};

FbManager.prototype.getPhotos = function(response) {
  if (!offline) {
    return this.fbApi(`/${response.id}/photos`, 'get', {
      fields: 'images,id',
      type: 'uploaded', // tagged,uploaded
      limit: 2,
      order: 'reverse_chronological',
    });
  }
  return new Promise((resolve, reject) => {
    const fakeData = [];
    for (let i = 1, l = 6; i < l; i++) {
      fakeData.push({
        images: [{ source: `/images/mock-fb-image${i}.jpg` }],
      });
    }
    setTimeout(() => {
      resolve({
        data: fakeData,
      });
    }, 500);
  });
};

FbManager.prototype.login = function(response) {
  return new Promise((resolve, reject) => {
    if (!offline) {
      FB.login(
        function(response) {
          console.log('login', response);
          if (response.status === 'connected') {
            resolve(...arguments);
          } else {
            reject(...arguments);
          }
        },
        {
          scope: 'public_profile,email,user_photos,publish_actions',
        }
      );
    } else {
      resolve();
    }
  });
};

FbManager.prototype.statusChangeCallback = function(response) {
  const self = this;
  return new Promise((resolve, reject) => {
    if (response.status === 'connected') {
      // Logged into your app and Facebook.
      resolve(...arguments);
    } else if (!self.attemptedAuth) {
      self.attemptedAuth = true;
      FB.login(
        function(response) {
          if (response.status === 'connected') {
            console.log('fb connected');
            resolve(...arguments);
          } else {
            console.log('fb not connected');
            reject(...arguments);
          }
        },
        {
          scope: 'public_profile,email,user_photos,publish_actions',
        }
      );
    } else {
      reject(...arguments);
    }
  });
};
// .then(function(){self.photosJunk();});
FbManager.prototype.fbGetLoginStatus = function(dfd) {
  // return new Promise((resolve, reject) => {
  dfd = !!dfd && !!dfd.then ? dfd : new deferred();
  const self = this;
  FB.getLoginStatus(response => {
    self
      .statusChangeCallback(response)
      .then(response => {
        dfd.resolve();
      })
      .fail(function(response) {
        if (response.status === 'not_authorized') {
          // The person is logged into Facebook, but not your app.
          // document.getElementById('status').innerHTML = 'Please log into this app.';
          console.log('Please log into this app.');
          if (!self.attemptedAuth) {
            self.fbGetLoginStatus(dfd);
          } else {
            dfd.reject.apply(null, arguments);
          }
        } else {
          // The person is not logged into Facebook, so we're not sure if
          // they are logged into this app or not.
          // document.getElementById('status').innerHTML = 'Please log into Facebook.';
          console.log('Please log into Facebook.');
          dfd.reject.apply(null, arguments);
        }
      });
  });
  return dfd.promise;
};

FbManager.prototype.postToWall = function() {
  bs.loader.load();
  const self = this;
  return this.asyncInitPromise
    .then(() => {
      FB.ui(
        {
          method: 'share',
          href: bs.util.getPageUrl(),
        },
        response => {
          console.log('DONE');
        }
      );
    })
    .always(() => {
      bs.loader.unload();
    });
};

FbManager.prototype.importStuff = function() {
  bs.loader.load();
  const self = this;
  this.attemptedAuth = false;
  return this.asyncInitPromise
    .then(self.login.bind(self))
    .then(self.getMyInfo.bind(self))
    .then(self.getPhotos.bind(self));
  // .always(function() {
  //   bs.loader.unload();
  // })
};

FbManager.prototype.exportStuff = function(url) {
  bs.loader.load();
  const self = this;
  this.attemptedAuth = false;
  self.urlToExport = url;
  return (
    this.asyncInitPromise
      .then(self.login.bind(self))
      .then(self.getMyInfo.bind(self))
      .then(self.uploadPhoto.bind(self))
      // .fail(self.statusChangeCallback.bind(self))
      .then(self.getMyInfo.bind(self))
      .then(self.uploadPhoto.bind(self))
      .fail(() => {
        alert('sorry, that did not work');
      })
      .always(() => {
        self.urlToExport = null;
        bs.loader.unload();
      })
  );
};

export default new FbManager();
