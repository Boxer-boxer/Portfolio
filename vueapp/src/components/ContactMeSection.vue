<template>
  <section id="section-about-me">
    <StrokeTitle title="Contact me!" orientantion-class="black-stroke" sepTitleId="contact-me-title" containerTitleId="contact-me-container-title"/>
    <div class="row mx-0">
      <div class="col-12 col-lg-6 bg-black d-flex align-items-end justify-content-center mt-5">
        <div class="d-flex align-items-center flex-column justify-content-center" style="height:500px">
          <a href="https://github.com/Boxer-boxer" class="contact-me-icon mb-4">
            <img src="../../../media/images/github.png" alt="Github Logo">
          </a>

          <a href="https://www.linkedin.com/in/jorge-da-silva-3b10b2b5/" class="contact-me-icon">
            <img src="../../../media/images/linkedin.png" alt="LinkedIn Logo">
          </a>
        </div>
      </div>
      <div class="col-12 col-lg-6 bg-primary d-flex align-items-end">
        <div class="d-flex align-items-start flex-column justify-content-center px-4" style="height:500px">
          <div class="d-flex flex-column contact-info mb-4">
            <span class="wack-style" data-content="Phone:"></span>
            <a href="tel:437-249-0850" class="contact-info-span">+1 437-249-0850</a>
          </div>

          <div class="d-flex flex-column contact-info">
            <span class="wack-style" data-content="E-mail:"></span>
            <a href="mailto:jorgedasilvarodrigues92@gmail.com" class="contact-info-span">jorgedasilvarodrigues92@gmail.com</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import $ from "jquery";
// import _ from "underscore";
import StrokeTitle from "./StrokeTitle.vue"

export default {
  name: 'ContactMe',
  components: {
    StrokeTitle,
  },
  props: {
    // aboutme: {
    //   type: Object,
    //   default: function() {
    //     return {}
    //   }
    // }
  },
  data() {
    return {
      // portraitInView: false
    };
  },
  mounted(){

  },
  methods: {
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// @import url('https://fonts.googleapis.com/css2?family=Italiana&family=Roboto:wght@300&display=swap');
@import "@/assets/_variables.scss";

.contact-me-icon {
  // background: $white;
  max-height: 150px;
  position: relative;
  
  &:after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: white;
    z-index: 0;
    transform: skew(-70deg, -20deg);
    transition: 0.1s linear;
    border-radius: 50%;
  }

  img {
    height: 100%;
    object-fit: contain;
    z-index: 2;
    position: relative;
  }

  &:hover {
    &:after {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: white;
      z-index: 0;
      transform: skew(0deg, 0deg);
      border-radius: 50%;
    }
  }
}

.contact-info {
  color: $white;
 
  .wack-style {
    font-size: 40px;
  }

  &-span {
    background: $black;
    color: $white;
    text-decoration: none;
    margin-top: -.5rem;
    margin-left: 1rem;
    margin-bottom: 1rem;
    padding: .5rem;
  }
}

</style>
