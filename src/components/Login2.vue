<template>
    <div id="app">
      <div class="background-overlay"></div>
      <div id="particles-js"></div>
      <div class="container">
        <div class="login-container">
          <form class="login-form"  onsubmit="return validateForm()">
            <h2>歡迎登入</h2>
            <div class="input-group">
              <input type="text" id="username" placeholder="帳號" required />
            </div>
            <div class="input-group">
              <input type="password" id="password" placeholder="密碼" required />
              <button type="button" class="toggle-password" @click="togglePasswordVisibility">👁️</button>
            </div>
            <button type="submit">登入</button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Login2',
    methods: {
        validateForm() {
            var username = document.getElementById('username').value;
            var password = document.getElementById('password').value;
            if (username === 'admin' && password === 'password') {
                alert('登入成功！');
                router.push('/analysis');
                // window.location.href = '/analysis';
                // return false;
            } else {
                alert('帳號或密碼錯誤，請重試。');
                return false;
            }
        },
      togglePasswordVisibility() {
        const passwordInput = document.getElementById('password');
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
      }
    },
    mounted() {
      // 加载particles.js动画
      particlesJS.load('particles-js', '/src/assets/particles.json', function() {
        console.log('particles.js loaded - callback');
      });
    }
  }
  </script>
  
  <style scoped>
  body {
    background-image: url('/src/assets/aaa.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
  #app {
    max-width: 1280px;
    margin: 0 auto;
    padding: 2rem;
    font-weight: normal;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    box-sizing: border-box;
  }
  .background-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(2px);
    z-index: 1;
    transition: backdrop-filter 0.3s ease;
  }
  #particles-js {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 2;
  }
  .container {
    display: flex;
    height: 100%;
    position: relative;
    z-index: 3;
  }
  .login-container {
    width: 100%;
    max-width: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    perspective: 1000px;
  }
  .login-form {
    background: rgba(255, 255, 255, 0.1);
    padding: 40px;
    border-radius: 10px;
    backdrop-filter: blur(10px);
    box-shadow: 0 8px 32px rgba(31, 38, 31, 0.2);
    transition: all 0.3s ease;
    transform: rotateX(5deg) rotateY(5deg);
    width: 100%;
    max-width: 300px;
  }
  .login-form:hover {
    transform: rotateX(0deg) rotateY(0deg) scale(1.05);
    box-shadow: 0 12px 40px rgba(31, 38, 31, 0.3);
  }
  h2 {
    color: white;
    text-align: center;
    margin-bottom: 30px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
  }
  .input-group {
    position: relative;
    margin-bottom: 20px;
  }
  input {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.2);
    color: white;
    box-sizing: border-box;
    transition: all 0.3s ease;
  }
  input:focus {
    outline: none;
    box-shadow: 0 0 10px rgba(255,255,255,0.5);
  }
  input::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
  .toggle-password {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    opacity: 0.7;
    transition: all 0.3s ease;
  }
  .toggle-password:hover {
    opacity: 1;
  }
  button[type="submit"] {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background: white;
    color: #333;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  }
  button[type="submit"]:hover {
    background: #333;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(0,0,0,0.15);
  }
  </style>
  