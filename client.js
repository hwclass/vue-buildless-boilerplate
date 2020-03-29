import Vue from "/web_modules/vue/dist/vue.esm.browser.js";

import app from './src/components/App.js'

new Vue({
  el: 'main',
  render: h => h(app.components.App)
})