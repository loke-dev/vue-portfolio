import DefaultLayout from "~/layouts/Default.vue";
import settings from "../data/theme.json";

import "@/assets/code-highlight.css"

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faTwitter, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons'

library.add(faGithub, faTwitter, faFacebook, faLinkedin, )

export default function(Vue, { head }) {
  Vue.component('font-awesome', FontAwesomeIcon)
  Vue.component("Layout", DefaultLayout);
  head.link.push({
    rel: 'stylesheet',
    href: '//cdnjs.cloudflare.com/ajax/libs/bulma/0.7.2/css/bulma.min.css'
  })
  head.bodyAttrs = {
    class: settings.dark_mode ? "dark" : ""
  };
}
