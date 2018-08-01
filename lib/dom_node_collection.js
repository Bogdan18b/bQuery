class DomNodeCollection {
  constructor(nodes) {
    this.nodes = nodes;  // array of HTMLElements
  }

  each(callback) {
    this.nodes.forEach(callback); // I am using forEach in almost every function
  }

  html(string) {
    if (!string) {
      return this.nodes[0].innerHTML;
    } else {
    this.each(node => {
      node.innerHTML = string;
    });
    }
  }

  empty() {
    this.each(node => {
      node.innerHTML = "";
    });
  }

  append(element) {
    if (typeof element === 'object' &&
        !(element instanceof DomNodeCollection)) {
      element = $b(element);
    }
    if (typeof element === "string") {
      this.each((node) => {
        node.innerHTML += element;
      });
    } else if (element instanceof DomNodeCollection) {
      this.each((node) => {
        element.each((el) => {
          node.appendChild(el);
        });
      });
    }
  }

  attr(key, value) {
    if (typeof value === "string") {
      this.each(node => node.setAttribute(key, value));
    } else {
      return this.nodes[0].getAttribute(key);
    }
  }

  addClass(name) {
    this.each(node => node.classList.add(name));
  }

  removeClass(name) {
    this.each(node => node.classList.remove(name));
  }

  toggleClass(name) {
    this.each(node => node.classList.toggle(name));
  }

  children() {
    let childNodes = [];
    this.each((node) => {
      const childNodeList = node.children;
      childNodes = childNodes.concat(Array.from(childNodeList));
    });
    return new DomNodeCollection(childNodes);
  }

  parent() {
    let parentNodes = [];
    this.each((node) => {
      const parentNodeList = node.parentNode;
      parentNodes = parentNodes.concat(Array.from(parentNodeList));
    });
    return new DomNodeCollection(parentNodes);
  }

  find(element) {
    let foundNodes = [];
    this.each((node) => {
      const nodeList = node.querySelectorAll(element);
      foundNodes = foundNodes.concat(Array.from(nodeList));
    });
    return new DomNodeCollection(foundNodes);
  }

  remove() {
    this.each(node => node.parentNode.removeChild(node));
  }

  on(eventName, callback) {
    this.each(node => {
      node.addEventListener(eventName, callback);
    });
  }

  off(eventName, callback) {
    this.each(node => {
      node.removeEventListener(eventName, callback);
    });
  }
}

export default DomNodeCollection;
