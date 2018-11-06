class Page {
  constructor() {
    this.title = 'Automation Practice Page';
  }
  open(path) {
     browser.url(path)
  }
}

module.exports = Page;
