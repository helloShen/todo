import css from '../css/index.css';
import Controller from './controller.js';

(() => {
    Controller.enableAddItem();
    Controller.enableChangeRoute();
    Controller.enableClearCompletedItems();
    Controller.enableToggleAll();
    Controller.showDate();
    Controller.showItems();
    Controller.updateItemsCount();
    Controller.showFooter();
})();