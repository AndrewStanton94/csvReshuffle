import parse from 'csv-parse/lib/sync';

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
	console.log(typeof csv);
	document.input = csv;
	document.parse = parse;

	// A hack to get the observer filth off the object
	let input = JSON.parse(JSON.stringify(csv));
	console.log(input);

	const records = parse(input, {
		columns: true,
		skip_empty_lines: true,
	});
	console.log(typeof records);

	let output = Object.assign({}, records);
	output = output.map((line) => Object.assign({}, line));
	console.log(output);
	document.records = output;
	return output;
}
