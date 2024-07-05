<script setup>
</script>

<style scoped>
.inputT {
  width: 180px;
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
.inputT2 {
  width: 190px;
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
label {
  margin-right: 10px;
  color: white;
  font-size: 1.2rem;
}

div {
  margin-bottom: 10px;
}
</style>

<template>
  <div>
    <h1>LOGIN</h1>
    <form @submit.prevent="login">
      <div>
        <label for="username">Username：</label>
        <input v-model="username" type="text" placeholder="Username" class="inputT">
      </div>
<div>
  <label for="password">Password：</label>
  <input v-model="password" type="password" placeholder="Password" class="inputT2">
</div>
      <button type="submit" class="btn">Login</button>
    </form>
  </div>
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
        router.push('/analysis')
      } else {
        alert('Invalid username or password.')
      }
    }

    return { username, password, login }
  }
}
</script>
