import root from 'window-or-global'
const placeholderVals = {
  clientWidth:800,
  clientHeight: 600,
  scrollHeight: 1600,
  offsetHeight: 800,
  scrollTop: 0,
  scrollLeft: 0,
  innerWidth: 800,
  innerHeight: 600
};
const doc = root.document ? root.document : {
  documentElement: placeholderVals,
  docBody: placeholderVals
};
const docEl = doc.documentElement;
const docBody = doc.body;

function getWinWidth() {
  return root.innerWidth || docEl.clientWidth || docBody.clientWidth
}

function getWinHeight() {
  return root.innerHeight || docEl.clientHeight || docBody.clientHeight
}

function getDocumentHeight() {
  return Math.max(
    docBody.scrollHeight, docBody.offsetHeight,
    docEl.clientHeight, docEl.scrollHeight, docEl.offsetHeight
  );
}

const getOffset = function(elem) {
  const rect = elem.getBoundingClientRect();

  return {
    top: rect.top + docBody.scrollTop,
    left: rect.left + docBody.scrollLeft
  }
};

function prepend(parent, toPrepend) {
  if (parent.firstChild) {
    return parent.insertBefore(toPrepend, parent.firstChild);
  } 
    return parent.appendChild(toPrepend);
  
}



const vanilla = {
  docEl,
  docBody,
  getWinWidth,
  getWinHeight,
  getDocumentHeight,
  getOffset,
  prepend,
};
export default vanilla;
