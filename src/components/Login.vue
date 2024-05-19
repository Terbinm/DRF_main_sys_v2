<script setup>

</script>

<style scoped>

</style>

<template>
  <form @submit.prevent="login">
    <input v-model="username" type="text" placeholder="Username">
    <input v-model="password" type="password" placeholder="Password">
    <button type="submit">Login</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const username = ref('')
    const password = ref('')
    const router = useRouter()

    const login = () => {
      if (username.value === 'admin' && password.value === 'password') {
        // this.$router.push('/upload');
        router.push('/upload')
      } else {
        alert('Invalid credentials')
      }
    }

    return { username, password, login }
  }
}
</script>
