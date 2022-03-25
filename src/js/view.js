import Template from './template.js';
import GithubImg from '../assets/img/github_black.png';

export default (() => {

    const todoEle = document.querySelector('.todo');
    const titleEle = todoEle.querySelector('.title');
    const dateEle = titleEle.querySelector('.date');
    const dayEle = dateEle.querySelector('.day');
    const monthEle = dateEle.querySelector('.month');
    const yearEle = dateEle.querySelector('.year');
    const weekdayEle = titleEle.querySelector('.weekday');
    const toggleAllEle = todoEle.querySelector('.toggleAll');
    const addItemContainerEle = todoEle.querySelector('.addItemContainer');
    const addItemEle = addItemContainerEle.querySelector('.addItem');
    const addItemLabelEle = addItemContainerEle.querySelector('.addItemLabel');
    const itemsBoardEle = todoEle.querySelector('.itemsBoard');
    const itemsContainerEle = itemsBoardEle.querySelector('.itemsContainer');
    const itemsFooterEle = itemsBoardEle.querySelector('.itemsFooter');
    const routeBtns = itemsFooterEle.querySelectorAll('.route');
    const activeCountEle = itemsFooterEle.querySelector('.activeItemsCount');
    const activeCountNumEle = activeCountEle.querySelector('.count');
    const completedCountEle = itemsFooterEle.querySelector('.completedItemsCount');
    const completedCountNumEle = completedCountEle.querySelector('.count');
    const footerEle = document.querySelector('.footer');

    function showDate(weekday, day, month, year) {
        dayEle.textContent = day;
        monthEle.textContent = month;
        yearEle.textContent = year;
        weekdayEle.textContent = weekday;
    }

    function clearAddItemEle() {
        addItemEle.value = '';
    }

    function bindAddItem(callback) {
        addItemEle.addEventListener('change', () => callback(addItemEle.value), false);
    }

    function bindAddItemLabel() {
        addItemEle.addEventListener('input', () => hideAddItemLabel());
        addItemEle.addEventListener('change', () => hideAddItemLabel());
    }

    function hideAddItemLabel() {
        if (addItemEle.value === '') {
            addItemLabelEle.classList.remove('hide');
        } else {
            addItemLabelEle.classList.add('hide');
        }
    }
    

    function bindToggleCompleted(target, callback) {
        const checkbox = target.querySelector('.toggle');
        checkbox.addEventListener('change', () => {
            target.classList.toggle('completed');
            callback(target.dataset.id);
        });
    }

    function bindDeleteItem(target, callback) {
        const btn = target.querySelector('.delete');
        btn.addEventListener('click', () => {
            target.remove();
            callback(target.dataset.id);
        });
    }

    function bindEditItem(target, callback) {
        const label = target.querySelector('.text');
        label.addEventListener('dblclick', () => {
            label.classList.add('editting');
            label.setAttribute('contenteditable', true);
            label.focus();
        });
        label.addEventListener('blur', () => {
            label.classList.remove('editting');
            label.setAttribute('contenteditable', false);
            callback(target.dataset.id, label.textContent, () => {
                removeElement(target);
            });
        });
        label.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') label.blur();
        });
    }

    function bindChangeRoute(eachBtnCallback, endingCallback) {
        routeBtns.forEach((btn) => {
            btn.addEventListener('click', () => {
                eachBtnCallback(btn.dataset.route);
                routeBtns.forEach((ele) => {
                    if (ele.classList.contains('current')) {
                        ele.classList.remove('current');
                    }
                });
                btn.classList.add('current');
            });
        });
        endingCallback();
    }

    function markCurrentRoute(route) {
        routeBtns.forEach((btn) => {
            if (btn.dataset.route === route) {
                btn.classList.add('current');
            }
        });
    }

    function bindClearCompletedItems(callback) {
        completedCountEle.addEventListener('click', () => callback());
    }

    function bindToggleAll(callback) {
        toggleAllEle.addEventListener('click', () => callback());
    }

    function updateActiveItemsCount(count) {
        activeCountNumEle.textContent = count;
    }

    function updateCompletedItemsCount(count) {
        completedCountNumEle.textContent = count;
    }

    function showCompletedItemsCount() {
        completedCountEle.classList.remove('hide');
    }

    function hideCompletedItemsCount() {
        completedCountEle.classList.add('hide');
    }

    function showItemsBoard() {
        itemsBoardEle.classList.remove('hidden');
        addItemContainerEle.classList.remove('alone');
        addItemEle.classList.remove('alone');
    }

    function hideItemsBoard() {
        itemsBoardEle.classList.add('hidden');
        addItemContainerEle.classList.add('alone');
        addItemEle.classList.add('alone');
    }

    function hideToggleAll() {
        toggleAllEle.classList.add('hide'); 
    }

    function toggleAllChecked() {
        toggleAllEle.classList.remove('hide');
        toggleAllEle.checked = true;
    }

    function toggleAllNotChecked() {
        toggleAllEle.classList.remove('hide');
        toggleAllEle.checked = false;
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

    function showFooter() {
        const year = new Date().getFullYear();
        footerEle.insertAdjacentHTML('afterbegin', Template.renderFooter(GithubImg, year));
    }
    

    return { showDate, clearAddItemEle, bindAddItem, bindAddItemLabel, bindToggleCompleted, bindDeleteItem, bindEditItem, bindChangeRoute, markCurrentRoute, bindClearCompletedItems, bindToggleAll, updateActiveItemsCount, updateCompletedItemsCount, showCompletedItemsCount, hideCompletedItemsCount, hideItemsBoard, showItemsBoard, hideToggleAll, toggleAllChecked, toggleAllNotChecked, removeElement, clearItems, showItem, showFooter };

})();