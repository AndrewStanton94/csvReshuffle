<template>
	<section>
		<h1>This is a csv-input component {{ message }} {{ aProp }}</h1>
		<input
			id="csvFileInput"
			ref="myFiles"
			type="file"
			accept=".csv"
			@change="processFile"
		>
	</section>
</template>

<script>
import { csvToJSON } from '../utils/csv';
import listsToObjects from '../utils/listsToObjects';

export default {
	props: ['aProp'],
	data() {
		return {
			message: 'Yo',
		};
	},
	methods: {
		processFile() {
			// $refs gives a direct link to the element
			const { files } = this.$refs.myFiles;

			var reader = new FileReader();
			reader.readAsText(files[0]);
			reader.onload = (event) => {
				const [headers, ...dataAsLists] = csvToJSON(
					event.target.result
				);

				const dataAsObjects = listsToObjects(headers, dataAsLists);

				const processedCSV = {
					headers,
					data: dataAsObjects,
				};

				console.log('processedCSV: ', processedCSV);

				this.$emit('input', processedCSV);
			};
			reader.onerror = (evt) => {
				if (evt.target.error.name == 'NotReadableError') {
					alert('Canno\'t read file !');
				}
			};
		},
	},
};
</script>

<style scoped>
h1 {
	background-color: blueviolet;
}
section {
	border: red solid 5px;
}
</style>