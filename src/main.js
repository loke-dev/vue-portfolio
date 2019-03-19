import DefaultLayout from "~/layouts/Default.vue";
import settings from "../data/theme.json";

import "@/assets/code-highlight.css"

import {
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'
import {
  library
} from '@fortawesome/fontawesome-svg-core'
import {
  faGithub,
  faTwitter,
  faFacebook,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons'
import {
  faEnvelope
} from '@fortawesome/free-solid-svg-icons'

library.add(faGithub, faTwitter, faFacebook, faLinkedin, faEnvelope)

export default function (Vue, {
  head
}) {
  Vue.component('font-awesome', FontAwesomeIcon)
  Vue.component("Layout", DefaultLayout);
  head.bodyAttrs = {
    class: settings.dark_mode ? "dark" : ""
  }
}
