class DomNodeCollection {
  constructor(htmlElements) {
    this.htmlElements = htmlElements;
  }

  html(element) {
    if (typeof element === 'string') {
      this.htmlElements.map(el => {
        return el.innerHTML = element;
      });
    } else if (this.htmlElements.length > 0) {
      return this.htmlElements[0].innerHTML;
    }
  }

  empty() {
    this.html("");
  }

  append(element) {
    switch (typeof element) {
      case "string":
        this.htmlElements.map(el => {
        return el.innerHTML += element;
        });
      case "HTMLElement":
        this.htmlElements.map(el => {
        return el.innerHTML += element.outerHTML;
        });
      default:
        element.htmlElements.forEach(el => {
          this.htmlElements.forEach(el => {
            el.innerHTML += el.outerHTML;
          });
        });
    }
  }

  attr(key, val) {
    if (typeof val === 'string') {
      this.htmlElements.map(el => {
        el.setAttribute(key, val);
      });
    } else {
      this[0].getAttribute(key);
    }
  }

  addClass(className) {
    this.htmlElements.map(el => {
      el.classList.add(className);
    });
  }

  removeClass(className){
    this.htmlElements.map(el => {
      el.classList.remove(className);
    });
  }

  toggleClass(className){
    this.htmlElements.map(el => {
      el.classList.toggle(className);
    });
  }

  children() {
    let dependents = [];
    this.htmlElements.forEach(el => {
      let nodelist = el.children;
      nodelist = Array.from(nodelist);
      dependents = dependents.concat(nodelist);
    });
    return new DomNodeCollection(dependents);
  }

  parent() {
    let parentsNode = [];
    this.htmlElements.forEach(el => {
      parentsNode.push(el.parentNode);
    });
    return new DomNodeCollection(parentsNode);
  }

  find(selector) {
    let results = [];
    this.htmlElements.forEach(el => {
      let nodeList = el.querySelectorAll(selector);
      results = results.concat(Array.from(nodeList));
    });
    return new DomNodeCollection(results);
  }

  remove() {
    this.htmlElements.map(el => el.remove());
  }

  on(eventName, callback) {
    this.htmlElements.forEach(el => {
      el.addEventListener(eventName, callback);
    });
  }

  off(eventName) {
    this.htmlElements.forEach(el => {
      el.removeEventListener(eventName);
    });
  }



}

module.exports = DomNodeCollection;
