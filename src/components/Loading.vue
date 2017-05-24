<template>
  <div class="loading" v-show="show">
    <svg viewBox="25 25 50 50" class="circular"><circle cx="50" cy="50" r="20" fill="none" class="path"></circle></svg>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      };
    },
    props: [
      'show',
    ],
  };
</script>

<style lang="scss">
  .loading {
    .circular {
      width: 42px;
      height: 42px;
      animation: loading-rotate 2s linear infinite;

      .path {
        animation: loading-dash 1.5s ease-in-out infinite;
        stroke-dasharray: 90,150;
        stroke-dashoffset: 0;
        stroke-width: 2;
        stroke: #20a0ff;
        stroke-linecap: round;
      }
    }
  }
</style>
