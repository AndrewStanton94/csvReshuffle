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
			@submit.prevent="validateUserInput"
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
				Validate input
			</button>
		</form>
		<div
			v-if="rejectedInput.length || unusedInput.length"
			class="columns"
		>
			<section class="column">
				<h4>Rejected Input</h4>
				<p>These are options that don't match the columns in the given file</p>
				{{ rejectedInput }}
			</section>
			<section class="column">
				<h4>Unused Input</h4>
				<p>These are options from the file that aren't listed above</p>
				<ul>
					<li
						v-for="(unused) in unusedInputSorted"
						:key="unused"
						@click="clickedOnUnused(unused)"
					>
						<button class="button">
							{{ unused }}
						</button>
					</li>
				</ul>
			</section>
		</div>
	</section>
</template>

<script>
export default {
	props: {
		dataReceived: {
			required: true,
			type: Array,
		},
		value: {
			type: Array,
			required: true,
		},
	},
	data() {
		return {
			userInput: 'war\nfamine\nplague\ndeath',
			rejectedInput: [],
			unusedInput: [],
		};
	},
	computed: {
		validationPassed() {
			return !this.rejectedInput.length;
		},
		unusedInputSorted() {
			// sort uses side effect
			return Array.from(this.unusedInput).sort();
		},
	},
	methods: {
		validateUserInput() {
			console.log(this.userInput);

			let currentInput = this.userInput.split('\n');

			this.userInput = currentInput
				.filter((inputItem) => this.dataReceived.includes(inputItem))
				.join('\n');

			this.rejectedInput = currentInput.filter(
				(inputItem) => !this.dataReceived.includes(inputItem)
			);

			this.unusedInput = this.dataReceived.filter(
				(inputItem) => !currentInput.includes(inputItem)
			);
		},
		clickedOnUnused(item) {
			let [output] = this.unusedInput.splice(
				this.unusedInput.indexOf(item),
				1
			);
			this.userInput = this.userInput.concat('\n', output).trim();
		},
	},
};
</script>

<style scoped>
</style>