<template>
	<section class="container">
		<h2 class="title">
			CSV Upload
		</h2>
		<p class="subtitle">
			Your data will be processed in your browser. It will not be sent to any servers.
		</p>
		<form class="form">
			<input
				id="csvFileInput"
				ref="myFiles"
				class="input is-primary"
				type="file"
				accept=".csv"
				@change="processFile"
			>
		</form>
	</section>
</template>

<script>
import { csvToJSON } from '../utils/csv';
import listsToObjects from '../utils/listsToObjects';

export default {
	methods: {
		processFile() {
			// $refs gives a direct link to the element
			const { files } = this.$refs.myFiles;
			const reader = new FileReader();

			reader.readAsText(files[0]);
			reader.onload = (event) => {
				// CSV converted to a list of lists
				const [headers, ...dataAsLists] = csvToJSON(
					event.target.result
				);

				// convert to a list of objects
				// Named attributes will be easier to work with
				const dataAsObjects = listsToObjects(headers, dataAsLists);

				this.$emit('input',
					{
						headers,
						data: dataAsObjects,
					}
				);
			};
			reader.onerror = (evt) => {
				if (evt.target.error.name === 'NotReadableError') {
					alert('Canno\'t read file !');
				}
			};
		},
	},
};
</script>

<style scoped>
section {
	border: red solid 5px;
}
</style>