import View from './view.js';
import Model from './model.js';

export default (() => {

    const ItemsQueries = (() => {
        const queries = {
            'all': [],
            'active': [Model.Query('completed', false)],
            'completed': [Model.Query('completed', true)]
        };
        function get(route) {
            return queries[`${route}`];
        }

        return { get };
    })();

    function filterItems(route) {
        return Model.findItems(ItemsQueries.get(route));
    }

    function showItems() {
        const itemsObjArr = filterItems(Model.getCurrentRoute());
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
        const activeCount = filterItems('active').length;
        const completedCount = filterItems('completed').length;
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
        const completedItemsArr = Model.findItems(ItemsQueries.get('completed'));
        completedItemsArr.forEach((itemObj) => {
            const id = Model.Item.getId.call(itemObj);
            Model.deleteItem(id);
        });
        showItems();
        updateItemsCount();
    }

    function toggleAll() {
        if (Model.hasItem()) {
            const activeItemsArr = Model.findItems(ItemsQueries.get('active'));
            if (activeItemsArr.length > 0) { 
                Model.toggleAll(activeItemsArr);
            } else {
                Model.toggleAll(Model.findItems(ItemsQueries.get('completed')));
            }
            showItems();
            updateItemsCount();
        }
        
    }

    return { showItems, updateItemsCount, enableAddItem, enableChangeRoute, enableClearCompletedItems, enableToggleAll };

})();
