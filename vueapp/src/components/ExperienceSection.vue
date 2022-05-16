<template>
  <section id='section-experience'>
    <StrokeTitle title="Experience" orientantion-class="black-stroke" sepTitleId="exp-title" containerTitleId="exp-container-title"/>

    <div class="experience-section section">
      <div class="code-background">
      </div>

<!--       
      <div class="position-relative stroke-container">
        <div class="black-stroke-right z-index-0">
        </div>
      </div> -->

      <div class="experience-display px-5 px-lg-5 mx-0 row">
        <ul class="text-white col-12 col-xl-6 d-flex justify-content-center align-items-start flex-column">
          <li v-for="exp in experience" :key="exp.name" class="list-unstyled mb-6 exp w-100"> 
            <h5 class="text-white exp-name"> {{exp.name}} </h5>
            <span class="bg-black p-2 exp-job">{{exp.job}} - {{exp.start_date}} to {{exp.end_date}}</span>
          </li>
        </ul>
        <div class="col-12 col-xl-6 d-flex flex-wrap justify-content-center">
          <div class="m-2 language" v-for="language in languages" :key="language.name"> 
            <div class="language-div bg-black">
              <img :src="language.image" :alt="language.name" style="max-width: 200px;">
              <span class="h5 text-white">{{language.name}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import StrokeTitle from "./StrokeTitle.vue"

export default {
  name: "ExperienceSection",
  components: {
    StrokeTitle,
  },
  props: {
    experience: {
      type: Array,
      default: function () {
        return [];
      },
    },
    languages: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
  data() {
    return {
    };
  },
  mounted(){
  },
  methods: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/_variables.scss";

  .experience-section {
    position: relative;

    .experience-display{ 
      padding: 200px 0;
    }
    .code-background {
      pointer-events: none;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      background-image: url("/media/images/code-background.PNG");
      background-position: center;
      z-index: -5;
      // background-attachment: fixed;

      &-text {
        text-align: right;
        opacity: 0.6;
        color: #ffffff;
        text-shadow: 1px 1px $primary;
        font-size: 40px;
      }
    }
    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background: $secondary;
      z-index: -1;
      pointer-events: none;
      animation: wave 2s infinite;

    }
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background: $primary;
      z-index: -1;
      pointer-events: none;
      clip-path: polygon(90% 0, 76% 30%, 89% 49%, 70% 75%, 95% 100%, 0 100%, 0 0);
      animation: wave-2 2s infinite;

    }
    .stroke-container {
      padding-bottom: 320px;
    }

    .black-stroke {
      top: 10%;
      // z-index: 15;
      &-right {
        z-index: 0;
        top: -20%;  
      }
    }
    .language {
      width: 47%;
      &:hover {
        .language-div {
          animation-name: hover-beat;
          animation-delay: 0s;
          animation-duration: 0.2s;
          animation-fill-mode: forwards;
        }
      }
      .language-div {
        display: flex;
        flex-direction: column;
        background: $black;
        align-items: center;
        justify-content: center;
        padding: 15px 20px;
        position: relative;
        
      }
    }
    
    @keyframes wave {
      0% {
        clip-path: polygon(86% 0, 71% 32%, 85% 49%, 66% 75%, 94% 100%, 0 100%, 0 0);
      }
      50% {
        clip-path: polygon(83% 0, 68% 32%, 81% 49%, 62% 75%, 84% 100%, 0 100%, 0 0);
      }
      100% {
        clip-path: polygon(86% 0, 71% 32%, 85% 49%, 66% 75%, 94% 100%, 0 100%, 0 0);
      }
    }

    @keyframes wave-2 {
      0% {
        clip-path: polygon(90% 0%, 78% 30%, 86% 49%, 75% 75%, 91% 100%, 0 100%, 0 0);
      }
      50% {
        clip-path: polygon(88% 0, 76% 30%, 89% 49%, 70% 75%, 95% 100%, 0 100%, 0 0);
      }
      100% {
        clip-path: polygon(90% 0%, 78% 30%, 86% 49%, 75% 75%, 91% 100%, 0 100%, 0 0);
      }
    }
    
    @keyframes hover-beat {
      0% {
        transform: skewX(10deg);
      }
      50% {
        transform: skewX(12deg);
      }
      100% {
        transform: skewX(0deg);
      }
    }

    .exp {
      position: relative;
      &::after {
        content: " ";
        position: absolute;
        left: 100%;
        transition: 0.2s linear;
        top: -20px;
        bottom: 0;
        right: 0;
        z-index: 0;
        transform: rotate(5deg);
        clip-path: polygon(0 0, 100% 13%, 100% 54%, 0% 100%);
      }
      &:hover {
        &::after {
          content: " ";
          background: $primary;
          position: absolute;
          top: -20px;
          bottom: 0;
          left: -10em;
          right: 0;
          z-index: 0;
          transform: rotate(5deg);
          clip-path: polygon(0 0, 100% 13%, 100% 54%, 0% 100%);
        }
      }
    }

    .exp-job {
      transform: skew(-15deg) rotate(-10deg);
      display: block;
      clip-path: polygon(0 25%, 96% 0%, 93% 100%, 0% 80%);
      background: $black;
      z-index: 1;
      position: relative;
      max-width: 24em;
    }

    .exp-name {
      display: block;
      transform: rotate(2deg);
      width: 100px;
      position: absolute;
      z-index: 10;
      text-shadow: 2px 0px $primary, 2.5px 0px $white;
      z-index: 10;
      width: 100%;
    }
  }
</style>
