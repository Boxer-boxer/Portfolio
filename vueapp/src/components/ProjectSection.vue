<template>
  <div class="project-section px-5 px-lg-5 py-4 mx-0">
    <div class="row justify-content-end">
        <div class="col-lg-2"></div>
        <div v-for="project in projects"
                    :key="project.id"
                    :id="`project-${project.id}`"
                    class="col-lg-2 pl-lg-1 col-md-6 col-12 mb-4 project"
                    data-toggle="modal" 
                    :data-target="`#ModalProject${project.id}`"
                    v-on:click="showProject(project)">
            <img :src="project.images[0].image" :alt="`${project.name} - ${project.subtitle}`" class="project-thumbnail">
            <div class="w-100">
                <h2 class="project-name mt-4">{{project.project_name}}</h2>
                <p class="project-subtitle mt-2">{{project.project_subtitle}}</p>
            </div>
        </div> 
        

        <div ref="customPopup" :class="{'d-block': dblock, 'd-none' : dnone, 'popup-bg': 'popup-bg'}">
            <div class="custom-popup d-flex flex-column container">
                <div class="popup-head d-flex justify-content-end ">
                    <div class="popup-head-closing-button py-2" v-on:click="closePopup">x</div>
                </div>
               <ProjectPopup :selectedProject="selectedProject" />
            </div>

        </div>

    </div>
  </div>
</template>

<script>
import ProjectPopup from './ProjectPopup.vue'

export default {
  name: 'ProjectSection',
  components: {
      ProjectPopup
  },
  props: {
    projects: {
        type: Array,
        default: function () {
          return [ ]
      }
    }
  },
  data() {
      return {
        selectedProject: {},
        dblock: false,
        dnone: true
      }
  },
  methods: {
    showProject(project) {
        this.dblock = true
        this.dnone = false
        this.selectedProject = project
    },
    closePopup(){
        this.dblock = false
        this.dnone = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Italiana&family=Roboto:wght@300&display=swap');
.project { 
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: left;

    &:hover {
        .project-thumbnail {
            opacity: 1;
        }
    }
}

.project-name {
    font-size: 18px;
}

.project-subtitle {
    font-size: 12px;
}

.project-thumbnail {
    width: 100%;
    height: 400px;
    object-fit: cover;
    opacity: 0.3;
    transition: 0.7s;
    cursor: pointer;

    @media (max-width: 900px) {
        width: 100%;
        height: auto;
    }
}

.popup-bg {
    background: #191919bf
}

.custom-popup {
    position: fixed;
    top: 65px;
    bottom: 40px;
    left: 24px;
    right: 24px;
    background-color: var(--bg-color);
    z-index: 1;
    @media (max-width: 768px){
        left: 0px;
        right: 0px;
    }
}

.popup-head-closing-button {
    cursor: pointer;
}
</style>
