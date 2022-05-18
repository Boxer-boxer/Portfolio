<template>
  <div class="position-relative section main entry" id="entry">
    <!-- <canvas id="canvas-left" class="canvas-left"></canvas> -->
    <canvas id="canvas-right" class="canvas-right"></canvas>
    <div class="entry-div">
      <div class="main-title" id="main-title">
        <h1 class="">
          Jorge da Silva
        </h1>
        <div class="shadow-primary-left"></div>
      </div>
      <StrokeTitle title="Web Developer" orientantion-class="black-stroke" sepTitleId="entry-title" containerTitleId="entry-container-title"/>
    </div>
    
    <div class="main-content">
      <div class="responsive-background"></div>
    </div>
  </div>
</template>

<script>
import StrokeTitle from "./StrokeTitle.vue"

export default {
  name: 'EntrySection',
  components: {
    StrokeTitle
  },
  data() {
      return {
      }
  },
  methods: {
  },
  mounted() {
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "@/assets/_variables.scss";
@import url('https://fonts.googleapis.com/css2?family=Monoton&family=Raleway&display=swap');

@font-face {
  font-family: "Personalized";
  src: local("PersonifiedUXRegular"),   url(../assets/Fonts/PersonifiedUXRegular.ttf) format("truetype");
}
@font-face {
  font-family: "AvantGarde";
  src: local("AvantGarde"),   url(../assets/Fonts/AvantGarde.ttf) format("truetype");
}
@font-face {
  font-family: "Clarendon";
  src: local("Clarendon"),   url(../assets/Fonts/Clarendon.ttf) format("truetype");
}
@font-face {
  font-family: "CooperBlack";
  src: local("CooperBlack"),   url(../assets/Fonts/CooperBlack.ttf) format("truetype");
}
@font-face {
  font-family: "FuturaBold";
  src: local("FuturaBold"),   url(../assets/Fonts/FuturaBold.ttf) format("truetype");
}
@font-face {
  font-family: "HelveticaNow";
  src: local("HelveticaNow"),   url(../assets/Fonts/HelveticaNow.ttf) format("truetype");
}
@font-face {
  font-family: "NotoSans-BoldItalic";
  src: local("NotoSans-BoldItalic"),   url(../assets/Fonts/NotoSans-BoldItalic.ttf) format("truetype");
}

.font-avant-garde {
  font-family: AvantGarde;
}
.font-clarendon {
  font-family: Clarendon;
}
.font-cooper-black {
  font-family: CooperBlack;
}
.font-futura-bold {
  font-family: FuturaBold;
}
.font-helvetica-now {
  font-family: HelveticaNow;
}
.font-noto-sans {
  font-family: NotoSans-BoldItalic
}

.main {
  height: 100vh;
  font-family: Personalized;
}

.entry-div {
  position: relative;
  top: 65%;
  height: 7rem;
}

.main-title {
  top: -15%;
  left: 30%;
  position: absolute;
  text-transform: uppercase;
  margin-bottom: 0;
  pointer-events: all;
  transition: 0.2s linear;
  font-family: Personalized;
  z-index: 10;
  
  @media (max-width: 1200px) {
    left: 25%;
  }

  &-out {
    left: 200%
  }
  &:hover {
    .shadow-primary-left {
      clip-path: polygon(0 17%, 100% 0%, 95% 100%, 0% 85%);
      transition: 0.1s liner;
    }
  }

  h1 {
    margin-bottom: 0;
    z-index: 1;
    font-family: Personalized , sans-serif;
    color: #000;
    background: #fff;
    padding: 3px 6px 2px 5px;
    position: relative;
    // -webkit-clip-path: polygon(0 0, 100% 0, 98% 100%, 0% 100%);
    // clip-path: polygon(0 0, 100% 0, 98% 100%, 0% 100%);
    transform: skew(5deg, -7deg);
    pointer-events: none;
    color: $white;
    background: $black;
    border: 3px solid $white;
    font-size: 32px;
    white-space: nowrap;
  }
}

.sep-title {
    top: 25%;
    right: 6%;
    // right: this.moveRightValie
    position: absolute;
    text-transform: uppercase;
    margin-bottom: 0;
    pointer-events: all;
    white-space: nowrap;
    // transition: 0.1s liner;
    transition: 0.2s linear;
    -webkit-backface-visibility: hidden;

    &-out {
      right: 200%
    }
    h1 {
      margin-bottom: 0;
      z-index: 1;
      font-family: "Monoton", sans-serif;
      color: $white;
      overflow: hidden;
      padding: 7px 7px 2px 7px;
      position: relative;
      pointer-events: none;
      font-size: 70px;
      letter-spacing: -2px;

      // &:after {
      //   content: "Web Developer";
      //   position: absolute;
      //   left: -300%;
      //   bottom: 0;
      //   z-index: -1;
      //   color: $secondary;
      //   transition: 0.2s linear;
      // }
    }
}

@keyframes tilt {
  0% {
    transform: skew(5deg, -20deg);
  }
  25% {
    transform: skew(5deg, -21.5deg);
  }
  50% {
    transform: skew(5deg, -20deg);
  }
  75% {
    transform: skew(5deg, -19.5deg);
  }
  100% {
    transform: skew(5deg, -20deg);
  }
}

.responsive-background {
  @media (max-width: 1200px) {
    background-repeat: repeat;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-position: center;
    background-size: 5%;
    clip-path: polygon(55% 0, 100% 0%, 100% 100%, 0% 100%);
    background-image: url("../../../media/images/tile.png");
    z-index: 0;
  }
}

.canvas-left {
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0;
  // background: $primary;
  // clip-path: polygon(0% 0%, 190% 0%, 100% 100%, 0px 100%);
}

.canvas-right {
  position: absolute;
  right: 0;
  bottom: 0;
  top: 0;
  background: 
  linear-gradient(290deg, $secondary 0%, $secondary 55%, $black 25%, $black 75%, $primary 75%);
  height: 100%;
  width: 100%;
}

.main-content {
  pointer-events: none;
  width: 100%;
  height: 100%;
}

</style>
