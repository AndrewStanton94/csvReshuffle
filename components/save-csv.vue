<template>
	<section class="container">
		<h2 class="title">
			Export updated file
		</h2>
		<form class="form">
			<label class="label">
				Export filename:
				<input
					v-model="fileName"
					class="input"
					type="text"
				>
			</label>
			<button
				class="button is-primary"
				@click="save"
			>
				Save {{ fullFileName }}
			</button>
		</form>
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