<template>
  <section id="section-about-me">
    <StrokeTitle title="A little about me" orientantion-class="black-stroke-right" sepTitleId="about-title" containerTitleId="about-container-title"/>
    
    <div class="about-me-section section">
      <div class="about-me-container">
        <div class="row h-100 w-100">
          <div class="col-12 col-lg-8 d-flex justify-content-center align-items-center px-5">
            <div class="speech-balloon-container">
              <div class="speech-balloon" v-html="aboutme.content">
              </div>
              <div class="speech-balloon-shadow"></div>
            </div>
          </div>
          <div class="col-12 col-lg-4 d-flex align-items-end justify-content-center">
            <div class="portrait-container">
              <img :src="aboutme.image" class="portrait img-fluid" alt="">
              <div class="portrait-curtain">
                <img :src="aboutme.image_shadow" class="portrait-overlay img-fluid" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import $ from "jquery";
import _ from "underscore";
import StrokeTitle from "./StrokeTitle.vue"

export default {
  name: 'AboutMeSection',
  components: {
    StrokeTitle,
  },
  props: {
    aboutme: {
      type: Object,
      default: function() {
        return {}
      }
    }
  },
  data() {
    return {
      portraitInView: false
    };
  },
  mounted(){
     $(window).on('scroll', () => {
        _.debounce(
          this.checkPortraitPosition(document.getElementsByClassName('portrait-container'),".portrait-curtain", "active"),
        1000),
        this.activatePortrait ()
    });
  },
  methods: {
    checkPortraitPosition(elements, target) {
      var self = this;

      [].forEach.call(elements, (each) => {
        let el = each.querySelector(target);
        if(el != null) {
          var rect = el.getBoundingClientRect();
          let detectionMargin = 200;
          let withinView = rect.top >= 0 && (rect.bottom - detectionMargin ) <= (window.innerHeight || document.documentElement.clientHeight);
          
          self.portraitInView = withinView;
        }
      })
    },
    activatePortrait() {
      var self = this;
      
      if(self.portraitInView) {
        $('.portrait-curtain').addClass('active');
      } else {
        $('.portrait-curtain').removeClass('active');
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Italiana&family=Roboto:wght@300&display=swap');
@import "@/assets/_variables.scss";

.about-me-section {
  padding-top: 180px;
  background: linear-gradient(290deg, $primary 22%, $secondary 22%, $secondary 23%, $black 23%)
}
.about-me-container {
  height: auto;
  display: block;
  position: relative;
  .portrait-container {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    
    .portrait-curtain { 
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      overflow: hidden;
      animation: curtain-up 1s forwards; 

      &.active {
        animation: curtain-down 2s forwards; 
      }
    }
  }
  .portrait {
    filter: drop-shadow(1px 1px 0 black)
    drop-shadow(-10px 0px 0px $secondary);
    width: 250px;
  }
  .portrait-overlay {
    position: absolute;
    z-index: 10;
    width: 250px;
  }
}

@keyframes curtain-up {
  0% {
    top: 100%;
    bottom: 0;
  }
  100% {
    top: 0;
    bottom: 0;
  }
}

@keyframes curtain-down {
  0% {
    top: 0;
    bottom: 0;
  }
  100% {
    top: 100%;
    bottom: 0;
  }
}

.speech-balloon {
    background: black;
    color: #fff;
    position: relative;
    padding: 8em;
    -webkit-clip-path: polygon(9% 7%, 20% 14%, 49% 7%, 70% 12%, 84% 7%, 85% 23%, 82% 35%, 100% 37%, 81% 52%, 88% 65%, 84% 77%, 79% 87%, 56% 87%, 34% 81%, 25% 88%, 5% 88%, 11% 63%, 3% 40%, 11% 27%);
    clip-path: polygon(10% 5%, 22% 3%, 56% 2%, 69% 2%, 87% 7%, 90% 23%, 90% 34%, 100% 37%, 90% 59%, 88% 66%, 84% 77%, 79% 92%, 63% 95%, 49% 94%, 25% 97%, 16% 96%, 6% 85%, 2% 66%, 2% 42%, 4% 24%);
    z-index: 1;
    
    @media (max-width: 1200px) {
      clip-path: polygon(6.88% 8.28%, 22% 3%, 44.38% 1%, 69% 2%, 88.88% 5.18%, 95.63% 16.54%, 98% 29%, 99% 45.92%, 98.5% 61.09%, 98.63% 70.28%, 94.00% 83.82%, 79% 92%, 49.25% 95.45%, 49.13% 104.19%, 39.38% 95.82%, 16% 96%, 6% 85%, 2% 66%, 2% 42%, 4% 24%);
      padding: 3em;
      font-size: 30px;
    }

    &-container {
      height: auto;
      width: 100%;
      position: relative;
      margin-bottom: 5rem;
    }
    &-shadow {
      position: absolute;
      content: "";
      top: -10px;
      bottom: -10px;
      left: -10px;
      right: -10px;
      z-index: 0;
      background: $primary;
      animation: speechBubble 2s infinite;
      @media (max-width: 1200px) {
        animation: speechBubbleResponsive 2s infinite;
      }
    }
}

@keyframes speechBubble {
  0% {
    -webkit-clip-path: polygon(10% 5%, 22% 3%, 56% 2%, 69% 2%, 87% 7%, 90% 23%, 90% 34%, 100% 37%, 90% 59%, 88% 66%, 84% 77%, 79% 92%, 63% 95%, 49% 94%, 25% 97%, 16% 96%, 6% 85%, 2% 66%, 2% 42%, 4% 24%);
      clip-path: polygon(10% 5%, 22% 3%, 56% 2%, 69% 2%, 87% 7%, 90% 23%, 90% 34%, 100% 37%, 90% 59%, 88% 66%, 84% 77%, 79% 92%, 63% 95%, 49% 94%, 25% 97%, 16% 96%, 6% 85%, 2% 66%, 2% 42%, 4% 24%);    
  }
  50% {
    -webkit-clip-path: polygon(11% 6%, 23% 4%, 57% 3%, 70% 3%, 88% 8%, 91% 24%, 91% 35%, 101% 38%, 91% 60%, 89% 67%, 85% 78%, 80% 93%, 64% 96%, 50% 95%, 26% 98%, 17% 97%, 7% 86%, 3% 67%, 3% 43%, 5% 25%);
      clip-path: polygon(11% 6%, 23% 4%, 57% 3%, 70% 3%, 88% 8%, 91% 24%, 91% 35%, 101% 38%, 91% 60%, 89% 67%, 85% 78%, 80% 93%, 64% 96%, 50% 95%, 26% 98%, 17% 97%, 7% 86%, 3% 67%, 3% 43%, 5% 25%);    
  }
  100% {
    -webkit-clip-path: polygon(10% 5%, 22% 3%, 56% 2%, 69% 2%, 87% 7%, 90% 23%, 90% 34%, 100% 37%, 90% 59%, 88% 66%, 84% 77%, 79% 92%, 63% 95%, 49% 94%, 25% 97%, 16% 96%, 6% 85%, 2% 66%, 2% 42%, 4% 24%);
      clip-path: polygon(10% 5%, 22% 3%, 56% 2%, 69% 2%, 87% 7%, 90% 23%, 90% 34%, 100% 37%, 90% 59%, 88% 66%, 84% 77%, 79% 92%, 63% 95%, 49% 94%, 25% 97%, 16% 96%, 6% 85%, 2% 66%, 2% 42%, 4% 24%);    
  }
}
@keyframes speechBubbleResponsive {
  0% {
    clip-path: polygon(7.88% 9.28%, 23% 4%, 45.38% 2%, 70% 3%, 89.88% 6.18%, 96.63% 17.54%, 99% 30%, 100% 46.92%, 99.5% 62.09%, 99.63% 71.28%, 95.00% 84.82%, 80% 93%, 50.25% 96.45%, 50.13% 105.19%, 40.38% 96.82%, 17% 98%, 7% 86%, 3% 67%, 3% 43%, 5% 25%);
  }
  50% {
    clip-path: polygon(5.88% 6.28%, 20% 2%, 42.38% 0%, 68% 1%, 87.88% 5.18%, 94.63% 15.54%, 98% 29%, 98% 45.92%, 97.5% 60.09%, 97.63% 69.28%, 93.00% 82.82%, 78% 90%, 48.25% 94.45%, 49.13% 104.19%, 38.38% 94.82%, 15% 96%, 5% 84%, 1% 65%, 1% 41%, 2% 23%);
  }
  100% {
    clip-path: polygon(7.88% 9.28%, 23% 4%, 45.38% 2%, 70% 3%, 89.88% 6.18%, 96.63% 17.54%, 99% 30%, 100% 46.92%, 99.5% 62.09%, 99.63% 71.28%, 95.00% 84.82%, 80% 93%, 50.25% 96.45%, 50.13% 105.19%, 40.38% 96.82%, 17% 98%, 7% 86%, 3% 67%, 3% 43%, 5% 25%);
  }
}

.contact-subtitle {
  font-size: 12px;
  margin: 4px;
  line-height: 12px;
  display: flex;
  align-content: center;
  justify-content: flex-start;
  color: var(--color);
  text-decoration: none;
  @media (max-width: 992px) {
    font-size: 22px;
    .material-icons {
        font-size: 22px;
    }
  }
}

</style>
