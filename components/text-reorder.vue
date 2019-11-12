<template>
	<section class="section">
		<h3 class="title">
			Enter list here
		</h3>
		<p class="subtitle">
			You can paste a presorted list of column names here.
		</p>
		<form
			class="form"
			@submit.prevent="loadSortData"
		>
			<textarea
				v-model="userInput"
				class="textarea"
				:class="[ validationPassed ? 'is-success' : 'is-danger']"
				cols="30"
				rows="10"
			></textarea>
			<button
				class="button is-primary"
				type="submit"
			>
				Load order
			</button>
		</form>
		<section>{{ rejectedInput }}</section>
	</section>
</template>

<script>
export default {
	props: {
		dataReceived: {
			required: true,
			type: Array
		},
		value: {
			type: Array,
			required: true
		}
	},
	data() {
		return {
			userInput: 'war\nfamine\nplague\ndeath',
			rejectedInput: [],
		};
	},
	computed: {
		validationPassed(){
			return !this.rejectedInput.length;
		}
	},
	methods: {
		loadSortData() {
			console.log(this.userInput);

			let currentInput = this.userInput.split('\n');
			const validOptions = currentInput.filter((inputItem) => this.dataReceived.includes(inputItem));
			this.rejectedInput =  currentInput.filter((inputItem) => !this.dataReceived.includes(inputItem));
			this.userInput = validOptions.join('\n');
		}
	}
};
</script>

<style scoped>

</style>