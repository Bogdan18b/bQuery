const DomNodeCollection = require('./dom_node_collection.js');

const $b = arg => {
  switch (typeof arg) {
    case "string":
      let nodeList = document.querySelectorAll(arg);
      nodeList = Array.from(nodeList);
      return new DomNodeCollection(nodeList);
    case "HTMLElement":
      return new DomNodeCollection([arg]);
  }
};

window.$b = $b;
