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
        this.htmlElements.map((el) => {
        return el.innerHTML += element.outerHTML;
        });
      default:
        element.htmlElements.forEach((el) => {
          this.htmlElements.forEach((el) => {
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
    this.htmlElements.map((el) => {
      el.classList.add(className);
    });
  }

  removeClass(className){
    this.htmlElements.map((el) => {
      el.classList.remove(className);
    });
  }

  toggleClass(className){
    this.htmlElements.map((el) => {
      el.classList.toggle(className);
    });
  }
}

module.exports = DomNodeCollection;
