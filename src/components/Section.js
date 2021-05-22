export class Section {
  constructor({ items, renderer }, containerSelector) {
    this._renderedItems = items;
    this._renderer = renderer;
    this._containerSelector = containerSelector;
  }

  addItem(element) {
    this._containerSelector.prepend(element);
  }

  renderItems() {
    this._renderedItems.forEach(item => { 
      console.log(this._renderer);
      this._renderer(item);
    })
  }
}