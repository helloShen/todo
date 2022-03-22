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

    function tryToHideItemsBoard() {
        const items = itemsContainerEle.querySelectorAll('.item');
        if (items.length === 0) hideItemsBoard();
    }

    function whenAddItem(callback) {
        addItemEle.addEventListener('change', () => callback(addItemEle), false);
    }

    function whenToggleCompleted(target, callback) {
        const checkbox = target.querySelector('.toggle');
        checkbox.addEventListener('change', () => {
            target.classList.toggle('completed');
            callback(target);
        });
    }

    function whenDeleteItem(target, callback) {
        const btn = target.querySelector('.delete');
        btn.addEventListener('click', () => {
            target.remove();
            callback(target);
        });
    }

    function whenEditItem(target, callback) {
        const label = target.querySelector('.text');
        label.addEventListener('dblclick', () => {
            label.classList.add('editting');
            label.setAttribute('contenteditable', true);
            label.focus();
        });
        label.addEventListener('blur', () => {
            label.classList.remove('editting');
            label.setAttribute('contenteditable', false);
            callback(target, label.textContent);
        });
        label.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') label.blur();
        });
    }

    function removeElement(target) {
        target.remove();
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

    return { clearAddItemEle, hideItemsBoard, tryToHideItemsBoard, showItemsBoard, whenAddItem, whenToggleCompleted, whenDeleteItem, whenEditItem, removeElement, clearItems, showItem };

})();