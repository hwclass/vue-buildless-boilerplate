import Vue from "/web_modules/vue/dist/vue.esm.browser.js";

export default Vue.component('heading', {
  props: ['content'],
  template: `
    <h1 :style="styling">
      {{content}}
    </h1>
  `,
  computed: {
    styling: function() {
      return {
        color: 'blue'
      }
    }
  }
})