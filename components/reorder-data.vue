<template>
	<section class="container">
		<h2 class="title">
			Reorder the columns
		</h2>
		<div class="columns">
			<section class="column">
				<p class="subtitle">
					The column headers are shown below. You can drag and drop to reorder them.
				</p>
				<sortablejs-draggable
					v-model="dataReceived.headers"
					@start="drag=true"
					@end="drag=false"
				>
					<div
						v-for="element in dataReceived.headers"
						:key="element"
						class="box"
					>
						{{ element }}
					</div>
				</sortablejs-draggable>

				<form class="form">
					<button
						class="button is-primary"
						@click.prevent="reshuffle"
					>
						Reorder data
					</button>
				</form>
			</section>
			<section class="column">
				<text-reorder
					v-model="value"
					:data-received="dataReceived.headers"
				></text-reorder>
			</section>
		</div>
	</section>
</template>

<script>
import orderedLists from '../utils/orderedLists';
export default {
	props: {
		dataReceived: {
			required: true,
			type: Object
		},
		value: {
			type: Array,
			required: true
		},
	},
	methods: {
		reshuffle() {
			const sortedData = orderedLists(
				this.dataReceived.data,
				this.dataReceived.headers
			);
			this.$emit('input', sortedData);
		},
	},
};
</script>

<style scoped>
</style>