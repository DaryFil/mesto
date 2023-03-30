export default class Section {
    constructor({items, renderer}, selectorContainer) {
        this._items = items;
        this._renderer = renderer;
        this._container = document.querySelector(selectorContainer);
    }

    renderItems() {
             
        this._renderedItems.forEach((item) => {
          this._renderer(item);
        });
      } 

    addItem(element) {
        this._container.prepend(element);
      }
}