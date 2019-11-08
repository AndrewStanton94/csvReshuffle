/**
 *	Converts table data (a list of lists) into a list of objects
 * @param {string[]} headers
 * @param {string[][]} data
 *
 * @returns {Object[]}
 */
export default function(headers, data) {
	return data.map((row) => {
		const rowData = {};
		headers.forEach((header, i) => (rowData[header] = row[i]));
		return rowData;
	});
}
