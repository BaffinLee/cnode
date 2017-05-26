<template>
  <header class="header">
    <div class="inner">
      <nav>
        <router-link to="/">
          <img :src="logo" alt="首页">
        </router-link>
        <router-link to="/">全部</router-link>
        <router-link to="/good">精华</router-link>
        <router-link to="/share">分享</router-link>
        <router-link to="/ask">问答</router-link>
        <router-link to="/job">招聘</router-link>
      </nav>
    </div>
  </header>
</template>

<script>
  import logo from '@/assets/img/logo.svg';

  export default {
    data() {
      return {
        logo,
      };
    },
  };
</script>

<style lang="scss">
  .header {
    position: relative;
    z-index: 10;
    width: 100%;
    height: 52px;
    line-height: 52px;
    min-width: 1032px;
    overflow: hidden;
    background-color: #fff;
    border-bottom: 1px solid rgba(30, 35, 42, 0.06);
    box-shadow: 0 1px 3px 0 rgba(0, 34, 77, 0.05);
    z-index: 10;

    .inner {
      width: 1000px;
      padding: 0 16px;
      margin: 0 auto;

      a {
        color: #8590a6;

        &:hover,
        &.router-link-exact-active {
          color: #80bd01;
        }

        img {
          display: inline-block;
          width: 120px;
          margin-top: 10px;
          vertical-align: top;
        }
      }

      nav {
        display: inline-block;

        a {
          margin-right: 30px;
        }
      }
    }
  }
</style>
