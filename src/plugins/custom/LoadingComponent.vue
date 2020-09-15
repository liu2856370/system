<template>
  <div>
    <van-overlay :show="show">
      <div class="wrapper" @click.stop>
        <van-loading type="spinner" />
      </div>
    </van-overlay>
  </div>
</template>

<script>
export default {
  name: "LoadingComponent",
  data() {
    return {
      show: false
    };
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>