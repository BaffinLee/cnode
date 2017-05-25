<template>
  <div class="loading" v-show="loading">
    <div class="spin">
      <svg viewBox="25 25 50 50" class="circular">
          <circle cx="50" cy="50" r="20" fill="none" class="path"></circle>
      </svg>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      loading() {
        return this.$store.state.loading;
      },
    },
  };
</script>

<style lang="scss">
  .loading {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.9);
    z-index: 9;

    .spin {
      position: absolute;
      top: 50%;
      width: 100%;
      margin-top: -21px;
      text-align: center;
    }

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

  @keyframes loading-rotate {
    to {
      transform: rotate(1turn);
    }
  }

  @keyframes loading-dash {
    0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -40px;
    }

    to {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -120px;
    }
  }
</style>
