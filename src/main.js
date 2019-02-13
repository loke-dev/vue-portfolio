import DefaultLayout from "~/layouts/Default.vue";
import settings from "../data/theme.json";

import "@/assets/code-highlight.css"

export default function(Vue, { head }) {
  Vue.component("Layout", DefaultLayout);
  head.link.push({
    rel: 'stylesheet',
    href: '//cdnjs.cloudflare.com/ajax/libs/bulma/0.7.2/css/bulma.min.css'
  })
  head.bodyAttrs = {
    class: settings.dark_mode ? "dark" : ""
  };
}
