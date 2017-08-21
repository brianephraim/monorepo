/*


@mixin socialRow_left(){
  @extend %socialRow;
  &_socialWidget{
    @include socialWidget_left;
    
  }

  .responsive_windowVerticalTooSmall &{
    @include socialAtBottom;
    padding-right:0;
    margin-top:$appPad*8;
  }
}

@mixin socialWidget_right(){
  float:right;
}
@mixin socialWidget_rightBottom(){
  @include socialWidget_right;
  padding-left:$appPad;
}
@mixin socialRow_right(){
  @extend %socialRow;
  &_socialWidget{
    @include socialWidget_rightBottom;
  }
}
*/
const styleConstants = {
  colors: {
    blue: '#087ED7',
    red: '#EA504E',
    white: '#fff',
    grey0: '#eee',
    grey1: '#ccc',
    grey2: '#666',
  },
  font1: "'Fjalla One', sans-serif",
  font2: "'Cantarell', sans-serif",
  appPad: 1,
  mixins: {
    leftPiller(){
      return 'float:left;'
    },
    socialAtBottom(){
      return `
        position:absolute;
        top:100%;
        right:0;
        padding-bottom:${styleConstants.appPad}em;
        padding-right:${styleConstants.appPad}em;
        padding-top:${styleConstants.appPad}em;
      `;
    },
    socialWidget_left(windowVerticalTooSmall) {
      return `
        float:left;
        padding-right:${styleConstants.appPad}em;
        ${windowVerticalTooSmall ? 'float:right;' : ''}
      `;
    },
    socialRow(){
      return `
        height:${styleConstants.appPad * 2}em;
        overflow:hidden;
      `;
    },
    socialRow_left(windowVerticalTooSmall) {
      return `
        ${styleConstants.mixins.socialRow()}
        ${windowVerticalTooSmall ? `
          ${styleConstants.mixins.socialAtBottom.socialAtBottom()}
          padding-right:0;
          margin-top:$appPad*8;
        ` : ''}
      `;
    },
    
    /*
    @mixin socialRow_left(){
      @extend %socialRow;
      &_socialWidget{
        @include socialWidget_left;
        
      }

      .responsive_windowVerticalTooSmall &{
        @include socialAtBottom;
        padding-right:0;
        margin-top:$appPad*8;
      }
    }
    */
    asdf() {
      return `
        asdfasdf
      `;
    },
  },
};
styleConstants.headerHeight = styleConstants.appPad * 2;
styleConstants.headerTopHeight = styleConstants.appPad * 5;

export default styleConstants;