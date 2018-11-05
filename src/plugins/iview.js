import Vue from 'vue';
import { Button, locale, Tooltip } from 'iview';
import lang from 'iview/dist/locale/en-US';

import 'iview/dist/styles/iview.css';

locale(lang);

Vue.component('Button', Button);
Vue.component('Tooltip', Tooltip);
