<template>
  <div class="overlay">
    <div class="ball-pulse">
      <div />
      <div />
      <div />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loading'
}
</script>

<style scoped lang="less">
  .overlay {
    background: rgba(255, 255, 255, 0.6);
    position: absolute;
    top: 48px;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Loading CSS 样式 */

  .ball-pulse {
    transform: scale(1);

    > div {
      background-color: #0fb560;
      width: 15px;
      height: 15px;
      border-radius: 100%;
      margin: 2px;
      animation-fill-mode: both;
      display: inline-block;
      &:nth-child(1) {
        animation: ball-pulse-scale 0.75s -0.24s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);
      }
      &:nth-child(2) {
        animation: ball-pulse-scale 0.75s -0.12s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);
      }
      &:nth-child(3) {
        animation: ball-pulse-scale 0.75s 0s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);
      }
    }
  }

  @keyframes ball-pulse-scale {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    45% {
      transform: scale(0.1);
      opacity: 0.7;
    }
    80% {
      transform: scale(1);
      opacity: 1;
    }
  }
</style>
