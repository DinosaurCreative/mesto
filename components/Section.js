export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._renderedItems = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  addItem(element) {
    this._container.append(element);
  }

  renderer() {
    this._renderedItems.forEach(element => {
      const cardElement = this._renderer(element);
      this.addItem(cardElement);
    });
  }
}