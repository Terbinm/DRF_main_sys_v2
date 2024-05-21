<template>
  <div>
    <h1>Edit Profile</h1>
    <form @submit.prevent="submitForm">
      <div>
        <label for="name">Name：</label>
        <input class="inputT" type="text" v-model="person.name" id="name" required />
      </div>
      <div>
        <label for="gender">Gender：</label>
        <select class="seleT"  v-model="person.gender" id="gender" required>
          <option value="男">male</option>
          <option value="女">female</option>
        </select>
      </div>
      <div>
        <label for="age">Age ：</label>
        <input class="inputT2" type="number" v-model="person.age" id="age" required />
      </div>
<!--      <div>-->
<!--        <label for="upFile">上傳圖片:</label>-->
<!--        <input type="file" @change="handleFileUpload" />-->
<!--      </div>-->
      <button type="submit" class="btn">Submit</button>
      <button @click="goToAnalysis" type="submit" class="btn">Back</button>
<!--      <button @click="fetchPerson" class="btn">載入資料</button> &lt;!&ndash; 按鈕來獲取人員資料 &ndash;&gt;-->
    </form>
<!--    <div v-if="message">{{ message }}</div>-->
  </div>
</template>
<script setup>
import {useRouter} from "vue-router";

const router = useRouter()
const goToAnalysis = () => {
  router.push('/analysis');
};
</script>
<script>
import axios from "axios";
import {useRouter} from "vue-router";
const router = useRouter()
const goToUpload = () => {
  router.push('/upload');
};

const goToLogin = () => {
  router.push('/');
};
const goToProfile = () => {
  router.push('/profile');
};
export default {
  name: "App",
  data() {
    return {
      person: {
        person_id: null,
        name: '',
        gender: '',
        age: null,
      },
      upFile: null,
      result: null,
      message: null,  // 新增一個變數來存儲消息
    };
  },
  methods: {
    fetchPerson() {
      // 在這裡更改person_id以匹配你想要獲取的特定個人的ID
      const personId = 1; // 假設要修改的是person_id為1的個人資料
      axios.get(`http://192.168.31.166:8000/person_view/${personId}/`)
          .then(response => {
            this.person = response.data;
          })
          .catch(error => {
            console.error('Error fetching person data', error);
          });
    },
    handleFileUpload(event) {
      this.upFile = event.target.files[0];
    },
    submitForm() {
      const formData = new FormData();
      formData.append('name', this.person.name);
      formData.append('gender', this.person.gender);
      formData.append('age', this.person.age);
      if (this.upFile) {
        formData.append('person_img', this.upFile);
      }

      axios.put(`http://192.168.31.166:8000/person_view/${this.person.person_id}/`, formData)
          .then(response => {
            this.result = {
              status: response.status,
              data: response.data,
            };
            this.message = '資料已成功更新！';  // 如果更新成功，顯示一個確認消息
          })
          .catch(error => {
            this.result = {
              status: error.response.status,
              data: error.response.data,
            };
            this.message = '更新資料時出現錯誤。';  // 如果出現錯誤，顯示一個錯誤消息
          });
    },
  },
  mounted() {
    this.fetchPerson(); // 頁面載入時獲取資料
  }
}
</script>

<style scoped>
h1 {
  color: white;
  font-weight: 1000;
  font-size: 3rem;
}

form {
  display: flex;
  flex-direction: column;
}

div {
  margin-bottom: 10px;
}

label {
  margin-right: 10px;
  color: white;
  font-size: 1.2rem;
}
.seleT {
  width: 210px;
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
.inputT {
  width: 220px;
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
  width: 230px;
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
.button-container {
  display: flex;
  justify-content: center;
  margin-top: 40px;
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
  //margin: 0 50px;
}
.btn:hover {
  background-color: #5bb5c1;
  transform: scale(1.05);
}
</style>
