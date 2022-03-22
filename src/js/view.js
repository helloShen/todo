// import Controller from './controller.js';
import Template from './template.js';

export default (() => {

    const todoEle = document.querySelector('.todo');
    const addItemEle = document.querySelector('.todo > .addItem');
    const itemsBoardEle = document.querySelector('.todo > .itemsBoard');
    const itemsContainerEle = document.querySelector('.todo .itemsContainer');

    function clearAddItemEle() {
        addItemEle.value = '';
    }

    function showItemsBoard() {
        if (itemsBoardEle.classList.contains('hidden')) {
            itemsBoardEle.classList.remove('hidden');
        } 
    }

    function hideItemsBoard() {
        if (!itemsBoardEle.classList.contains('hidden')) {
            itemsBoardEle.classList.add('hidden');
        }
    }

    function whenAddItem(handler) {
        addItemEle.addEventListener('change', () => handler(addItemEle), false);
    }

    function showItems(items) {
        if (items.length === 0) {
            hideItemsBoard();
            return;
        } else {
            itemsContainerEle.innerHTML = '';
            itemsContainerEle.insertAdjacentHTML('afterbegin', Template.renderItems(items));
            showItemsBoard();
        } 
    }

    return { clearAddItemEle, whenAddItem, showItems };

})();