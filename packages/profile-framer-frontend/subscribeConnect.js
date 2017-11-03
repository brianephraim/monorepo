import React, {Component} from 'react';
import { connect } from 'react-redux';
export default function subscribeConnect(settings,customConnect) {
  const connectToUse = customConnect || connect;

  const mapStateToProps = (state) => {
    // console.log('state',state);
    const a =  Object.keys(settings).reduce((accum, key) => {
      accum[key] = state[key];
      return accum;
    },{});
    return a;
  };

  const mapDispatchToProps = Object.keys(settings).reduce((accum,key) => {
    accum[`${key}_method`] = settings[key];
    return accum;
  },{});

  const connected = connectToUse(
    mapStateToProps,
    mapDispatchToProps
  );
  return (Comp) => {
    class Wrapper extends Component {
      componentWillMount() {
        this.subscriptions = Object.keys(mapDispatchToProps).reduce((accum,key) => {
          const subscription = this.props[key]();
          if (subscription) {
            accum.push(subscription);
          }
          return accum;
        },[]);
      }
      componentWillUnmount() {
        this.subscriptions && this.subscriptions.forEach((subscription) => {
          subscription.unsubscribe();
        });
      }
      render() {
        return <Comp {...this.props} />
      }
    }
    return connected(Wrapper);
  };
  
}
