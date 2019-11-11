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
				@click.prevent="save"
			>
				<span class="content">Save as <strong> {{ fullFileName }} </strong></span>
			</button>
		</form>
	</section>
</template>

<script>
import { jsonToCSV } from '../utils/csv';
import saveFile from '../utils/saveFile';

export default {
	props: {
		dataSorted: {
			required: true,
			type: Array
		}
	},
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
			const csvOut = jsonToCSV(this.dataSorted);
			saveFile(csvOut, this.fullFileName);
		},
	},
};
</script>

<style scoped>
</style>