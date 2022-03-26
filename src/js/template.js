/*
 * A helper of view.js. Only used to store HTML templates.
 */
export default (() => {
	function renderItem(itemObj) {
		const str = `<div class="item" data-id=${itemObj.id}>
            <input class="toggle material-icons" type="checkbox"> 
            <label class="text">${itemObj.title}</label>
            <i class="delete material-icons">clear</i>
        </div>`;
		return str;
	}

	function renderFooter(githubImg, year) {
		return `<div class="tip">Double click to edit todo.</div>
        <div class="copyright">Copyright MIT © hireme.shen@gmail.com &nbsp;|&nbsp; Source code - <a href="https://github.com/helloShen/todo"><img class="github" src="${githubImg}"></a></div>
        <div class="year">2021-${year}</div>`;
	}

	return { renderItem, renderFooter };
})();
