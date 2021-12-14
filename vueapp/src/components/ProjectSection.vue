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
            <img :src="project.img[0]" :alt="`${project.name} - ${project.subtitle}`" class="project-thumbnail">
            <div class="w-100">
                <h2 class="project-name mt-4">{{project.name}}</h2>
                <p class="project-subtitle mt-2">{{project.subtitle}}</p>
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
  data() {
      return {
          projects : [
            {
                "id" : "1",
                "name" : "Project 1",
                "subtitle" : "Subtitle 1 - Something something whatever",
                "description": "blahj blah valsmkdasasj c asjdkas da jsk nvbsfjkv sdjkbf sdvjksd cfaj cj cfas",
                "img": [
                    "https://www.mydomaine.com/thmb/H_kdDUnp3OWKJZkIZ34sb_ZivHY=/1400x1004/filters:no_upscale():max_bytes(150000):strip_icc()/ScreenShot2019-09-11at9.11.50AM-ce5f668a225444bc8e38f7cea1d73c72.png",
                    "https://www.mydomaine.com/thmb/H_kdDUnp3OWKJZkIZ34sb_ZivHY=/1400x1004/filters:no_upscale():max_bytes(150000):strip_icc()/ScreenShot2019-09-11at9.11.50AM-ce5f668a225444bc8e38f7cea1d73c72.png",
                    "https://www.mydomaine.com/thmb/H_kdDUnp3OWKJZkIZ34sb_ZivHY=/1400x1004/filters:no_upscale():max_bytes(150000):strip_icc()/ScreenShot2019-09-11at9.11.50AM-ce5f668a225444bc8e38f7cea1d73c72.png",
                    "https://www.mydomaine.com/thmb/H_kdDUnp3OWKJZkIZ34sb_ZivHY=/1400x1004/filters:no_upscale():max_bytes(150000):strip_icc()/ScreenShot2019-09-11at9.11.50AM-ce5f668a225444bc8e38f7cea1d73c72.png"
                ]
            },
            {
                "id" : "1",
                "name" : "Project 1",
                "subtitle" : "Subtitle 1 - Something something whatever",
                "description": "blahj blah valsmkdasasj c asjdkas da jsk nvbsfjkv sdjkbf sdvjksd cfaj cj cfas",
                "img": [
                    "https://www.mydomaine.com/thmb/H_kdDUnp3OWKJZkIZ34sb_ZivHY=/1400x1004/filters:no_upscale():max_bytes(150000):strip_icc()/ScreenShot2019-09-11at9.11.50AM-ce5f668a225444bc8e38f7cea1d73c72.png",
                    "https://www.mydomaine.com/thmb/H_kdDUnp3OWKJZkIZ34sb_ZivHY=/1400x1004/filters:no_upscale():max_bytes(150000):strip_icc()/ScreenShot2019-09-11at9.11.50AM-ce5f668a225444bc8e38f7cea1d73c72.png",
                    "https://www.mydomaine.com/thmb/H_kdDUnp3OWKJZkIZ34sb_ZivHY=/1400x1004/filters:no_upscale():max_bytes(150000):strip_icc()/ScreenShot2019-09-11at9.11.50AM-ce5f668a225444bc8e38f7cea1d73c72.png",
                    "https://www.mydomaine.com/thmb/H_kdDUnp3OWKJZkIZ34sb_ZivHY=/1400x1004/filters:no_upscale():max_bytes(150000):strip_icc()/ScreenShot2019-09-11at9.11.50AM-ce5f668a225444bc8e38f7cea1d73c72.png"
                ]
            },
            {
                "id" : "2",
                "name" : "Project 2",
                "subtitle" : "Subtitle 2 - Something something whatever",
                "description": "blahj blah valsmkdasasj c asjdkas da jsk nvbsfjkv sdjkbf sdvjksd cfaj cj cfas",
                "img": ["https://www.mydomaine.com/thmb/H_kdDUnp3OWKJZkIZ34sb_ZivHY=/1400x1004/filters:no_upscale():max_bytes(150000):strip_icc()/ScreenShot2019-09-11at9.11.50AM-ce5f668a225444bc8e38f7cea1d73c72.png"]

            },
            {
                "id" : "3",
                "name" : "Project 2",
                "subtitle" : "Subtitle 3 - Something something whatever",
                "description": "blahj blah valsmkdasasj c asjdkas da jsk nvbsfjkv sdjkbf sdvjksd cfaj cj cfas",
                "img": ["https://www.mydomaine.com/thmb/H_kdDUnp3OWKJZkIZ34sb_ZivHY=/1400x1004/filters:no_upscale():max_bytes(150000):strip_icc()/ScreenShot2019-09-11at9.11.50AM-ce5f668a225444bc8e38f7cea1d73c72.png"]

            },
            {
                "id" : "4",
                "name" : "Project 4",
                "subtitle" : "Subtitle 1 - Something something whatever",
                "description": "blahj blah valsmkdasasj c asjdkas da jsk nvbsfjkv sdjkbf sdvjksd cfaj cj cfas",
                "img": ["https://www.mydomaine.com/thmb/H_kdDUnp3OWKJZkIZ34sb_ZivHY=/1400x1004/filters:no_upscale():max_bytes(150000):strip_icc()/ScreenShot2019-09-11at9.11.50AM-ce5f668a225444bc8e38f7cea1d73c72.png"]

            },
            {
                "id" : "5",
                "name" : "Project 6",
                "subtitle" : "Subtitle 1 - Something something whatever",
                "description": "blahj blah valsmkdasasj c asjdkas da jsk nvbsfjkv sdjkbf sdvjksd cfaj cj cfas",
                "img": ["https://www.mydomaine.com/thmb/H_kdDUnp3OWKJZkIZ34sb_ZivHY=/1400x1004/filters:no_upscale():max_bytes(150000):strip_icc()/ScreenShot2019-09-11at9.11.50AM-ce5f668a225444bc8e38f7cea1d73c72.png"]

            },
                        {
                "id" : "5",
                "name" : "Project 6",
                "subtitle" : "Subtitle 1 - Something something whatever",
                "description": "blahj blah valsmkdasasj c asjdkas da jsk nvbsfjkv sdjkbf sdvjksd cfaj cj cfas",
                "img": ["https://www.mydomaine.com/thmb/H_kdDUnp3OWKJZkIZ34sb_ZivHY=/1400x1004/filters:no_upscale():max_bytes(150000):strip_icc()/ScreenShot2019-09-11at9.11.50AM-ce5f668a225444bc8e38f7cea1d73c72.png"]

            },
                        {
                "id" : "5",
                "name" : "Project 6",
                "subtitle" : "Subtitle 1 - Something something whatever",
                "description": "blahj blah valsmkdasasj c asjdkas da jsk nvbsfjkv sdjkbf sdvjksd cfaj cj cfas",
                "img": ["https://www.mydomaine.com/thmb/H_kdDUnp3OWKJZkIZ34sb_ZivHY=/1400x1004/filters:no_upscale():max_bytes(150000):strip_icc()/ScreenShot2019-09-11at9.11.50AM-ce5f668a225444bc8e38f7cea1d73c72.png"]

            },
                        {
                "id" : "5",
                "name" : "Project 6",
                "subtitle" : "Subtitle 1 - Something something whatever",
                "description": "blahj blah valsmkdasasj c asjdkas da jsk nvbsfjkv sdjkbf sdvjksd cfaj cj cfas",
                "img": ["https://www.mydomaine.com/thmb/H_kdDUnp3OWKJZkIZ34sb_ZivHY=/1400x1004/filters:no_upscale():max_bytes(150000):strip_icc()/ScreenShot2019-09-11at9.11.50AM-ce5f668a225444bc8e38f7cea1d73c72.png"]

            }
            ,            {
                "id" : "5",
                "name" : "Project 6",
                "subtitle" : "Subtitle 1 - Something something whatever",
                "description": "blahj blah valsmkdasasj c asjdkas da jsk nvbsfjkv sdjkbf sdvjksd cfaj cj cfas",
                "img": ["https://www.mydomaine.com/thmb/H_kdDUnp3OWKJZkIZ34sb_ZivHY=/1400x1004/filters:no_upscale():max_bytes(150000):strip_icc()/ScreenShot2019-09-11at9.11.50AM-ce5f668a225444bc8e38f7cea1d73c72.png"]

            },
                        {
                "id" : "5",
                "name" : "Project 6",
                "subtitle" : "Subtitle 1 - Something something whatever",
                "description": "blahj blah valsmkdasasj c asjdkas da jsk nvbsfjkv sdjkbf sdvjksd cfaj cj cfas",
                "img": ["https://www.mydomaine.com/thmb/H_kdDUnp3OWKJZkIZ34sb_ZivHY=/1400x1004/filters:no_upscale():max_bytes(150000):strip_icc()/ScreenShot2019-09-11at9.11.50AM-ce5f668a225444bc8e38f7cea1d73c72.png"]

            },
                        {
                "id" : "5",
                "name" : "Project 6",
                "subtitle" : "Subtitle 1 - Something something whatever",
                "description": "blahj blah valsmkdasasj c asjdkas da jsk nvbsfjkv sdjkbf sdvjksd cfaj cj cfas",
                "img": ["https://www.mydomaine.com/thmb/H_kdDUnp3OWKJZkIZ34sb_ZivHY=/1400x1004/filters:no_upscale():max_bytes(150000):strip_icc()/ScreenShot2019-09-11at9.11.50AM-ce5f668a225444bc8e38f7cea1d73c72.png"]

            }
          ],
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
        console.log(this.selectedProject.id)
    },
    closePopup(){
          this.dblock = false
        this.dnone = true
        console.log("wrh")
        console.log(this.selectedProject.id)
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
