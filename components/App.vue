/* eslint-disable vue/html-self-closing */
<template>
	<main>
		<csv-input
			v-model="tabularData"
			class="section"
		></csv-input>

		<p>{{ tabularData }}</p>

		<reorder-data
			v-model="tabularData"
			class="section"
		></reorder-data>

		<save-csv
			class="section"
			:tabular-data="tabularData"
		></save-csv>
	</main>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
	data() {
		return {
			tabularData: {
				headers: ['a', 'b'],
				data: [],
			},
		};
	},
});
</script>

<style scoped>
.container {
	color: green;
}
</style>