import css from '../css/index.css';
import Controller from './controller.js';

(() => {
    Controller.enableAddItem();
    Controller.enableChangeRoute();
    Controller.enableClearCompletedItems();
    Controller.enableToggleAll();
    Controller.showItems();
    Controller.updateItemsCount();
})();