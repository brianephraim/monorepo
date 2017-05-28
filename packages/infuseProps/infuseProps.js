import React, { Component } from 'react';


class PropsInfuser extends Component {
  // propTypes: {
  //   children: React.PropTypes.element
  // }
  // componentDidMount() {
  //   // Forward ReactTransitionGroupAssignments inner component
  //   Object.keys(this.refs.el).forEach((key) => {
  //     // https://facebook.github.io/react/docs/animation.html#low-level-api-reacttransitiongroup
  //     if (key.search(/^(componentWill|componentDid)(Appear|Enter|Leave)/) === 0) {
  //       this[key] = this.refs.el[key];
  //     }
  //   });
  // }
  render() {
    const propsClone = {...this.props}
    delete propsClone.children;
    var el = React.cloneElement(this.props.children, {
      ref: "el",
      ...propsClone
    });
    return el;
  }
}

export { PropsInfuser };

function protoHOC(WrappedComponent, protoType) {
  class Enhancer extends WrappedComponent {
    render() {
      return super.render()
    }
  }
  Object.extend(Enhancer.prototype,protoType);
  return Enhancer;
}
export { protoHOC };

export default (ComponentToWrap, extraProps ) => {
    class Wrapper extends Component {
        render () {
            return <ComponentToWrap {...extraProps}>{this.props.children}</ComponentToWrap>
            return React.createElement(
                ComponentToWrap,
                Object.assign(
                    {},
                    this.props,
                    {
                        ref: "el",
                        ...extraProps
                    }
                )
            );
        }
        
    }
    return Wrapper; 
};