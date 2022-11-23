<script>
export default {
  name: "AppLoader",
};
</script>

<template>
  <span class="loader"></span>
  <h4 class="py-4">CERCANDO TRA UNIVERSI CINEMATOGRAFICI . . .</h4>
</template>

<style lang="scss" scoped>
@use "../style/partials/var" as *;
.loader {
  width: 48px;
  height: 48px;
  border: 3px solid #fff;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}
.loader::after {
  content: "";
  box-sizing: border-box;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 3px solid transparent;
  border-bottom-color: $primary-color;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

h4 {
  color: $primary-color;
}
</style>
