var docEl = document.documentElement;
var docBody = document.body;

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

var getOffset = function(elem) {
  var rect = elem.getBoundingClientRect();

  return {
    top: rect.top + docBody.scrollTop,
    left: rect.left + docBody.scrollLeft
  }
};

function prepend(parent, toPrepend) {
  console.log('parent',parent);
  if (parent.firstChild) {
    return parent.insertBefore(toPrepend, parent.firstChild);
  } else {
    return parent.appendChild(toPrepend);
  }
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
