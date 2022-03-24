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
                View.bindToggleCompleted(target, toggleCompleted);
                View.bindDeleteItem(target, deleteItem);
                View.bindEditItem(target, editItem);
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

    function addItem(text) {
        Model.addItem(text);
        View.clearAddItemEle();
        showItems();
        updateItemsCount();
    }

    function toggleCompleted(itemId) {
        Model.toggleCompleted(itemId);
        showItems(); // must refresh current route.
        updateItemsCount();
    }

    function deleteItem(itemId) {
        Model.deleteItem(itemId);
        updateItemsCount();
    }

    function editItem(itemId, itemValue, callback) {
        if (!itemValue) {
            Model.deleteItem(itemId);
            updateItemsCount();
            callback(); // callback view if need to remove that item from view.
        } else {
            Model.updateItem(itemId, itemValue);
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
