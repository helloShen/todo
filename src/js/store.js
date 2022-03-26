/* store.js knows only how to read/write string data from/to Document.localStorage.
 * All items are stored as a long string in localStorage. */
export default (inName, inDefaultValue) => {
	const name = inName;
	const defaultValue = inDefaultValue;
	const storage = window.localStorage;
	let liveStorage;

	function read() {
		return liveStorage || JSON.parse(storage.getItem(name)) || defaultValue;
	}

	function write(data) {
		liveStorage = data;
		storage.setItem(name, JSON.stringify(data));
	}

	return { read, write };
};
