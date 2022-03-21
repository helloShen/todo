export default (() => {
    const items = [];

    const Item = (() => {
        function create(text) {
            const item = {
                id: Date.now(),
                title: text
            };
            return Object.assign(item, this);
        }

        function getId() {
            return this.id;
        }

        function getTitle() {
            return this.title;
        }

        function setTitle(text) {
            this.title = text;
        }

        return { create, getId, getTitle, setTitle };
    })();

    function addItem(text) {
        items.push(Item.create(text));
    }

    function getItems() {
        return items;
    }

    return { addItem, getItems };

})();