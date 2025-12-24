import './index.less';
import './utils/monaco-env';
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import 'highlight.js/styles/default.css';

import { createApp } from 'vue';
import App from './app.vue';

createApp(App).mount('#app');
