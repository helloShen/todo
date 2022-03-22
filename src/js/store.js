export default (() => {

    const itemsKey = 'todoItems';
    const routeKey = 'todoCurrentRoute';

    function hasItem() {
        const itemsStr = window.localStorage.getItem(itemsKey);
        if (itemsStr === '{}') return false;
        return true;
    }

    function getItemsObject() {
        const data = window.localStorage.getItem(itemsKey);
        if (data) return JSON.parse(data);
        return {};
    }

    function setItemsObject(itemsObj) {
        window.localStorage.setItem(itemsKey, JSON.stringify(itemsObj));
    }

    function updateItems(callback) {
        const itemsObj = getItemsObject();
        callback(itemsObj);
        setItemsObject(itemsObj);
    }

    function getCurrentRoute(route) {
        return window.localStorage.getItem(`${routeKey}`);
    }

    function setCurrentRoute(route) {
        window.localStorage.setItem(`${routeKey}`, route);
    }

    return { hasItem, getItemsObject, setItemsObject, updateItems, getCurrentRoute, setCurrentRoute };

})();