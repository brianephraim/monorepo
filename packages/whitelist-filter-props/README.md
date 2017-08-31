experimental - use with caution  
repoName: whitelist-filter-props  
`npm install @defualt/whitelist-filter-props`  
`import whitelistFilterProps from '@defualt/whitelist-filter-props';`  
`var whitelistFilterProps = require('@defualt/whitelist-filter-props');`  

Create a new object, similar to an object passed in, but only has properties named in an array that is passed in.

```
whitelistFilterProps(obj, whitelist);

whitelistFilterProps({a:1, b:2, c:3}, ['a','c']);
// return a new object.  {a:1, c:3};
```