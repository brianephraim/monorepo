import React, {Component} from 'react';
import { connect } from 'react-redux';

// To avoid redundant subscripitons
const subs = {};

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
