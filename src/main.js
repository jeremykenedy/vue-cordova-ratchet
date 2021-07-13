import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import axios from 'axios';
import VueSweetalert2 from 'vue-sweetalert2';
import '@fortawesome/fontawesome-free/css/all.min.css';
require('goratchet/dist/js/ratchet.js');

import AppButton from '@/views/components/common/AppButton';

axios.defaults.baseURL = process.env.VUE_APP_BASE_URL;
axios.defaults.withCredentials = true;

const app = createApp(App);

app.component('AppButton', AppButton);

store.dispatch('auth/me').then(() => {
  app
  .use(store)
  .use(router)
  .use(VueSweetalert2)
  .mount('#app');
});
