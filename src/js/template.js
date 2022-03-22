export default (() => {

    function renderItem(itemObj) {
        const str = 
        `<div class="item" data-id=${itemObj.id}>
            <input class="toggle" type="checkbox"> 
            <label class="text">${itemObj.title}</label>
            <i class="delete material-icons">clear</i>
        </div>`;
        return str;
    }

    return { renderItem };

})();

    