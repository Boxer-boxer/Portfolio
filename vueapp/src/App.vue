<template>
  <div class="main" :style="cssVars">

    <EntrySection :background="entrySectionBackground" />
    <ProjectSection :projects="projects" />
    <ContactSection />
  </div>
</template>

<script>
  import axios from 'axios'
  import EntrySection from './components/EntrySection.vue'
  import ProjectSection from './components/ProjectSection.vue'
  import ContactSection from './components/ContactSection.vue'

export default {
    name: 'App',
    components: {
      EntrySection,
      ProjectSection,
      ContactSection
    },
    data() {
      return {
        data: "",
        projects: []
      }
    },
    created() {
      this.getSiteSettings()
      this.getProjects()
    },
    methods: {
      async getSiteSettings() {
        const api_url = new URL(location.href).href
        await axios.get(`${api_url}api/settings`).then(response => {
          this.data = response.data[0]
        })
      },
      async getProjects() {
        const api_url = new URL(location.href).href
        await axios.get(`${api_url}api/projects`).then(response => {
          this.projects = response.data
        })
      }
    },
    computed: {
      cssVars() {
        return {
          '--bg-color': this.data.color,
          '--font-color': this.data.font_color
        }
      },
      entrySectionBackground(){
        return {
          "image" : this.data.entry_section_background
        }
      }
    }
  }
</script>

<style>
#app {
  font-family: Open Sans, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.main {
  background-color: var(--bg-color);
  color: var(--font-color);
}

.text-left {
  text-align: left;
}

h1 {
  font-family: 'Work Sans', serif;
}

p {
  font-family: 'Open Sans', sans-serif;
}

[class^=material-] {
  font-size:14px;
}

.sr-only {
  display: none;
}

.hide-letters {
  /* width: 0!important; */
  opacity: 0 !important;
  /* display: none; */
  transition: 0.5s;
  font-size: 0;
}

.show-letters {
  /* display: inline-block!important; */
  opacity: 1!important;
  font-size: 1em;
  /* width: auto!important; */
  transition: 0.5s; 
}
</style>
