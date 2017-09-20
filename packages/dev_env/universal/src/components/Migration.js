import React from 'react'

import MainApp, {routeData} from 'MainApp';


export default (props) => <MainApp {...props} hithere={123} />
// export default () => <div>asdfasdfasdf</div>

export {routeData};