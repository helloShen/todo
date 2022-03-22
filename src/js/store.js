export default (() => {

    const itemsKey = 'todoItems';
    const routeKey = 'todoCurrentRoute';

    function getItemsObject() {
        const data = window.localStorage.getItem(itemsKey);
        if (data) return JSON.parse(data);
        return {};
    }

    function setItemsObject(itemsObj) {
        window.localStorage.setItem(itemsKey, JSON.stringify(itemsObj));
    }

    function getCurrentRoute(route) {
        return window.localStorage.getItem(`${routeKey}`);
    }

    function setCurrentRoute(route) {
        window.localStorage.setItem(`${routeKey}`, route);
    }

    return { getItemsObject, setItemsObject, getCurrentRoute, setCurrentRoute };

})();