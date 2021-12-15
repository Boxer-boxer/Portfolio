<template>
  <div class="entry-section px-5">
    <div class="text-left">
        <h1>Timothy Badiuk</h1>
        <a href="mailto:tjbadiuk@gmail.com" class="contact-subtitle mb-2">
          <span class="material-icons mr-2">email</span>
          tjbadiuk@gmail.com
        </a>
        <a href="tel:416-688-5411" class="contact-subtitle">
          <span class="material-icons mr-2">phone</span>
          +1 416-688-5411
        </a>
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

.entry-section {
    padding-top: 65px;
    padding-bottom: 65px;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
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
}

</style>
