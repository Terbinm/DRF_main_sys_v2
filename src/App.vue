<script>
export default {
  name: 'App'
}
</script>

<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import LineChart from './components/LineChart2.vue'
</script>

<template>
  <div>
    <router-view></router-view>
  </div>
<!--  <header>-->
<!--    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />-->

<!--    <div class="wrapper">-->
<!--      <HelloWorld msg="You did it!" />-->
<!--    </div>-->
<!--  </header>-->

<!--  <main>-->
<!--    <TheWelcome />-->
<!--    <LineChart />-->
<!--  </main>-->
</template>

<style scoped>

</style>

