<template>
    <div class="h-100">
        <div class="popup-body container">
            <div class="row h-100">
                <div class="col-12 px-0 col-md-4 pr-4 d-flex justify-content-end flex-column text-left align-items-end">
                    <h2>{{selectedProject.title}}</h2>
                    <h4>{{selectedProject.subtitle}}</h4>
                    <p>{{selectedProject.description}}</p>
                </div>
                <div class="col-12 px-0 col-md-8 d-flex align-items-center justify-content-center">
                    <slider animation="fade" class="popup-slider">
                        <slider-item
                            v-for="(i, index) in selectedProject.img"
                            :key="index"
                            :style="i"
                        >
                        <img :src="i" :alt="selectedProject.description" class="img-fluid">
                        </slider-item>
                    </slider>
                </div>
            </div>
        </div>
        <div class="popup-footer d-flex align-items-center justify-content-start">
            <span class="material-icons mr-2">email</span>
            <span class="material-icons">phone</span>
        </div>
    </div> 
</template>

<script>
import { Slider, SliderItem } from 'vue-easy-slider'

export default {
  name: 'ProjectPopUp',
  components: {
    Slider,
    SliderItem,
  },
  props: {
    selectedProject: {
        type: Object,
        default: function () {
            return { }
        }
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.popup-slider {
    width: 100% !important;
    height: 100% !important;
    min-height: 300px;
    max-width: 100%;
}
.slider-item {
    height: auto!important;
}
.popup-footer {
    height: 15%;
}
.popup-body {
    height: 85%;
}
</style>
