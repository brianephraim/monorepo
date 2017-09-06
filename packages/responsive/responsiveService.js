import windowSizer from '@defualt/window-sizer';
import debounce from 'debounce';
import priorityDictIntoSortedArray from 'priorityDictIntoSortedArray';

// On resize, check on various elements.
// Sometimes, we want to collect the status of the elements
// with regard to their widths.
// Sometimes we want to change propertoes on those elements,
// like making them squares that are sized to the bottom of the screen.
// We calls these responsive elements, or responseiveEls.

// That parent element is the master.
// Each master has servants that make their widthStatus available to the master.

// The various responsiveEls under a master need coordination.
// They are assigned priorities, which are used to sort an array.
// The contents of the array contain object.
// The objects contain functions that manipulate components.
//
class ResponsiveElRecords {
  constructor() {
    // this.cache model //
    /*
      someMaster: {
        dict: {
          2: {
            assessmentFunction: functionB,
            nukeStatus: functionY
          },
          1: {
            assessmentFunction: functionA,
            nukeStatus: functionX
          },
        },
        prioritySorted: [
          {
            priority: 1,
            responsibilities:{
              assessmentFunction: functionA,
              nukeStatus: functionX
            }
          },
          {
            priority: 2,
            responsibilities:{
              assessmentFunction: functionB,
              nukeStatus: functionY
            }
          },
        ]
      }
    */
    this.cache = {};
  }
  record(masterName, priority, data) {
    if (!this.cache[masterName]) {
      this.cache[masterName] = {
        dict: {},
        prioritySorted: [],
      };
    }
    const dict = this.cache[masterName].dict;
    if (dict[priority]) {
      throw new Error(`
        Must set unique priority. Attemtped:
          masterName '${masterName}', priority '${priority}'.
      `);
    }
    dict[priority] = data;

    this.cache[masterName].prioritySorted = priorityDictIntoSortedArray(dict, 'responsibilities');

    return this.cache[masterName];
  }
  purge(masterName) {
    if (!this.cache[masterName]) {
      console.warn('why am i trying to purge ', masterName, 'from', this.cache);
    } else {
      this.cache[masterName].prioritySorted.forEach((prioritySortedItem) => {
        prioritySortedItem.responsibilities.nukeStatus();
      });
    }
    
    
  }
  registerResponsiveAssessment(
    masterName, priority, assessmentFunction, nukeStatus
  ) {
    this.record(masterName, priority, {
      assessmentFunction,
      nukeStatus,
    });

    // unregister
    return () => {
      if (
        this.cache[masterName] && this.cache[masterName].dict &&
        this.cache[masterName].dict[priority]
      ) {
        delete this.cache[masterName].dict[priority];
        this.cache[masterName].prioritySorted = priorityDictIntoSortedArray(
          this.cache[masterName].dict,
          'responsibilities'
        );
      }

      // .prioritySorted is an array, generated from and up to date with .dict
      // if empty, .dict is empty, and that's the entire content of parent object
      // parent object can be safely deleted
      if (!this.cache[masterName].prioritySorted.length) {
        delete this.cache[masterName];
      }
    };
  }
}
const responsiveElRecords = new ResponsiveElRecords();

class ResizeRegistry {
  constructor() {
    // this.cache //
    /*
     {
      name: this.props.name,
      nukeActiveStatusRegistryOnMaster: () => {
        this.setState({
          activeStatusRegistry: {},
          realClassNameYall:''
        });
      },
      updateMasterClasses: updateMasterClassesXXX,
    },
    */
    this.cache = {};

    let assessAndStyleDebTimeout;
    this.assessAndStyleDeb = debounce(0, null, (timeout) => {
      assessAndStyleDebTimeout = timeout;
    });
    windowSizer.addCb(() => {
      clearTimeout(assessAndStyleDebTimeout);
      Object.keys(this.cache).forEach((name) => {
        const cb = this.cache[name].assessResponsiveEls;
        cb();
      });
    });
  }
  registerResponsiveRefresh({
    name, nukeActiveStatusRegistryOnMaster, updateMasterClasses,
  }) {
    this.cache[name] = {
      assessResponsiveEls: () => {
        responsiveElRecords.purge(name);
        const cbResult = nukeActiveStatusRegistryOnMaster();
        if (cbResult && cbResult.then) {
          cbResult.then(() => {
            this.recurseAssessmentFunctions(name);
          });
        } else {
          this.recurseAssessmentFunctions(name);
        }
      },
      updateMasterClasses: (...args) => {
        masterClasses[name] = updateMasterClasses(...args);
      },
    };

    // unregister
    return () => {
      delete this.cache[name];
      delete masterClasses[name];
    };
  }
  recurseAssessmentFunctions(masterName, cb) {
    if (!responsiveElRecords.cache[masterName]) {
      console.warn('why am i trying to recurseAssessmentFunctions ', masterName, 'from', responsiveElRecords.cache,'.seems occur on "modals" but not the base bernie page.');

    } else {
      const prioritySorted = responsiveElRecords.cache[masterName].prioritySorted;
      let i = 0;
      const l = prioritySorted.length;
      const r = () => {
        this.assessAndStyleDeb().then(() => {
          prioritySorted[i].responsibilities.assessmentFunction(() => {
            i++;
            if (i < l) {
              r();
            } else {
              cb && cb();
            }
          });
        });
      };
      r();
    }
  }
}
const resizeRegistry = new ResizeRegistry();
const registerResponsiveRefresh = resizeRegistry.registerResponsiveRefresh.bind(resizeRegistry);

const masterClasses = {};

function makeResponsive(...args) {
  class ElementResponsiveness {
    constructor(masterName, priority, $el, statusIncrementsRoundUp, onChange, magicSquareName) {
      this.masterName = masterName;
      this.onChange = onChange;
      this.statusIncrementsRoundUp = statusIncrementsRoundUp;
      this.priority = priority;

      this.unregisterResponsiveAssessment = responsiveElRecords.registerResponsiveAssessment(
        masterName,
        priority,
        (...args2) => {
          this.assessResponseiveClasses(...args2);
        },
        () => {
          this.removeAllActiveStatuses();
        }
      );

      this.$el = $el;
      this.magicSquareName = magicSquareName;

      resizeRegistry.assessAndStyleDeb().then(() => {
        resizeRegistry.cache[masterName].assessResponsiveEls();
      });
      this.removeAllActiveStatuses();
    }
    removeAllActiveStatuses() {
      this.activeStatusRegistry = {};
      this.updateMasterClasses();
    }
    updateActiveStatuses(update) {
      Object.assign(this.activeStatusRegistry, update);
      this.updateMasterClasses();
    }
    updateMasterClasses() {
      if (resizeRegistry.cache[this.masterName]) {
        resizeRegistry.cache[this.masterName].updateMasterClasses(
          this.priority, this.activeStatusRegistry
        );
      }
    }
    getBreakpointNameJustBeyondWidth(width) {
      return Object.keys(this.statusIncrementsRoundUp).reduce((leader, responsiveClassName) => {
        const breakpointWidth = this.statusIncrementsRoundUp[responsiveClassName];
        const dif = breakpointWidth - width;
        if (dif > 0 && dif < leader.dif) {
          return {
            name: responsiveClassName,
            dif,
          };
        }
        return leader;
      }, {
        name: null,
        dif: Infinity,
      }).name;
    }
    assessResponseiveClasses(next) {
      if (this.statusIncrementsRoundUp) {
        const breakpointNameJustBeyondWidth = (
          this.getBreakpointNameJustBeyondWidth(this.$el.offsetWidth)
        );
        if (breakpointNameJustBeyondWidth) {
          this.updateActiveStatuses({
            [breakpointNameJustBeyondWidth]: true,
          });
        }
      }

      if (this.magicSquareName) {
        const magicSquareResult = this.magicSquareName(this.$el, masterClasses[this.masterName]);
        if (magicSquareResult.classes) {
          this.updateActiveStatuses(magicSquareResult.classes);
        }
        this.onChange && this.onChange(magicSquareResult);
      }
      next();
    }
  }

  return new ElementResponsiveness(...args);
}

export { makeResponsive, registerResponsiveRefresh };
