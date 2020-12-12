/**
 *
 * @param {Object} obj
 * @returns {string} query
 */
export function obj2query(obj) {
	let query = '';
	Object.entries(obj).forEach(([key, value]) => {
		query += `${key}=${encodeURIComponent(value)}&`;
	});
	return query.slice(0, -1);
}

/**
 *
 * @param {string} query
 * @returns {Object} obj
 */
export function query2obj(query) {
	const obj = {};
	if (query) {
		query
			.split('&')
			.map((part) => part.split('='))
			.forEach(([key, value]) => {
				obj[key] = decodeURIComponent(value);
			});
	}
	return obj;
}
