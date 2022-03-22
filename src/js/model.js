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

    function getItemsArray(route) {
        const itemsObj = Store.getItemsObject();
        if (!itemsObj) return [];
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
        const item= Item.create(text);
        let itemsObj = Store.getItemsObject();
        itemsObj[`${Item.getId.call(item)}`] = item;
        Store.setItemsObject(itemsObj);
    }

    function toggleCompleted(itemId) {
        const itemsObj = Store.getItemsObject();
        if (!itemsObj) return;
        const item = itemsObj[`${itemId}`];
        Item.toggleCompleted.call(item);
        Store.setItemsObject(itemsObj);
    }

    return { Item, getCurrentRoute, setCurrentRoute, getItemsArray, addItem, toggleCompleted };

})();