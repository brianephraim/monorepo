import { connect } from 'react-redux';

const ConnectResponsiveStatusesDictHOC = connect(( state /* , { params }*/) => {
  return {
    responsiveStatusesDict: state.bernie.responsiveStatusesDict,
  };
});
export default ConnectResponsiveStatusesDictHOC;