<template>
	<section>
		<label>
			Export filename:
			<input
				v-model="fileName"
				type="text"
			>
		</label>
		<button @click="save">
			Save {{ fullFileName }}
		</button>
	</section>
</template>

<script>
import { jsonToCSV } from '../utils/csv';
import saveFile from '../utils/saveFile';

export default {
	props: ['tabularData'],
	data() {
		return {
			fileName: 'export',
		};
	},
	computed: {
		fullFileName() {
			const name = this.fileName;
			if (!name) {
				return '';
			}
			return name.endsWith('.csv') ? name : `${name}.csv`;
		},
	},
	methods: {
		save() {
			console.log('tabularData: ', this.tabularData.data);

			const csvOut = jsonToCSV(this.tabularData.data);
			saveFile(csvOut, this.fullFileName);
		},
	},
};
</script>

<style scoped>
section {
	border: blue solid 5px;
}
</style>