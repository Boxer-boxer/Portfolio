<template>
    <div class="custom-popup d-flex flex-column">
        <div class="popup-head d-flex justify-content-end p-4">
            <div class="popup-head-closing-button" v-on:click="closePopup">x</div>
        </div>
        <div class="popup-body container h-100">
            <div class="row h-100">
                <div class="col-12 col-lg-4 d-flex justify-content-end flex-column text-left align-items-end">
                    <h2>{{project.title}}</h2>
                    <h4>{{project.subtitle}}</h4>
                    <p>{{project.description}}</p>
                </div>
                <div class="col-12 col-lg-8 d-flex align-items-center justify-content-center">
                    <slider animation="fade">
                        <slider-item
                            v-for="(i, index) in project.img"
                            :key="index"
                            :style="i"
                        >
                        </slider-item>
                    </slider>
                    <!-- <img :src="" :alt="project.description" class="img-fluid"> -->
                </div>
            </div>
        </div>
        <div class="popup-footer p-4 d-flex justify-content-start">
            <span class="material-icons mr-2">email</span>
            <span class="material-icons">phone</span>
        </div>
    </div> 
</template>

<script>
import { Slider, SliderItem } from 'vue-easy-slider'

export default {
  name: 'Project Pop-up',
  components: [
    Slider,
    SliderItem,
  ],
  props: {
    project: {
        type: Object,
        default: function () {
            return { project: '' }
        }
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
