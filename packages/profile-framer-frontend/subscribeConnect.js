import React, {Component} from 'react';
import { connect } from 'react-redux';

// To avoid redundant subscripitons
const subs = {};

export default function subscribeConnect(mapDispatchToProps,customConnect) {
  const connectToUse = customConnect || connect;

  const mapStateToProps = (state) => {
    const a =  Object.keys(mapDispatchToProps).reduce((accum, key) => {
      accum[key] = state[key];
      return accum;
    },{});
    return a;
  };

  const mapDispatchToPropsToUse = Object.keys(mapDispatchToProps).reduce((accum,key) => {
    accum[`${key}_method`] = mapDispatchToProps[key];
    return accum;
  },{});

  const connected = connectToUse(
    mapStateToProps,
    mapDispatchToPropsToUse
  );
  return (Comp) => {
    class Wrapper extends Component {
      componentWillMount() {
        this.subscriptions = Object.keys(mapDispatchToPropsToUse).reduce((accum,key) => {
          let subscription;
          if (!subs[key]) {
            subscription = this.props[key]();
            if (subscription) {
              subs[key] = {
                count: 1,
                subscription,
              };
            }
          } else {
            subscription = subs[key].subscription;
            subs[key].count++;
          }
          if (subscription) {
            accum.push(key);
          }
          return accum;
        },[]);
      }
      componentWillUnmount() {
        this.subscriptions && this.subscriptions.forEach((key) => {
          let count = subs[key].count;
          count--;
          if (count < 1) {
            subs[key].subscription.unsubscribe();
            delete subs[key];
          }
        });
      }
      render() {
        return <Comp {...this.props} />
      }
    }
    return connected(Wrapper);
  };
  
}
