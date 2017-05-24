<template>
  <div id="app">
    <Topbar></Topbar>
    <main class="main">
      <router-view></router-view>
    </main>
    <Copyright></Copyright>
  </div>
</template>

<script>
  import Topbar from '@/components/Topbar';
  import Copyright from '@/components/Copyright';

  export default {
    name: 'app',
    components: {
      Topbar,
      Copyright,
    },
  };
</script>

<style lang="scss">
  .main {
    width: 1000px;
    margin: 20px auto 50px auto;
  }
</style>
