<template>
  <RouterView />
</template>

<script setup lang="ts">
</script>

<style lang="scss">
#app {
  overflow: hidden;
  height: 100vh;
  font-weight: 400 !important;
}

.el-button {
  font-weight: 400 !important;
}

.gva-body-h {
  min-height: calc(100% - 3rem);
}

.gva-container {
  height: calc(100% - 2.5rem);
}

.gva-container2 {
  height: calc(100% - 4.5rem);
}
</style>