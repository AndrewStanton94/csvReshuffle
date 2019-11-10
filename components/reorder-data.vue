<template>
	<section>
		<h2>Headers</h2>
		<sortablejs-draggable
			v-model="value.headers"
			@start="drag=true"
			@end="drag=false"
		>
			<div
				v-for="element in value.headers"
				:key="element"
			>
				{{ element }}
			</div>
		</sortablejs-draggable>

		<ul>
			<li
				v-for="header in value.headers"
				:key="header"
			>
				{{ header }}
			</li>
		</ul>
		<button @click="reshuffle">
			reshuffle
		</button>
	</section>
</template>

<script>
import orderedLists from '../utils/orderedLists';
export default {
	props: {
		value: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {};
	},
	methods: {
		reshuffle() {
			console.log('preReshuffle: ', this.value);
			const curatedData = orderedLists(
				this.value.data,
				this.value.headers.reverse()
			);
			this.value.data = curatedData;
			console.log('curatedData: ', curatedData);
		},
	},
};
</script>

<style scoped>
section {
	border: green solid 5px;
}
</style>