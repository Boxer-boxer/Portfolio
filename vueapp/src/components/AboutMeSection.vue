<template>
  <div class="about-me-section section">
    <div class="position-relative stroke-container">
      <div class="black-stroke-right">
        <div class="sep-title" id="exp-title">
          <h1 class="wack-style" data-content="A little about me"></h1>
        </div>
      </div>
    </div>
    <div class="about-me-container">
      <div class="row h-100">
        <div class="col-8 d-flex justify-content-center align-items-center">
          <div class="speech-balloon">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum quas repudiandae rem voluptatibus, error debitis, quidem accusantium officia consectetur quae praesentium veniam distinctio pariatur, minus et dolorem. Quam, ipsum similique!

          </div>
        </div>
        <div class="col-4 d-flex align-items-end justify-content-center">
          <div class="portrait-container">
            <img src="../../../media/images/guy.png.png" class="img-fluid" alt="">
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'EntrySection',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Italiana&family=Roboto:wght@300&display=swap');
@import "@/assets/_variables.scss";

.about-me-section {
  margin-top: -100px;
}
.about-me-container {
  padding-top: 170px;
  background: linear-gradient(290deg, $primary 30%, $secondary 30%);
  height: 100vh;
  z-index: -10;
  display: block;
  position: relative;
  .portrait-container {
    img {
      filter: drop-shadow(1px 1px 0 black)
      drop-shadow(-10px 0px 0px $secondary)
    }
  }
}
.speech-balloon {
  background: black;
  outline: black solid 5px;
  border: 10px solid white;
  color: $white;
  max-width: 395px;
  padding: 20px;
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
