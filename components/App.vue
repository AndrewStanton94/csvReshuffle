/* eslint-disable vue/html-self-closing */
<template>
	<main>
		<csv-input
			v-model="dataReceived"
			class="section"
		></csv-input>

		<section class="dev">
			{{ dataReceived }}
		</section>

		<transition name="fade">
			<reorder-data
				v-if="dataReceived.headers.length"
				v-model="dataSorted"
				:data-received="dataReceived"
				class="section"
			></reorder-data>
		</transition>

		<section class="dev">
			{{ dataSorted }}
		</section>

		<transition name="fade">
			<save-csv
				v-if="dataSorted.length"
				class="section"
				:data-sorted="dataSorted"
			></save-csv>
		</transition>
	</main>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
	data() {
		return {
			dataReceived: {
				headers: [],
				data: [],
			},
			dataSorted: [],
		};
	},
});
</script>

<style scoped>
.container {
	color: green;
}

.dev {
	display: none;
}
.fade-enter-active,
.fade-leave-active {
	transition: opacity 2.5s;
}
.fade-enter,
.fade-leave-to {
	opacity: 0;
}
</style>