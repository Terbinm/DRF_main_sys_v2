<script setup>
</script>

<style scoped>
.inputT {
  width: 300px;
  padding: 5px 50px;
  font-size: 16px;
  //color: white;
  //background-color: #6DC5D1;
  //border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
  //transform: scale(1.05);
}

h1 {
  color: white;
  font-weight: 1000;
  font-size: 3rem;
}

h3 {
  color: white;
  font-size: 1.2rem;
}

.btn {
  width: 300px;
  padding: 10px 100px;
  font-size: 16px;
  color: white;
  background-color: #6DC5D1;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
  //transform: scale(1.05);
}
</style>

<template>
    <form @submit.prevent="login">
      <h1>LOGIN</h1>
      <h3><input v-model="username" type="text" placeholder="Username" class="inputT"></h3>
      <h3><input v-model="password" type="password" placeholder="Password" class="inputT"></h3>
      <h1><button type="submit" class="btn">Login</button></h1>
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
        router.push('/upload')
      } else {
        alert('Invalid credentials')
      }
    }

    return { username, password, login }
  }
}
</script>
