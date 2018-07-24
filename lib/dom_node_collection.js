class DomNodeCollection {
  constructor(htmlElements) {
    this.htmlElements = htmlElements;
  }

  html(element) {
    if (typeof element === 'string') {
      this.htmlElements.map(node => {
        return node.innerHTML = element;
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
        this.htmlElements.map(node => {
        return node.innerHTML += element;
        });
      case "HTMLElement":
        this.htmlElements.map((node) => {
        return node.innerHTML += element.outerHTML;
        });
      default:
        element.htmlElements.forEach((el) => {
          this.htmlElements.forEach((node) => {
            node.innerHTML += el.outerHTML;
          });
        });
    }
  }
}

module.exports = DomNodeCollection;
