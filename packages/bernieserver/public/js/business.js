;(function($){
  $.event.special.destroyed = {
      remove: function(o) {
          if (o.handler) {
              o.handler()
          }
      }
  }
  $.fn.outerHTML = function() {
      return $('<div />').append(this.eq(0).clone()).html();
  };

})(jQuery);


$(function(){

    // $.ajax({
    //     url:'/SimpleImage',
    //     type:'POST',
    //     data:{
    //         url:'SOME URL',
    //         idX:'SOME IDX'
    //     },
    //     success:function(response){
    //         console.log('SimpleImage',response)
    //     },
    //     error:function(e){
    //         console.log('SimpleImage error',e)
    //     }
    // })


    var modalManager = bs.setupNewModalManager($('.bodyInner'));
    var $homeLayout = $('.homeLayout');

    var howToSaveText = bs.featureDetection.is_touch_device ? 'Press and hold image to save' : 'Right click image to save';
    $('.selfieFrame_instructions_text').html(howToSaveText);


    $('.shareFbWallButton').on('click',function(){    
        bs.fbManager.postToWall();
    })

    $('.shareFbPhotoButton').on('click',function(){
        bs.fbManager.exportStuff(window.urlInfo.customUrl).then(function(response){
            var id = response.id;
            if (window.confirm("Your photo was added to your Facebook! Do you want to make it your profile picture?")) { 
                var profilePicUrl = 'https://www.facebook.com/photo.php?fbid='+id+'&makeprofile=1';
                window.location.href = profilePicUrl;
            }
        });
    })




    var standardClose = function(){
        $homeLayout.css('display','');
        refreshResponsive();
    };

    var generateCropModal = function(formattedResponse){
        formattedResponse.close = standardClose;
        modalManager.generateCropModal(formattedResponse);
    };

    var makeCameraUploadizer = function($button){
        bs.uploadizer($button,{
            success:function(response){
                $homeLayout.hide();
                var formattedResponse = modalManager.formatUrlAndResponseForCropModal(response);
                generateCropModal(formattedResponse);
            }
        });
    };
    


     var makeStorageUploadizer = function($button){
        bs.uploadizer($button,{
            success:function(response){
                $homeLayout.hide();
                var formattedResponse = modalManager.formatUrlAndResponseForCropModal(response);
                generateCropModal(formattedResponse);
            }
        });
    };
    


    var makeStorageAndCameraUploadizerSet = function($parent){
        makeCameraUploadizer($parent.find('.cameraUploadizer').first());
        makeStorageUploadizer($parent.find('.storageUploadizer').first());
    };

    makeStorageAndCameraUploadizerSet($('.homeLayout'));

    $('.urlUploadizer').on('click',function(){
        $homeLayout.hide();
        var urlImportModal = modalManager.urlImportModal({
            close:standardClose
        });
        urlImportModal.promise.done(function(url){
            modalManager.uploadUrlAndFormatResponseForCropModal(url).done(function(cropModalFormattedData){
                urlImportModal.finish();
                generateCropModal(cropModalFormattedData)
            });
        })
    });
    //templateImportModal
    $('.templateModalButton').on('click',function(){
        $homeLayout.hide();
        var templateImportModal = modalManager.templateImportModal({
            close:standardClose
        });
        templateImportModal.promise.done(function(url){
            templateImportModal.finish();
        })
    });

    


    $('.importFbPhotoButton').on('click',function(){
        $homeLayout.hide();
        bs.fbManager.importStuff().done(function(response){
            var fbImportModal = modalManager.fbImportModal({
                fbImportResponse:response,
                close:standardClose
            });
            fbImportModal.promise.done(function(url){
                modalManager.uploadUrlAndFormatResponseForCropModal(url).done(function(cropModalFormattedData){
                    fbImportModal.finish();
                    generateCropModal(cropModalFormattedData)
                });
            })
            
        });
    });


    $('.webcamUploadizer').on('click',function(){
        $homeLayout.hide();
        var webcamImportModal = modalManager.webcamImportModal({
            close:standardClose
        });
        webcamImportModal.promise.done(function(data_ui){
            modalManager.uploadDataUriAndFormatResponseForCropModal(data_ui).done(function(cropModalFormattedData){
                webcamImportModal.finish();
                generateCropModal(cropModalFormattedData)
            });
        });
        webcamImportModal.promise.fail(function(){
            webcamImportModal.finish();
            $homeLayout.css('display','');
            alert('Error: webcam unavailable.  Try enabling in your browser and refreshing.');
        });
         
    });



    $('.editSizeAndPositionButton').on('click',function(){
        $homeLayout.hide();
        generateCropModal(urlInfo)
    })


    $('.homepageDesignOptions .designFrame_design').on('click',function(){
        $homeLayout.hide();
        var cropModalSettings = modalManager.customizeCropModalSettingsForTemplateSelection($(this));
        // modalManager.initiateCropModal(cropModalSettings);
        generateCropModal(cropModalSettings);
        
    });


    var photoModal = function($button,options){
        var clone = $button.closest('.buttonGroup').clone(true);
        $homeLayout.hide();
        var cloneModal = modalManager.cloneModal({
            close:standardClose,
            clone:clone,
            options:options
        });
        modalManager.registerModalOpenCb(function(){
            cloneModal.finish();

            return true;
        });
    };

    var setupCloneModalButton = function($button,options){
        $button.on('click',function(){
            photoModal($button,options)
        });
    };
    var $window = $(window);
    modalManager.registerModalOpenCb(function(){
        $window.scrollTop(0);
        return false;
    });


    var almostInjectedCb = function($cloneModal){
        var htmlClone = $cloneModal.clone();
        var $cameraUploadizer = htmlClone.find('.cameraUploadizer');
        // $cameraUploadizer.remove()
        $cameraUploadizer.before('<div class="buttonGroup_button button cameraUploadizer"><span>Camera</span></div>');
        $cameraUploadizer.remove();

        var $storageUploadizer = htmlClone.find('.storageUploadizer');
        $storageUploadizer.before('<div class="buttonGroup_button button storageUploadizer"><span>Storage</span></div>');
        $storageUploadizer.remove();

        makeStorageAndCameraUploadizerSet($cloneModal)
        // '<div class="buttonGroup_button button cameraUploadizer"><span>Camera</span></div>'
        // '<div class="buttonGroup_button button storageUploadizer"><span>Storage</span></div>'
        // var makeStorageAndCameraUploadizerSet = function(parentSelector){
        // makeCameraUploadizer($(parentSelector + ' .cameraUploadizer'));
        // makeStorageUploadizer($(parentSelector + ' .storageUploadizer'));

        // makeStorageAndCameraUploadizerSet('.homeLayout');
    }

    setupCloneModalButton(
        $('.photoCloneModalButon'),
        {
            almostInjectedCb:almostInjectedCb
        }
    );

    setupCloneModalButton($('.shareCloneModalButon'));
    setupCloneModalButton($('.editAndDesignCloneModalButton'));


    $('.moreimageOptionsHome').on('click',function(){
        $homeLayout.hide();
        modalManager.designModal({
            rawImage:urlInfo.rawImage,
            close:standardClose
        });
    });

    modalManager.register('photoModal',function(options){
        options.almostInjectedCb = almostInjectedCb;
        photoModal($('.photoCloneModalButon'),options);
    });

    


    var $iframeuploadbutton = $(".iframeuploadbutton");
    $iframeuploadbutton.on('load',function(){
        var lastData = $iframeuploadbutton.contents().find(".lastData").html();
        lastData = JSON.parse(lastData);
    })
    

});
    