<template>
  <div class="entry-section-parent">
    <div class="entry-section container-fluid p-3 m-0 position-relative"  :style="{backgroundImage: 'url(/media/' + background.image + ')'  }">
      <div class="dark-overlay"></div>
      <div class="entry-content w-100 h-100 d-flex align-items-center justify-content-center">
          <h1 class="sr-only">Timothy Badiuk</h1>
          <h1 class="entry-letters" id="EntryLetters">
            Timothy Badiuk
          </h1>
          <div class="entry-footer">
            <a href="mailto:tjbadiuk@gmail.com" class="material-icons mr-2">email</a>
            <a href="tel:416-688-5411" class="material-icons">phone</a>
          </div>

      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'EntrySection',
  props: {
    background: {
      type: Object,
      default: function () {
          return { }
      }
    }
  },
  methods: {
    showLettersOnHover: function(elId) {
      $(elId).hover(
        function(){
           $(this).children('.fade').addClass('show-letters')
        },
        function(){
           $(this).children('.fade').removeClass('show-letters')
        }
      )
    },
    fadeInLetters: function(elId){
      var letters = $(elId).text().split("");
      $(elId).text("");

      letters.forEach(function(item, index){
        if (index === 0) {
          let span = $("<span class='fade initials'>").text(item);
          $(elId).append(span);
        } else if (letters[index - 1] === " ") {
          let span = $("<span class='fade initials'>").text(item);
          $(elId).append(span);
        } else {
          let span = $("<span class='fade'>").text(item);
          $(elId).append(span);
        }
      });

      $(document).find(".fade").each(function(){
        var delay = Math.random();
        var letter = $(this);

        setTimeout(function(){
          letter.animate({"opacity":1},delay*500);
        },delay*2000);
      });
    },

    scrollEffect: function(){

      $(window).scroll(function(){
        var st = $(this).scrollTop();
        let lastScrollTop = 0;

        if (st > lastScrollTop) {
          $(".entry-section-parent").addClass("p-5");
          $('.fade').not(".initials").addClass('hide-letters')
          $('.initials').addClass('mx-1')
          $('.entry-letters').addClass('sticky-initials')
        } else {
          $(".entry-section-parent").removeClass("p-5")
          $('.fade').not(".initials").removeClass('hide-letters')
          $('.initials').removeClass('mx-1')
          $('.entry-letters').removeClass('sticky-initials')
        }
        lastScrollTop = st;
      });
    }
  },
  mounted(){
    this.fadeInLetters("#EntryLetters")
    this.showLettersOnHover("#EntryLetters")
    this.scrollEffect()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// @import url('https://fonts.googleapis.com/css2?family=Italiana&family=Roboto:wght@300&display=swap');

.fade{
  opacity:0;
  display: inline-block;
  width: auto;
  transition: 0.2s;
}


.dark-overlay {
  background: var(--bg-color);
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  opacity: 0.4;

}

.entry-section-parent {
  height: 100vh;
  transition: 0.3s;
}

.entry-letters {
  font-size: 2em;
  border: 1px solid;
  letter-spacing: -1.2px;
  padding: 16px;
  transition: 0.2s;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.sticky-initials {
  position: fixed;
  left: 0%;
  transform: translateX(0%);
  border: none !important;
  z-index: 2;
  top: 0;
}

.entry-footer {
  position: absolute;
  padding: 16px;
  bottom: 0;
  left: 0;
  .material-icons {
    font-size: 18px;
    color: var(--font-color);
    text-decoration: none;
    @media (max-width: 992px) {
        font-size: 40px;
    }
  }
}

.entry-content {
  z-index: 1;
}

.entry-section {
    background-image: url();
    background-repeat: no-repeat;
    background-size: cover;
    width: auto;
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;

    // &:after {
    //     clip-path: polygon(100% 16%, 100% 15%, 0 50%, 0 51%);
    //     background: white;
    //     position: absolute;
    //     top: 0;
    //     bottom: 0;
    //     left: 0;
    //     right: 0;
    // }

}

.entry-subtitle {
    font-size: 12px;
    margin: 4px;
}

</style>
