import React, { Component } from 'react';
import stimulate from 'stimulate';
const StimulateHOC = (ComponentToWrap) => {
  class StimulateComponent extends Component {
    componentDidMount() {
      this._isMounted = true;
    }
    componentWillUnmount() {
      this._isMounted = false;
    }
    stimulate(s) {
      var settings = s;
      var stimulation = {};

      // extend the settings.step function
      // to short-circuit if unmounted (and stop the stimulation)
      var self = this;
      settings.frame = function (_super) {
        var component = self;
        return function stepExtension() {
          if (component._isMounted) {
            return _super.apply(this, arguments);
          } else if (stimulation.stop) {
            return stimulation.stop();
          }
        };
      }(settings.frame);

      // extend the settings.complete function
      // to short-circuit if unmounted
      settings.onComplete = function (_super) {
        var component = self;

        return function completeExention() {
          if (component._isMounted && _super) {
            return _super.apply(this, arguments);
          }
        };
      }(settings.onComplete);

      stimulation = stimulate(settings);

      return stimulation;
    }
    render() {
      return (
        <ComponentToWrap {...this.props} stimulate={this.stimulate.bind(this)}>{this.props.children}</ComponentToWrap>
      );
    }
  }
  return StimulateComponent;
};

export default StimulateHOC;
