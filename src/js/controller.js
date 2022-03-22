import View from './view.js';
import Model from './model.js';

export default (() => {

    function tryToggleItemsBoard() {
        if (Model.hasItem()) {
            View.showItemsBoard();
        } else {
            View.hideItemsBoard();
        }
    }

    function showItems() {
        const route = Model.getCurrentRoute();
        const itemsObjArr = Model.getItemsArray(route);
        View.clearItems();
        itemsObjArr.forEach((itemObj) => {
            View.showItem(itemObj, (target) => {
                bindToggleCompleted(target);
                bindDeleteItem(target);
                bindEditItem(target);
            });
        });
        tryToggleItemsBoard();
    }

    function bindAddItem() {
        View.whenAddItem(addItem);
    }

    function bindToggleCompleted(target) {
        View.whenToggleCompleted(target, toggleCompleted);
    }

    function bindDeleteItem(target) {
        View.whenDeleteItem(target, deleteItem);
    }

    function bindEditItem(target) {
        View.whenEditItem(target, editItem);
    }

    function addItem(target) {
        Model.addItem(target.value);
        View.clearAddItemEle();
        showItems();
    }

    function toggleCompleted(target) {
        Model.toggleCompleted(target.dataset.id);
        showItems(); // must refresh current route.
    }

    function deleteItem(target) {
        Model.deleteItem(target.dataset.id);
        tryToggleItemsBoard();
    }

    function editItem(target, itemValue) {
        if (!itemValue) {
            Model.deleteItem(target.dataset.id);
            View.removeElement(target);
            tryToggleItemsBoard();
        } else {
            Model.updateItem(target.dataset.id, itemValue);
        }
    }

    return { showItems, bindAddItem };

})();
