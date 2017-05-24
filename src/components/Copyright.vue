<template>
  <footer>
    <a href="https://github.com/BaffinLee/cnode" target="_blank" title="源代码">
      <img :src="img" alt="github">
    </a>
  </footer>
</template>

<script>
  import img from '@/assets/img/github.svg';

  export default {
    data() {
      return {
        img,
      };
    },
  };
</script>

<style lang="scss">
  footer {
    width: 800px;
    margin: 20px auto;
    text-align: center;

    img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }
  }
</style>
