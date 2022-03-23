import View from './view.js';
import Model from './model.js';

export default (() => {

    function showItems() {
        const itemsObjArr = Model.getItemsArray(Model.getCurrentRoute());
        View.clearItems();
        itemsObjArr.forEach((itemObj) => {
            View.showItem(itemObj, (target) => {
                enableToggleCompleted(target);
                enableDeleteItem(target);
                enableEditItem(target);
            });
        });
    }

    function updateItemsCount() {
        const [activeCount, completedCount] = Model.countItems();
        View.updateActiveItemsCount(activeCount);
        View.updateCompletedItemsCount(completedCount);
        if (completedCount === 0) {
            View.hideCompletedItemsCount();
        } else {
            View.showCompletedItemsCount();
        }
        if (activeCount + completedCount === 0) {
            View.hideItemsBoard();
        } else {
            View.showItemsBoard();
        }
    }

    function enableAddItem() {
        View.bindAddItem(addItem);
    }

    function enableToggleCompleted(target) {
        View.bindToggleCompleted(target, toggleCompleted);
    }

    function enableDeleteItem(target) {
        View.bindDeleteItem(target, deleteItem);
    }

    function enableEditItem(target) {
        View.bindEditItem(target, editItem);
    }

    function enableChangeRoute() {
        const currentRoute = Model.getCurrentRoute();
        View.bindChangeRoute(changeRoute, () => View.markCurrentRoute(currentRoute));
    }

    function enableClearCompletedItems() {
        View.bindClearCompletedItems(clearAllCompletedItems);
    }

    function enableToggleAll() {
        View.bindToggleAll(toggleAll);
    }

    function addItem(target) {
        Model.addItem(target.value);
        View.clearAddItemEle();
        showItems();
        updateItemsCount();
    }

    function toggleCompleted(target) {
        Model.toggleCompleted(target.dataset.id);
        showItems(); // must refresh current route.
        updateItemsCount();
    }

    function deleteItem(target) {
        Model.deleteItem(target.dataset.id);
        updateItemsCount();
    }

    function editItem(target, itemValue) {
        if (!itemValue) {
            Model.deleteItem(target.dataset.id);
            View.removeElement(target);
            updateItemsCount();
        } else {
            Model.updateItem(target.dataset.id, itemValue);
        }
    }

    function changeRoute(route) {
        Model.setCurrentRoute(route);
        showItems();
    }

    function clearAllCompletedItems() {
        Model.clearAllCompletedItems();
        showItems();
        updateItemsCount();
    }

    function toggleAll() {
        if (Model.hasItem()) {
            const counts = Model.countItems();
            if (counts[0] > 0) { // has active item
                Model.toggleAll(Model.getItemsArray('active'));
            } else {
                Model.toggleAll(Model.getItemsArray('completed'));
            }
            showItems();
            updateItemsCount();
        }
        
    }

    return { showItems, updateItemsCount, enableAddItem, enableChangeRoute, enableClearCompletedItems, enableToggleAll };

})();
