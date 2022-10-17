import 'bootstrap/dist/css/bootstrap.min.css';
import { createApp } from 'vue';
import router from './router';
import App from './App.vue';
// import objPlugins from './plugins/obj';
// import funcPlugins from './plugins/func';
import person from './plugins/person';
import globalComponents from './plugins/global-components';
const app = createApp(App);
app
  .use(router)
  .use(globalComponents)
  // .use(objPlugins, { name: '나영' })
  // .use(funcPlugins)
  .use(person, { age: 13 })
  .mount('#app');

import 'bootstrap/dist/js/bootstrap.js';

console.log(import.meta.env.MODE);
console.log(import.meta.env.VITE_APP_API_URL);
