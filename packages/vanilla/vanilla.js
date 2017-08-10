const docEl = document.documentElement;
const docBody = document.body;

function getWinWidth() {
  return window.innerWidth || docEl.clientWidth || docBody.clientWidth
}

function getWinHeight() {
  return window.innerHeight || docEl.clientHeight || docBody.clientHeight
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
