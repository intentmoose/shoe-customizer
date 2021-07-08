<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style lang="scss">
body {
  background-color: #c7e9fb;
  background-image: linear-gradient(315deg, #c7e9fb 0%, #e61d8c 74%);
}
#app {
  width: 100%;
  height: 100%;
}
</style>
