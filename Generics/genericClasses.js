"use strict";
//Generic Classes
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1); //will remove last item (...splice(-1, 1)) if first arg isn't found
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem('max');
textStorage.addItem('manu');
textStorage.removeItem('max');
console.log(textStorage.getItems());
const numberStorage = new DataStorage();
const objStorage = new DataStorage();
objStorage.addItem({ name: 'surj' });
objStorage.addItem({ name: 'bethi' });
objStorage.removeItem({ name: 'surj' }); //won't necessarily work on the value b/c we're working wth indexOf, and objects are not ordered by indexes
