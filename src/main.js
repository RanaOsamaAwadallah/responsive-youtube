import Vue from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch, faWindowClose } from "@fortawesome/free-solid-svg-icons";
import {
  FontAwesomeIcon,
  FontAwesomeLayers,
  FontAwesomeLayersText,
} from "@fortawesome/vue-fontawesome";
import VueGoogleApi from "vue-google-api";

const config = {
  apiKey: "your_api_key",
  clientId: "your_client_id.apps.googleusercontent.com",
  scope: "space_separated_scopes",
};

Vue.use(VueGoogleApi, config);
library.add(faSearch, faWindowClose);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("font-awesome-layers", FontAwesomeLayers);
Vue.component("font-awesome-layers-text", FontAwesomeLayersText);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
