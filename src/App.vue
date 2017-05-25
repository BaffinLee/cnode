<template>
  <div id="app">
    <Topbar></Topbar>
    <Loading></Loading>
    <main class="main">
      <router-view></router-view>
    </main>
    <Copyright></Copyright>
  </div>
</template>

<script>
  import Topbar from '@/components/Topbar';
  import Loading from '@/components/Loading';
  import Copyright from '@/components/Copyright';

  export default {
    name: 'app',
    components: {
      Topbar,
      Loading,
      Copyright,
    },
  };
</script>

<style lang="scss">
  .main {
    width: 1000px;
    padding: 0 16px;
    margin: 80px auto 30px auto;
  }
</style>
