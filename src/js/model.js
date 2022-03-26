/*
 * A DAO(Data Access Object) API.
 * It's aware of the data structure of Item and other objects.
 * And knows how to insert, update, delete and read these data.
 */

import Store from './store';

export default (() => {
	const itemStorage = Store('items', []);
	const currentRouteStorage = Store('currentRoute', 'all');

	/* A factory function creating new item object. */
	const Item = (text) => ({
		id: Date.now(),
		title: text,
		completed: false,
	});

	/**
	 * Query is a [key, value] pair.
	 * Once a query is created, it's read-only.
	 */
	const Query = (inKey, inValue) => {
		const key = inKey;
		const value = inValue;

		function getKey() {
			return key;
		}

		function getValue() {
			return value;
		}

		return {
			getKey,
			getValue,
		};
	};

	/* Return all items meet the requirements of the query.
	 * Queries is an array of [key, value] pair */
	function findItems(queries) {
		return itemStorage.read().filter((itemObj) => {
			let result = true;
			queries.forEach((query) => {
				if (itemObj[`${query.getKey()}`] !== query.getValue()) {
					result = false;
				}
			});
			return result;
		});
	}

	/* Create a new Item object and save it into storage. */
	function addItem(text) {
		const itemsArr = itemStorage.read();
		itemsArr.push(Item(text));
		itemStorage.write(itemsArr);
	}

	/* Remove an item from storage. */
	function deleteItem(itemId) {
		const itemsArr = itemStorage.read();
		const id = typeof itemId === 'string' ? parseInt(itemId, 10) : itemId;
		const idx = itemsArr.findIndex((ele) => ele.id === id);
		if (idx === -1) return;
		itemsArr.splice(idx, 1);
		itemStorage.write(itemsArr);
	}

	/* Update properties of an item. */
	function updateItem(itemId, query) {
		const itemsArr = itemStorage.read();
		const id = typeof itemId === 'string' ? parseInt(itemId, 10) : itemId;
		const idx = itemsArr.findIndex((ele) => ele.id === id);
		if (idx === -1) return;
		itemsArr[idx][query.getKey()] = query.getValue();
		itemStorage.write(itemsArr);
	}

	/* Toggle item "completed" property. */
	function toggleItemCompleted(itemId) {
		const itemsArr = itemStorage.read();
		const id = typeof itemId === 'string' ? parseInt(itemId, 10) : itemId;
		const idx = itemsArr.findIndex((ele) => ele.id === id);
		if (idx === -1) return;
		const target = itemsArr[idx];
		target.completed = !target.completed;
		itemStorage.write(itemsArr);
	}

	/* A wrapper function. Set current route to default value, if no route exits. */
	function getCurrentRoute() {
		return currentRouteStorage.read();
	}

	function setCurrentRoute(route) {
		currentRouteStorage.write(route);
	}

	return {
		Query,
		findItems,
		addItem,
		deleteItem,
		updateItem,
		toggleItemCompleted,
		getCurrentRoute,
		setCurrentRoute,
	};
})();
