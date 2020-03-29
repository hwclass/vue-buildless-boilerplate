import Vue from "/web_modules/vue/dist/vue.esm.browser.js";

import heading from './Heading.js'

const FILMS = 'https://swapi.co/api/films/'

const App = Vue.component('app', {
  data(){
    return {
      films: []
    }
  },
  template: `
    <section id="app">
      <heading content="≠ Vue Buildless Boilerplate"/>
      <ul>
        <li v-for="film in films">
          {{ film.title }}
        </li>
      </ul>
    </section>
  `,
  methods: {
    async fetchFilms () {
      fetch(FILMS)
        .then(res => {
          return res.json();
        })
        .then(data => {
          this.films = data.results;    
        });
    }
  },
  mounted () {
    this.fetchFilms()
  }
});

export default {
  name: 'app',
  components: {
    App
  }
}