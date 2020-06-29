import Vue from "vue";
import App from "./App.vue";
import {
  library
} from "@fortawesome/fontawesome-svg-core";
import {
  faSearch,
  faWindowClose
} from "@fortawesome/free-solid-svg-icons";
import {
  FontAwesomeIcon,
  FontAwesomeLayers,
  FontAwesomeLayersText,
} from "@fortawesome/vue-fontawesome";
import VueGoogleApi from "vue-google-api";
import {
  VUE_GOOGLE_API_CONFIG
} from './helpers/constants';
import router from './router'

Vue.use(VueGoogleApi, VUE_GOOGLE_API_CONFIG);
library.add(faSearch, faWindowClose);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("font-awesome-layers", FontAwesomeLayers);
Vue.component("font-awesome-layers-text", FontAwesomeLayersText);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app");
