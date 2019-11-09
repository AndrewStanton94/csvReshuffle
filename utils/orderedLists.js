/** Use the headers to put the line into the desired order and adds header row
 *
 * @param {Object[]} data A list of line representations
 * @param {string[]} headers The headers in the chosen order
 */
export default function(data, headers) {
	const sortedData = data.map((row) =>
		headers.map((cellName) => row[cellName])
	);
	sortedData.unshift(headers);
	return sortedData;
}
