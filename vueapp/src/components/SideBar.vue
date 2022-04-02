<template>
  <div class="menu-main">
    <div class="relative-menu">
      <div class="transition-div-1"></div>
      <div class="transition-div-2"></div>
      <div class="transition-div-3"></div>

      <div class="menu">
        <ul>
          <li>A</li>
          <li>B</li>
          <li>C</li>
          <button class="close-menu"  v-on:click="closeMenu">Close menu</button>
        </ul>
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
  methods: {
    closeMenu() {
      this.toggle($(".menu-main"), "down", "active");
      this.toggle($(".menu"), "down", "active");
      this.toggle($(".transition-div-1"), "transition-1-out", "transition-1");
      this.toggle($(".transition-div-2"), "transition-2-out", "transition-2");
      this.toggle($(".transition-div-3"), "transition-3-out", "transition-3");
      // this.toggle($("#canvas"), "z-index-1", "z-index-0");
    }
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
  border-top: 0 solid $black;
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
  border-top: 5000px solid $black;
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
