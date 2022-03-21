import View from './view.js';
import Model from './model.js';
import Store from './store.js';
import model from './model.js';

export default (() => {

    function bindAddItem() {
        View.whenAddItem(addItem);
    }

    function addItem(ele) {
        Model.addItem(ele.value);
        View.clearAddItemEle();
        View.showItems(Model.getItems());
    }

    return { bindAddItem };

})();
