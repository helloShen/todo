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
            return this.completed;
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

    function hasItem() {
        return Store.hasItem();
    }

    function getItemsArray(route) {
        if (!Store.hasItem()) return [];
        const itemsObj = Store.getItemsObject();
        return Object.getOwnPropertyNames(itemsObj).reduce((arr, name) => {
            const itemObj = itemsObj[`${name}`];
            if (route) {
                switch (route) {
                    case 'all': 
                        arr.push(itemObj);
                        break;
                    case 'active': 
                        if (!Item.hasCompleted.call(itemObj)) {
                            arr.push(itemObj);
                        }
                        break;
                    case 'complete':
                        if (Item.hasCompleted.call(itemObj)) {
                            arr.push(itemObj);
                        }
                        break;
                }
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
        if (!Store.hasItem()) return;
        Store.updateItems((itemsObj) => {
            const itemObj = itemsObj[`${itemId}`];
            Item.toggleCompleted.call(itemObj);
        });
    }

    function deleteItem(itemId) {
        if (!Store.hasItem()) return;
        Store.updateItems((itemsObj) => {
            delete itemsObj[`${itemId}`];
        });
    }

    function updateItem(itemId, itemValue) {
        if (!Store.hasItem()) return;
        Store.updateItems((itemsObj) => {
            const itemObj = itemsObj[`${itemId}`];
            Item.setTitle.call(itemObj, itemValue);
        });
    }

    return { Item, getCurrentRoute, setCurrentRoute, hasItem, getItemsArray, addItem, toggleCompleted, deleteItem, updateItem };

})();