const DomNodeCollection = require('./dom_node_collection.js');

const _docReadyCallBacks = [];
let _docReady = false;

const $b = arg => {
  switch (typeof arg) {
    case "string":
      let nodeList = document.querySelectorAll(arg);
      nodeList = Array.from(nodeList);
      return new DomNodeCollection(nodeList);
    case "HTMLElement":
      return new DomNodeCollection([arg]);
      case "function":
      return registerDocReadyCallback(arg);
  }
};
window.$b = $b;

const registerDocReadyCallback = fct => {
  if (!_docReady) {
    _docReadyCallBacks.push(fct);
  } else {
    fct();
  }
};

document.addEventListener("DOMContentLoaded", () => {
  _docReady = true;
  _docReadyCallBacks.forEach(fct => fct());
});

$b.extend = (base, ...otherObjs) => {
  otherObjs.forEach((obj) => {
    for (const prop in obj) {
      base[prop] = obj[prop];
    }
  });
  return base;
};

module.exports = $b;
