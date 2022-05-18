<template>
    <div class="position-relative stroke-container" :id="containerTitleId">
      <div :class="orientantionClass">
        <div :class="{ 'sep-title': true, 'sep-title-out': outClass }" :id="sepTitleId">
          <h1 class="wack-style" :data-content="title"></h1>
        </div>
      </div>
    </div>
</template>

<script>
import $ from "jquery";
import _ from "underscore";

export default {
    data() {
        return {
            outClass: false
        }
    },
    props: {
        title: {
            type: String,
            default: ''
        },
        orientantionClass : {
            type: String,
            default: ''
        },
        sepTitleId: {
            type: String,
            default: ''
        },
        containerTitleId: {
            type: String,
            default: ''
        }
    },
    mounted(){
        this.checkTitlePosition()

        $(window).on('scroll', () => {
            _.debounce(
                this.checkTitlePosition(document.getElementsByClassName('stroke-container'),`.sep-title`),
            1000)
        });
    },
    methods: {
        checkTitlePosition() {
            var self = this;
            let container = document.getElementById(`${self._props.containerTitleId}`);
            let el = document.getElementById(`${self._props.sepTitleId}`);

            if(el != null) {
                var rect = container.getBoundingClientRect();
                let detectionMargin = 50;
                let withinView = rect.top >= 0 && (rect.bottom + detectionMargin) <= (window.innerHeight || document.documentElement.clientHeight);
                self.outClass = !withinView
            }
        },
    }
}
</script>

<style scoped lang="scss">
@import "@/assets/_variables.scss";

.stroke-container {
    z-index: 10;
    background: transparent;
    margin-top: -100px;
    margin-bottom: -100px;
}

.black-stroke, 
.black-stroke-right {
    background: $black;
    bottom: 0;
    left: 0;
    right: 0;
    pointer-events: none;
    height: 185px;
}
.black-stroke {
    transform: skew(0deg, -5deg);
}
.black-stroke-right {
    transform: skew(0deg, 5deg);
}

// Special behaviors
#entry-container-title{
    position: absolute!important;
    top: 80%;
    left: 0;
    right: 0;
    z-index: 1;
    // @media (max-width: 1200px) {
    //     top: 55%;
    // }
}

</style>