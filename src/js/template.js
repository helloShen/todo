export default (() => {

    const itemTemplate = 
        

    function render(template, data) {
        return Object.getOwnPropertyNames(data).reduce((result, prop) => template.replace(`{{${prop}}}`, data[prop]), template);
    }

    function renderItems(items) {
        return items.reduce((result, item) => {
            const str = 
            `<div class="item" data-id=${item['id']}>
                ${item['title']}
            </div>`;
            return result + str;
        }, '');
    }

    return { renderItems };

})();

    