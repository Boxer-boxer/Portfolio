<template>
  <div class="entry-section container">
    <div class="text-left">
        <h1>Timothy Badiuk</h1>
        <p class="entry-subtitle">tjbadiuk@gmail.com</p>
        <p class="entry-subtitle">+1 416-688-5411</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Entry Section',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Italiana&family=Roboto:wght@300&display=swap');

.entry-section {
    height: calc(100vh - 32px);
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    
    &:after {
        content: " ";
        clip-path: polygon(100% 16%, 100% 15%, 0 50%, 0 51%);
        background: white;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }
}

.entry-subtitle {
    font-size: 12px;
    margin: 4px;
}

</style>
