<template>
    <div class="h-100">
        <div class="popup-body container">
            <div class="row h-100">
                <div class="col-12 px-0 position-relative col-md-4 pr-4 d-flex justify-content-end flex-column text-left align-items-end">
                   
                    <div class="text-description-container pr-4">
                        <p class="text-right" v-html="selectedProject.project_description"></p>
                    </div>
                </div>
                <div class="col-12 px-0 position-relative col-md-8 d-flex align-items-center justify-content-center">
                    <slider animation="fade" class="popup-slider">
                        <slider-item
                            v-for="(i, index) in selectedProject.images"
                            :key="index"
                            :style="i"
                        >
                            <img :src="i.image" :alt="i.name" class="img-fluid w-100">
                        </slider-item>
                    </slider>
                    <div class="project-name">
                         <h2>{{selectedProject.project_name}}</h2>
                        <h4>{{selectedProject.project_subtitle}}</h4>
                    </div>
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
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        height: 100%;
        width: auto !important;
        object-fit: cover;
    }
}

.text-description-container {
    max-height: 100%;
    display: block;
    position: absolute;
    overflow-y: scroll;
    padding-right: 10px;
    &::-webkit-scrollbar {
        width: 1px;
    }

    &::-webkit-scrollbar-thumb {
        background:var(--bg-color);

    }
    &::-webkit-scrollbar-track {
        background: var(--font-color);
    }

}

.project-name {
    position: absolute;
    right: 10px;
    bottom: 10px;
    z-index: 600;
    opacity: 0.8;
}

.popup-footer {
    height: 15%;
}
.popup-body {
    height: 85%;
}
</style>
