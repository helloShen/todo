// import Controller from './controller.js';
import Template from './template.js';

export default (() => {

    const todoEle = document.querySelector('.todo');
    const addItemEle = document.querySelector('.todo > .addItem');

    function clearAddItemEle() {
        addItemEle.value = '';
    }

    function getItemsEle() {
        return document.querySelector('.todo > .items');
    }

    function createItemsEle() {
        const items = document.createElement('div');
        items.classList.add('items');
        todoEle.appendChild(items);
        return items;
    }

    function removeItemsEle() {
        const items = getItemsEle();
        if (items) items.remove();
    }

    function whenAddItem(handler) {
        addItemEle.addEventListener('change', () => handler(addItemEle), false);
    }

    function showItems(items) {
        let itemsEle = getItemsEle();
        if (!itemsEle) itemsEle = createItemsEle();
        itemsEle.insertAdjacentHTML('afterbegin', Template.renderItems(items));
    }

    return { clearAddItemEle, whenAddItem, showItems };

})();