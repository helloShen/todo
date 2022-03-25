import View from './view.js';
import Model from './model.js';

export default (() => {

    const MyDate = (() => {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        
        function getToday() {
            const today  = new Date();
            const todayStr = today.toLocaleDateString("en-US", options) // Saturday, September 17, 2016
            return todayStr.split(', ');
        }
        
        return { getToday };
    })();

    function showDate() {
        let [weekday, monthDay, year] = MyDate.getToday();
        let [month, day] = monthDay.split(' ');
        month = month.slice(0, 3).toUpperCase();
        View.showDate(weekday, day, month, year); 
    }

    function showFooter() {
        View.showFooter();
    }

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
            View.hideToggleAll();
        } else {
            View.showItemsBoard();
            if (activeCount > 0) {
                View.toggleAllNotChecked();
            } else {
                View.toggleAllChecked();
            }
        }
    }

    function enableAddItem() {
        View.bindAddItem(addItem);
        View.bindAddItemLabel();
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

    return { showFooter, showDate, showItems, updateItemsCount, enableAddItem, enableChangeRoute, enableClearCompletedItems, enableToggleAll };

})();
