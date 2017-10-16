import root from 'window-or-global'

export default root.document && root.document.documentElement && 'ontouchstart' in document.documentElement;