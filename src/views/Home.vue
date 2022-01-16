<template>
  <div class="home">
    <span class="test">这是子应用1</span>
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    // HelloWorld,
  },
};
</script>

<style scoped>
  .test {
    color: blue;
  }
</style>
