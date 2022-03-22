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

    function whenToggleCompleted(target, callback) {
        const checkbox = target.querySelector('.toggle');
        checkbox.addEventListener('change', () => {
            target.classList.toggle('completed');
            callback(target);
        });
    }

    function clearItems() {
        itemsContainerEle.innerHTML = '';
    }

    function showItem(itemObj, callback) {
        itemsContainerEle.insertAdjacentHTML('beforeend', Template.renderItem(itemObj));
        const target = itemsContainerEle.querySelector(`.item[data-id="${itemObj.id}"]`);
        if (itemObj.completed) {
            target.classList.add('completed');
            const checkbox = target.querySelector('.toggle');
            checkbox.checked = true;
        }
        callback(target);
    }

    return { clearAddItemEle, hideItemsBoard, showItemsBoard, whenAddItem, whenToggleCompleted, clearItems, showItem };

})();