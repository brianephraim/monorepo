/*

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
    leftPillar(){
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
          ${styleConstants.mixins.socialAtBottom()}
          padding-right:0;
          margin-top:${styleConstants.appPad * 8}em;
        ` : ''}
      `;
    },
    clearfix() {
      return `
        *zoom:1;
        &:before, &:after {
          content: " ";
          display: table;
        }
        &:after {
          clear: both;
        }
      `;
    },
    socialRowClass() {
      return `
        ${styleConstants.mixins.clearfix()}
        & > * {padding-bottom:${styleConstants.appPad * 2}em;}
      `;
    },
    socialWidget_right() {
      return `
        float:right;
      `;
    },
    socialWidget_rightBottom() {
      return `
        ${styleConstants.mixins.socialWidget_right()}
        padding-left:${styleConstants.appPad}em;
      `;
    },
    rightPillar() {
      return `
        overflow:hidden;
      `;
    },
    socialWidget_rightTop() {
      return `
        ${styleConstants.mixins.socialWidget_right()}
        padding-left:${styleConstants.appPad}em;
      `;
    },
    socialRow_right() {
      return `
        ${styleConstants.mixins.socialRow()}
      `;
    },
    socialWidgetClass() {
      return `
        display:block;
      `;
    },


    
    /*

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