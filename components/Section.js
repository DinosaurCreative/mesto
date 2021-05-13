export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._renderedItems = items;
    this._renderer = renderer;
    this._containerSelector = containerSelector;
  }

  addItem(element) {
    document.querySelector  (this._containerSelector).append(element);
  }

  renderer() {
    this._renderedItems.forEach(element => {
      this._renderer(element);
    });
  }
} 