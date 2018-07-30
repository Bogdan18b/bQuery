class DomNodeCollection {
  constructor(nodes) {  // nodes must be an array
    this.nodes = nodes;
  }

  html(element) {
    if (typeof element === 'string') {
      this.nodes.map(el => {
        return el.innerHTML = element;
      });
    } else if (this.nodes.length > 0) {
      return this.nodes[0].innerHTML;
    }
  }

  empty() {
    this.html("");
  }

  append(element) {
    switch (typeof element) {
      case "string":
        this.nodes.map(el => {
        return el.innerHTML += element;
        });
      case "HTMLElement":
        this.nodes.map(el => {
        return el.innerHTML += element.outerHTML;
        });
      default:
        element.nodes.forEach(el => {
          this.nodes.forEach(el => {
            el.innerHTML += el.outerHTML;
          });
        });
    }
  }

  attr(key, val) {
    if (typeof val === 'string') {
      this.nodes.map(el => {
        el.setAttribute(key, val);
      });
    } else {
      this[0].getAttribute(key);
    }
  }

  addClass(className) {
    this.nodes.map(el => {
      el.classList.add(className);
    });
  }

  removeClass(className){
    this.nodes.map(el => {
      el.classList.remove(className);
    });
  }

  toggleClass(className){
    this.nodes.map(el => {
      el.classList.toggle(className);
    });
  }

  children() {
    let dependents = [];
    this.nodes.forEach(el => {
      let nodelist = el.children;
      nodelist = Array.from(nodelist);
      dependents = dependents.concat(nodelist);
    });
    return new DomNodeCollection(dependents);
  }

  parent() {
    let parentsNode = [];
    this.nodes.forEach(el => {
      parentsNode.push(el.parentNode);
    });
    return new DomNodeCollection(parentsNode);
  }

  find(selector) {
    let results = [];
    this.nodes.forEach(el => {
      let nodeList = el.querySelectorAll(selector);
      results = results.concat(Array.from(nodeList));
    });
    return new DomNodeCollection(results);
  }

  remove() {
    this.nodes.map(el => el.remove());
  }

  on(eventName, callback) {
    this.nodes.forEach(el => {
      el.addEventListener(eventName, callback);
    });
  }

  off(eventName) {
    this.nodes.forEach(el => {
      el.removeEventListener(eventName);
    });
  }



}

module.exports = DomNodeCollection;
