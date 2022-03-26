// eslint-disable-next-line no-unused-vars
import css from '../css/index.css';
import Controller from './controller';

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
