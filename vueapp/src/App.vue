<template>
  <div class="main" :style="cssVars">
    <button class="menu-button" v-on:click="openMenu">
      <span class="menu-button-bar" id="menu-button-bar-1"></span>
      <span class="menu-button-bar" id="menu-button-bar-2"></span>
      <span class="menu-button-bar" id="menu-button-bar-3"></span>
    </button>

    <SideBar />
    <EntrySection />
    <ProjectSection :projects="this.projects" />
    <ExperienceSection :experience="this.experience" :languages="this.languages"/>
    <AboutMeSection />
    
  </div>
</template>

<script>
import axios from "axios";
import SideBar from "./components/SideBar.vue";
import EntrySection from "./components/EntrySection.vue";
import toggle from "./mixins/toggle";
import $ from "jquery";
import ProjectSection from "./components/ProjectSection.vue";
import ExperienceSection from "./components/ExperienceSection.vue";
import AboutMeSection from "./components/AboutMeSection.vue";

export default {
  name: "App",
  mixins: [toggle],
  components: {
    SideBar,
    EntrySection,
    ProjectSection,
    ExperienceSection,
    AboutMeSection,
  },
  data() {
    return {
      data: "",
      projects: [],
      languages: [],
      experience: []
    };
  },
  head: {
    title: function () {
      return {
        inner: "Jorge da Silva - Web Developer",
      };
    },
  },
  created() {
    this.getSiteSettings();
    this.getProjects();
    this.getLanguages();
    this.getExperience();
  },
  mounted(){
    this.createWackStyle();
  },
  methods: {
    createWackStyle() {
      let classes = ['font-avant-garde', 'font-clarendon',
      'font-cooper-black', 'font-futura-bold', 'font-helvetica-now',
      'font-noto-sans']
    
      let el = $(".wack-style");

      for (var x = 0; x < el.length; x++) {
        let e = el[x];
      
        let content = $(e).data('content');
        if(content.length > 0){
          for (var i = 0; i < content.length; i++) {
            let letter = content[i];
            let spanEl = document.createElement( "span" )
            let negative = Math.floor(Math.random() * 3) + 1;
            let skewvalue = Math.floor(Math.random() * (15 - -15 + 1)) + -15;
            let Yvalue = Math.floor(Math.random() * (10 - -10 + 1)) + -10;
            let cssClass = classes[Math.floor(Math.random() * classes.length-1) + 1];
            spanEl.append(letter)
            if (letter == " ") {
              $(spanEl).css(
                { padding : '10px' }
              )  
            }
            spanEl.className = cssClass
            spanEl.className += ' d-inline-block hover-letter'
            $(spanEl).css(
              { 
                transform : `skew(` + skewvalue +`deg) translateY(` + Yvalue + `px)`,
              }            
            ) 

            if(negative == 3 && letter != " ") {
              spanEl.className += ' negative'
            }
            e.append(spanEl);
          }
        }
      }
    },
    async getProjects() {
      const api_url = new URL(location.href).href;
      await axios.get(`${api_url}api/projects`).then((response) => {
        this.projects = response.data;
      });
    },
    async getSiteSettings() {
      const api_url = new URL(location.href).href;
      await axios.get(`${api_url}api/settings`).then((response) => {
        this.data = response.data[0];
      });
    },
    async getExperience(){
      const api_url = new URL(location.href).href;
      await axios.get(`${api_url}api/experience`).then((response) => {
        this.experience = response.data;
      });
    },
    async getLanguages(){
      const api_url = new URL(location.href).href;
      await axios.get(`${api_url}api/language`).then((response) => {
        this.languages = response.data;
      });
    },
    openMenu() {
      this.toggle($(".menu-main"), "active", "down");
      this.toggle($(".menu"), "active", "down");
      this.toggle($(".transition-div-1"), "transition-1", "transition-1-out");
      this.toggle($(".transition-div-2"), "transition-2", "transition-2-out");
      this.toggle($(".transition-div-3"), "transition-3", "transition-3-out");
    },
  },
  computed: {
    cssVars() {
      return {
        "--bg-color": this.data.color,
        "--font-color": this.data.font_color,
      };
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/_variables.scss";

#app {
  // font-family: Open Sans, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.wack-style {
  text-shadow: 2px 2px black, 3px 3px white;
  .negative {
  text-shadow: 2px 2px white, 3px 3px black;

  }
}

.text- {
  &white {
    color: $white;
  }
  &black {
    color: $black;
  }
}

.bg- {
  &white {
    background: $white;
  }
  &black {
    background: $black;
  }
}

.rotate-20deg {
  transform: rotate(-20deg)
}

.mb-6 {
  margin-bottom: 3.5em;
}

.negative {
  background-color: white;
  color: black;
}

.z-index {
  &-0 {
    z-index: 0 !important;
  }
  &-1 {
    z-index: 1 !important;
  }
}

body {
  max-width: 100vw;
  overflow-x: hidden;
}

.menu-button {
  right: 1rem;
  top: 1rem;
  position: fixed;
  z-index: 15;
  background: none;
  border: none;
  &-bar {
    border-radius: 10px;
    width: 40px;
    height: 5px;
    background: $primary;
    margin-bottom: 5px;
    border: 1px solid $white;
    display: block;
    &:nth-last-of-type(1) {
        margin-bottom: 0;
      }
  }
}

#canvas {
  // position: relative;
  // width: 100%;
}

.shadow-primary-left {
  top: -35%;
  bottom: -10%;
  left: 0;
  right: -10%;
  background: linear-gradient(90deg, $secondary 0%, $secondary 25%, $primary 25%, $primary 100%);  ;
  clip-path: polygon(0 25%, 96% 0%, 93% 100%, 0% 80%);
  position: absolute;
  transform: skew(5deg, -7deg);
  transition: 0.2s linear;
}

</style>
