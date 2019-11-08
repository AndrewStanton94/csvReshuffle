import { saveAs } from 'file-saver';

export default function(data, fileName) {
	const blob = new Blob([data], {
		type: 'text/plain;charset=utf-8',
	});
	saveAs(blob, fileName);
}
