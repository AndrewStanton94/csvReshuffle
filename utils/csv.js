import Papa from 'papaparse';

// export function csvToJSON(csv) {
// 	const allTextLines = csv.split(/\r\n|\n/);
// 	const lines = [];
// 	for (let i = 0; i < allTextLines.length; i++) {
// 		let data = allTextLines[i].split(';');
// 		let tarr = [];
// 		for (let j = 0; j < data.length; j++) {
// 			tarr.push(data[j]);
// 		}
// 		lines.push(tarr);
// 	}
// 	console.log(lines);
// 	return lines;
// }

export function csvToJSON(csv) {
	console.log('csv: ', csv);
	let { data } = Papa.parse(csv, { skipEmptyLines: true });
	console.log(data);

	return data;
}

export function jsonToCSV(json) {
	console.log('json:', json);
	let data = Papa.unparse(json);
	console.log('data:', data);

	return data;
}
