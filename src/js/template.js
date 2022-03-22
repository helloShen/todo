export default (() => {

    function renderItems(items) {
        return items.reduce((result, item) => {
            const str = 
            `<div class="item" data-id=${item.getId()}>
                ${item.getTitle()}
            </div>`;
            return result + str;
        }, '');
    }

    return { renderItems };

})();

    