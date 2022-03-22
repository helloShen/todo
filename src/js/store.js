// import Controller from './controller.js';

export default (() => {

    const dataKey = 'items';

    function getItemsObject() {
        const data = window.localStorage.getItem(dataKey);
        if (data) return JSON.parse(data);
        return {};
    }

    function setItemsObject(itemsObj) {
        window.localStorage.setItem(dataKey, JSON.stringify(itemsObj));
    }

    return { getItemsObject, setItemsObject };

})();