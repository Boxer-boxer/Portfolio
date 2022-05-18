<template>
  <div class="menu-main">
    <div class="relative-menu">
      <div class="transition-div-1"></div>
      <div class="transition-div-2"></div>
      <div class="transition-div-3"></div>

      <div class="menu">
        <ul>
          <li data-to="section-project close-menu" 
              class="navbar-item" 
              v-on:click="closeMenu">
            <span 
              class="wack-style" 
              data-to="section-project" 
              data-content="Project"
            >
            </span>
          </li>
          <li 
            data-to="section-experience close-menu" 
            class="navbar-item" 
            v-on:click="closeMenu">
            <span class="wack-style" data-to="section-experience" data-content="Experience"></span>
          </li>
          <li 
            data-to="section-about-me close-menu" 
            class="navbar-item" 
            v-on:click="closeMenu">
            <span class="wack-style" data-to="section-about-me" data-content="About Me"></span>
          </li>
          <li 
            data-to="section-contact-me close-menu" 
            class="navbar-item" 
            v-on:click="closeMenu">
            <span class="wack-style" data-to="section-contact-me" data-content="Contact Me"></span>
          </li>
        </ul>
        
        <button class="close-menu close-menu-button"  v-on:click="closeMenu">x</button>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import toggle from '../mixins/toggle'

export default {
  name: "HelloWorld",
  mixins: [toggle],
  props: {
    msg: String,
  },
  mounted(){
    this.activateItem();
  },
  methods: {
    closeMenu(e) {
      this.toggle($(".menu-main"), "down", "active");
      this.toggle($(".menu"), "down", "active");
      this.toggle($(".transition-div-1"), "transition-1-out", "transition-1");
      this.toggle($(".transition-div-2"), "transition-2-out", "transition-2");
      this.toggle($(".transition-div-3"), "transition-3-out", "transition-3");

      var element = document.getElementById(e.target.parentElement.dataset.to);
      if (element) {
        var top = element.offsetTop;
        window.scrollTo(0, top);
      }
    },
    activateItem() {
      $('.navbar-item').hover(
      function(){
        $(this).addClass('active')
      },
      function(){
        $(this).removeClass('active')
      })
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/_variables.scss";

.menu-main {
  overflow: hidden;
  position: fixed;
  z-index: 20;
  pointer-events: none;

  &.active {
    height: 100vh;
  }
}

.relative-menu {
  z-index: 1;
  height: 100vh;
  width: 100vw;
  position: relative;
}

.close-menu-button {
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 10;
  cursor: pointer;
  border: none;
  background: none;
  font-size: 50px;
  height: 50px;
  color: $white;
  display: flex;
  align-items: center;
  justify-content: center;

  &:before{
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: -1;
    background: $black;
    transform: rotate(-11deg);
  }
  
  &:after{
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: -1;
    background: $primary;
    transform: rotate(11deg);
  }
}

.menu {
  position: absolute;
  top: 0;
  bottom: 0;
  opacity: 0;
  z-index: -10;
  background: $secondary;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 50px;
  ul {
    li {
      list-style-type: none;
      text-decoration: none;
      color: $white;
      cursor: pointer;

      span {
        color: $white;
        font-size: 50px;
      }
    }
  }
}

.navbar-item {
  transition: 0.2s linear;
  position: relative;
  margin-bottom: 1rem;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: $black;
    transform: rotate(5deg);
    z-index: -1;
  }
  &.active {
    &:after {
      content: "";
      position: absolute;
      background: $primary;
      left: -50px;
      right: 0;
      top: 0;
      bottom: 0;
      z-index: -1;
      clip-path: polygon(0% 0%, 75% 0, 100% 100%, 15% 100%);
      animation: wobble 2s infinite;
    }
  }
}

@keyframes wobble {
  0% {
    transform: rotate(5deg);
  }
  50% {
    transform: rotate(-5deg);
  }
  100% {
    transform: rotate(5deg);
  }
}

.menu.active {
  position: fixed;
  z-index: 200;
  animation: showup 1s ease 1s forwards;
  pointer-events: all;

}

.menu.down {
  animation: showdown 1s ease forwards;
}

.transition-div-1,
.transition-div-2,
.transition-div-3 {
  position: absolute;
  top: 0;
  right: 0;
  border-left: 0px solid transparent;
  border-right: 0px solid transparent;
  z-index: 9;
}

.transition-1 {
  border-top: 0 solid $black;
  animation: gradient 3s ease forwards;
}
.transition-2 {
  border-top: 0 solid $secondary;
  animation: gradient-2 2.5s ease 0.15s forwards;
}
.transition-3 {
  border-top: 0 solid $primary;
  animation: gradient 2s ease 0.35s forwards;
}

.transition-1-out {
  border-top: 5000px solid $black;
  border-left: 5000px solid transparent;
  animation: gradient-out 2s ease 0.35s forwards;
}
.transition-2-out {
  border-top: 5000px solid $secondary;
  border-left: 5000px solid transparent;
  animation: gradient-out-2 2s ease 0.15s forwards;
}
.transition-3-out {
  border-top: 5000px solid $primary;
  border-left: 5000px solid transparent;
  animation: gradient-out 2s ease forwards;
}

@keyframes showup {
  0% {
    opacity: 1;
    z-index: 200;
    left: 100%;
  }
  100% {
    left: 0%;
    opacity: 1;
    z-index: 200;
  }
}

@keyframes showdown {
  0% {
    left: 0%;
    opacity: 1;
    z-index: 200;
  }
  80% {
    left: 100%;
    opacity: 1;
    z-index: 200;
  }
  100% {
    left: 100%;
    opacity: 0;
    z-index: -10;
  }
}

@keyframes gradient {
  100% {
    border-top: 5000px solid $black;
    border-left: 5000px solid transparent;
  }
}

@keyframes gradient-2 {
  100% {
    border-top: 5000px solid $secondary;
    border-left: 5000px solid transparent;
  }
}

@keyframes gradient-out {
  100% {
    border-top: 0px solid $black;
    border-left: 0px solid transparent;
  }
}

@keyframes gradient-out-2 {
  100% {
    border-top: 0px solid $secondary;
    border-left: 0px solid transparent;
  }
}
</style>
