<template>
  <section id="section-project">
    <StrokeTitle title="Projects" orientantion-class="black-stroke-right" sepTitleId="proj-title" containerTitleId="proj-container-title"/>

    <div class="project-section section ">
      <div class="px-5 px-lg-5 pb-4 mx-0">
        <div class="row justify-content-end" id="projects-display">
          <a
            v-for="project in projects"
            :key="project.id"
            :id="`project-${project.id}`"
            class="pl-lg-1 col-lg-4 col-6 project"
            href="/"
          >
            <div class="shape-1"></div>
            <div class="shape-2"></div>
            <img
              :src="project.images[0].image"
              :alt="`${project.name} - ${project.subtitle}`"
              class="project-thumbnail"
            />
            <div class="project-overlay d-flex flex-column">
              <h2 class="project-name mt-4">{{ project.project_name }}</h2>
              <a href="/" class="project-name">View Project</a>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import StrokeTitle from "./StrokeTitle.vue"

export default {
  name: "ProjectSection",
  components: {
    StrokeTitle,
  },
  props: {
    projects: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
  data() {
    return {
      selectedProject: {},
      dblock: false,
      dnone: true,
      // projects: []
    };
  },
  methods: {
    showProject(project) {
      this.dblock = true;
      this.dnone = false;
      this.selectedProject = project;
    },
    closePopup() {
      this.dblock = false;
      this.dnone = true;
    },
  },
  //   mounted(){
  //   }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/_variables.scss";
@import url("https://fonts.googleapis.com/css2?family=Italiana&family=Roboto:wght@300&display=swap");

.project-section {
    position: relative;
    padding-top: 180px;
    padding-bottom: 180px;
    background: $primary;
}

.project {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  position: relative;
  width: 100%;
  padding-top: 30%;

  @media (min-width: 992px) {
    padding-top: 20%;
  }

  .project-thumbnail {
    z-index: 4;
  }

  &:hover {
    .project-overlay {
      animation: projectOverlayTitle 0.2s;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 10;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      text-align: center;
    }
  }

  .shape-1 {
    display: none;
    opacity: 0;
    z-index: 3;
    background: $black;
    position: absolute;
    top: -20%;
    bottom: -20%;
    left: -20%;
    right: -20%;
    pointer-events: none;
    animation: hoverSelection1 1s infinite;
  }
  .shape-2 {
    display: none;
    opacity: 0;
    z-index: 2;
    background: $primary;
    position: absolute;
    top: -20%;
    bottom: -20%;
    left: -20%;
    right: -20%;
    pointer-events: none;
    animation: hoverSelection2 1s infinite;
  }
  &:hover {
    .project-thumbnail {
      z-index: 6;
      animation: trumble 0.5s forwards;
    }

    .shape-1,
    .shape-2 {
      opacity: 1;
      display: block;
    }
    .shape-1 {
      z-index: 5;
    }
    .shape-2 {
      z-index: 5;
    }
  }
}

@keyframes projectOverlayTitle {
  0% {
    left: 300%;
    width: 300px;
  }
  100% {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
}

@keyframes trumble {
  0% {
    z-index: 6;
    transform: scale(1);
  }
  25% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1.05);
  }
}

@keyframes hoverSelection1 {
  0% {
    clip-path: polygon(
      38% 3%,
      71% 16%,
      99% 28%,
      89% 53%,
      87% 80%,
      59% 85%,
      29% 96%,
      19% 64%,
      3% 41%,
      8% 10%
    );
  }
  50% {
    clip-path: polygon(
      47% 15%,
      76% 3%,
      79% 40%,
      99% 76%,
      55% 79%,
      36% 98%,
      26% 70%,
      4% 60%,
      31% 40%,
      28% 22%
    );
  }
  100% {
    clip-path: polygon(
      38% 3%,
      71% 16%,
      99% 28%,
      89% 53%,
      87% 80%,
      59% 85%,
      29% 96%,
      19% 64%,
      3% 41%,
      8% 10%
    );
  }
}

@keyframes hoverSelection2 {
  0% {
    clip-path: polygon(
      31% 3%,
      55% 22%,
      92% 12%,
      75% 49%,
      86% 88%,
      50% 78%,
      13% 84%,
      24% 59%,
      1% 41%,
      34% 32%
    );
  }
  50% {
    clip-path: polygon(
      40% 21%,
      56% 12%,
      73% 30%,
      95% 71%,
      72% 80%,
      46% 74%,
      22% 84%,
      3% 57%,
      26% 40%,
      7% 15%
    );
  }
  100% {
    clip-path: polygon(
      31% 3%,
      55% 22%,
      92% 12%,
      75% 49%,
      86% 88%,
      50% 78%,
      13% 84%,
      24% 59%,
      1% 41%,
      34% 32%
    );
  }
}

.project-name {
  font-size: 18px;
  background: $black;
  color: $white;

  @media (max-width: 992px) {
    font-size: 22px;
  }
}

.project-subtitle {
  font-size: 12px;
  @media (max-width: 992px) {
    font-size: 16px;
  }
}

.project-thumbnail {
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  opacity: 1;
  transition: 0.7s;
  cursor: pointer;
}

.popup-bg {
  background: #191919bf;
}

.custom-popup {
  position: fixed;
  top: 65px;
  bottom: 40px;
  left: 24px;
  right: 24px;
  background-color: var(--bg-color);
  z-index: 1;
  @media (max-width: 992px) {
    left: 0px;
    right: 0px;
    padding: 10px;
  }
}

.popup-head-closing-button {
  cursor: pointer;
}
</style>
