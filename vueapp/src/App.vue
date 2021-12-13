<template>
  <div class="main" :style="cssVars">

    <EntrySection/>
    <ProjectSection/>
  </div>
</template>

<script>
  import axios from 'axios'
  import EntrySection from './components/EntrySection.vue'
  import ProjectSection from './components/ProjectSection.vue'

  export default {
    name: 'App',
    components: {
      EntrySection,
      ProjectSection
    },
    data() {
      return {
        data: "",
      }
    },
    created() {
      this.getSiteSettings()
    },
    methods: {
      async getSiteSettings() {
        const api_url = new URL(location.href).href
        await axios.get(`${api_url}api/settings`).then(response => {
          this.data = response.data[0]
          console.log(this.data)
        })
      }
    },
    computed: {
      cssVars() {
        return {
          '--bg-color': this.data.color,
          '--font-color': this.data.font_color
        }
    }
    }
  }
</script>

<style>
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.main {
  background-color: var(--bg-color);
  color: var(--font-color);
  padding: 16px;
}

.text-left {
  text-align: left;
}

h1 {
  font-family: 'Italiana', serif;
}

p {
  font-family: 'Roboto', sans-serif;
}

[class^=material-] {
  font-size:14px;
}
</style>
