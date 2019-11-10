import Papa from 'papaparse';

/** Takes a string of CSV and converts it to JSON
 *
 * @param {string} csv The CSV data
 * @returns {string[][]} The data as a list of lists
 */
export function csvToJSON(csv) {
	let { data } = Papa.parse(csv, { skipEmptyLines: true });
	return data;
}

/** Takes JSON  and converts it into a string of CSV
 *
 * @param {string[][]} json The data as a list of lists
 * @returns {string} The CSV data
 */
export function jsonToCSV(json) {
	let data = Papa.unparse(json);
	return data;
}
