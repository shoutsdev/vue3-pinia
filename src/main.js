import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import './assets/main.css';

const app = createApp(App);
const pinia = createPinia()

// make Pinia available in your Vue app
app.use(pinia);

app.mount('#app');
