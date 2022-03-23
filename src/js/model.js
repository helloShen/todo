import Store from './store.js';

export default (() => {

    const Item = (() => {

        function create(text) {
            return {
                id: Date.now(),
                title: text,
                completed: false
            };
        }

        function getId() {
            return this.id;
        }

        function getTitle() {
            return this.title;
        }
        
        function setTitle(title) {
            this.title = title;
        }

        function hasCompleted() {
            return !!this.completed;
        }

        function toggleCompleted() {
            this.completed = !this.completed;
        }

        return { create, getId, getTitle, setTitle, hasCompleted, toggleCompleted  };

    })();

    function getCurrentRoute() {
        const route = Store.getCurrentRoute();
        if (!route) {
            Store.setCurrentRoute('all');
            return Store.getCurrentRoute();
        }
        return route;
    }

    function setCurrentRoute(route) {
        Store.setCurrentRoute(route);
    }

    function countItems() {
        const itemsObj = Store.getItemsObject();
        let activeCount = 0, completedCount = 0;
        for (const [key, value] of Object.entries(itemsObj)) {
            if (Item.hasCompleted.call(value)) {
                completedCount++;
            } else {
                activeCount++;
            }
        }
        return [activeCount, completedCount];
    }

    function hasItem() {
        return Store.hasItem();
    }

    /* always filter with current route */
    function getItemsArray(route) {
        if (!hasItem()) return [];
        const itemsObj = Store.getItemsObject();
        return Object.getOwnPropertyNames(itemsObj).reduce((arr, name) => {
            const itemObj = itemsObj[`${name}`];
            switch (route) {
                case 'all': 
                    arr.push(itemObj);
                    break;
                case 'active': 
                    if (!Item.hasCompleted.call(itemObj)) {
                        arr.push(itemObj);
                    }
                    break;
                case 'completed':
                    if (Item.hasCompleted.call(itemObj)) {
                        arr.push(itemObj);
                    }
                    break;
            }
            return arr;
        },[]);
    }

    function addItem(text) {
        Store.updateItems((itemsObj) => {
            const itemObj = Item.create(text);
            itemsObj[`${Item.getId.call(itemObj)}`] = itemObj;
        });
    }

    function toggleCompleted(itemId) {
        if (!hasItem()) return;
        Store.updateItems((itemsObj) => {
            const itemObj = itemsObj[`${itemId}`];
            Item.toggleCompleted.call(itemObj);
        });
    }

    function deleteItem(itemId) {
        if (!hasItem()) return;
        Store.updateItems((itemsObj) => {
            delete itemsObj[`${itemId}`];
        });
    }

    function updateItem(itemId, itemValue) {
        if (!hasItem()) return;
        Store.updateItems((itemsObj) => {
            const itemObj = itemsObj[`${itemId}`];
            Item.setTitle.call(itemObj, itemValue);
        });
    }

    function clearAllCompletedItems() {
        const arr = getItemsArray('completed');
        Store.updateItems((itemsObj) => {
            arr.forEach((itemObj) => {
                delete itemsObj[`${Item.getId.call(itemObj)}`];
            });
        });
    }

    function toggleAll(itemsArr) {
        Store.updateItems((itemsObj) => {
            itemsArr.forEach((itemObj) => {
                Item.toggleCompleted.call(itemsObj[`${Item.getId.call(itemObj)}`]);
            });
        });
    }

    return { Item, getCurrentRoute, setCurrentRoute, hasItem, countItems, getItemsArray, addItem, toggleCompleted, deleteItem, updateItem, clearAllCompletedItems, toggleAll };

})();