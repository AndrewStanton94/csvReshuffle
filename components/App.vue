<template>
	<main>
		<h1 class="container">Hello {{bundler}}</h1>
		<input type="file" id="csvFileInput" ref="myFiles" @change="processFile" accept=".csv" />

		<section v-if="dataHeaders.length">
			<h2>Headers</h2>
			<ul>
				<li v-for="header in dataHeaders" :key="header">{{header}}</li>
			</ul>
			<button @click="reshuffle">reshuffle</button>
		</section>
	</main>
</template>

<script>
import Vue from 'vue';
import { csvToJSON, jsonToCSV } from '../utils/csv';
import orderedLists from '../utils/orderedLists';
import listsToObjects from '../utils/listsToObjects';
import saveFile from '../utils/saveFile';

export default Vue.extend({
	data() {
		return {
			bundler: 'Parcel',
			files: [],
			fileData: [],
		};
	},
	methods: {
		processFile() {
			// $refs gives a direct link to the element
			this.files = this.$refs.myFiles.files;

			var reader = new FileReader();
			reader.readAsText(this.files[0]);
			reader.onload = (event) => {
				var csv = event.target.result;
				this.fileData = csvToJSON(csv);
				document.csv = this.fileData;

				this.fileData.forEach((e, i) => {
					console.log('row', i, e);
				});
			};
			reader.onerror = (evt) => {
				if (evt.target.error.name == 'NotReadableError') {
					alert("Canno't read file !");
				}
			};
		},
		reshuffle() {
			document.obj = listsToObjects(
				this.dataHeaders,
				this.fileData.slice(1)
			);

			const curatedData = orderedLists(
				document.obj,
				this.dataHeaders.reverse()
			);
			console.log('curatedData: ', curatedData);

			const csvOut = jsonToCSV(curatedData);
			saveFile(csvOut, 'export.csv');
		},
	},
	computed: {
		dataHeaders() {
			document.dataHeaders = this.fileData[0] || [];
			return this.fileData[0] || [];
		},
	},
});
</script>

<style scoped>
.container {
	color: green;
}
</style>