import View from './view.js';
import Model from './model.js';

export default (() => {

    function showItems() {
        const route = Model.getCurrentRoute();
        const itemsObjArr = Model.getItemsArray(route);
        if (itemsObjArr.length === 0) {
            View.hideItemsBoard();
        } else {
            View.clearItems();
            itemsObjArr.forEach((itemObj) => {
                View.showItem(itemObj, (target) => {
                    bindToggleCompleted(target);
                });
            });
            View.showItemsBoard();
        }
    }

    function bindAddItem() {
        View.whenAddItem(addItem);
    }

    function bindToggleCompleted(target) {
        View.whenToggleCompleted(target, toggleCompleted);
    }

    function addItem(target) {
        Model.addItem(target.value);
        View.clearAddItemEle();
        showItems();
    }

    function toggleCompleted(target) {
        Model.toggleCompleted(target.dataset.id);
    }

    return { showItems, bindAddItem };

})();
