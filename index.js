import Vue from 'vue';
import draggable from 'vuedraggable';

import App from './components/App.vue';
import csvInput from './components/csv-input';
import reorderData from './components/reorder-data';
import saveCSV from './components/save-csv';

Vue.component('sortablejs-draggable', draggable);

Vue.component('csv-input', csvInput);
Vue.component('reorder-data', reorderData);
Vue.component('save-csv', saveCSV);

new Vue({
	render: (createElement) => createElement(App),
}).$mount('#app');
