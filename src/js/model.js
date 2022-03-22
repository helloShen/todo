import Store from './store.js';

export default (() => {

    const ItemFactory = (() => {

        const fns = { 
            getId: function() {
                return this.id;
            },
            getTitle: function() {
                return this.title;
            },
            setTitle: function(newTitle) {
                this.title = newTitle;
            },
            getComplete: function() {
                return this.complete;
            },
            setComplete: function(bool) {
                this.complete = bool;
            }
        };

        function createProto(text) {
            return {
                id: Date.now(),
                title: text,
                complete: false
            };
        }

        function bindFunction(obj) {
            return Object.assign(obj, fns);
        }

        return { createProto, bindFunction };

    })();

    function getItemsArray(type) {
        const itemsObj = Store.getItemsObject();
        if (!itemsObj) return [];
        return Object.getOwnPropertyNames(itemsObj).reduce((arr, name) => {
            const item = ItemFactory.bindFunction(itemsObj[`${name}`]);
            if (type) {
                switch (type) {
                    case 'all': 
                        arr.push(item);
                        break;
                    case 'active': 
                        if (!item.getComplete()) {
                            arr.push(item);
                        }
                        break;
                    case 'complete':
                        if (item.getComplete()) {
                            arr.push(item);
                        }
                        break;
                }
            }
            return arr;
        },[]);
    }

    function addItem(text) {
        const itemProto = ItemFactory.createProto(text);
        let itemsObj = Store.getItemsObject();
        itemsObj[`${itemProto['id']}`] = itemProto;
        Store.setItemsObject(itemsObj);
    }

    return { getItemsArray, addItem };

})();