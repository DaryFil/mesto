export default class Section {
    constructor({renderer}, selectorContainer) {
        // this._items = items;
        this._renderer = renderer;
        this._container = document.querySelector(selectorContainer);
    }

    renderItems(items) {
             
        items.forEach((item) => {
          this._renderer(item);
        });
      } 

    addItem(element) {
        this._container.prepend(element);
      }
}