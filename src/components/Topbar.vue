<template>
  <header class="header">
    <div class="inner">
      <router-link to="/">
        <img src="../static/images/logo.svg" alt="首页">
      </router-link>
      <nav>
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

</script>

<style lang="scss">
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 52px;
    line-height: 52px;
    min-width: 1032px;
    overflow: hidden;
    background: #fff;
    border-bottom: 1px solid rgba(30, 35, 42, 0.06);
    box-shadow: 0 1px 3px 0 rgba(0, 34, 77, 0.05);

    .inner {
      width: 1000px;
      padding: 0 16px;
      margin: 0 auto;

      a {
        color: #8590a6;

        &:hover,
        &.router-link-active {
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
        margin-left: 30px;

        a {
          margin-right: 20px;
        }
      }
    }
  }
</style>
