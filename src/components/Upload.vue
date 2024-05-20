<script setup>

</script>

<style scoped>
h1 {
  color: white;
  font-weight: 1000;
  font-size: 3rem;
}

h3 {
  color: white;
  font-size: 1.2rem;
}
.inputT {
  padding: 10px 50px;
  font-size: 16px;
  //color: white;
  //background-color: #6DC5D1;
  //border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
  //transform: scale(1.05);
}
.fileInput {
  flex: 1;
  padding: 10px;
  margin-right: 10px;
  border: 2px solid #007BFF;
  border-radius: 5px;
  font-size: 16px;
}
.btn {
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
  <!--  <form @submit.prevent="upload">-->
  <!--    <input type="file" @change="selectFile">-->
  <!--    <button type="submit">Upload</button>-->
  <!--  </form>-->
  <form @submit.prevent="submitForm">
    <div>
      <h3><label for="label">標題</label></h3>
      <input type="text" class="inputT" id="label" v-model="label" required/>
    </div>
    <div>
      <h3><label for="upFile">上傳檔案</label></h3>
      <input type="file" class="fileInput" id="upFile" @change="handleFileUpload" required/>
    </div>
    <button type="submit" class="btn">提交</button>
    <p>{{ message }}</p>  <!-- 新增一個元素來顯示消息 -->
  </form>
</template>

<script>
// import { ref } from 'vue'
import axios from 'axios'
// import { useRouter } from 'vue-router'

export default {
  // setup() {
  //   const file = ref(null)
  //
  //   const selectFile = (event) => {
  //     file.value = event.target.files[0]
  //   }
  //
  //   const upload = async () => {
  //     const formData = new FormData()
  //     formData.append('file', file.value)
  //
  //     const response = await axios.post('http://163.18.44.158:9000/data_view/?format=api', formData )
  //
  //     if (response.status === 200) {
  //       alert('File uploaded successfully')
  //     } else {
  //       alert('Failed to upload file')
  //     }
  //   }
  //
  //   return { selectFile, upload }
  // }
  name: "App",
  data() {
    return {
      label: '',
      description: '',
      upFile: null,
      result: null,
      message: null,  // 新增一個變數來存儲消息
    };
  },
  methods: {
    handleFileUpload(event) {
      this.upFile = event.target.files[0];
    },
    submitForm() {
      const formData = new FormData();
      // const router = useRouter();
      formData.append('label', this.label);
      formData.append('description', this.description);
      formData.append('upFile', this.upFile);
      axios.post("http://163.18.44.158:9000/data_view/", formData)
          .then(response => {
            this.result = {
              status: response.status,
              data: response.data,
            };
            this.label = '';
            this.message = '檔案已成功上傳！';  // 如果上傳成功，顯示一個確認消息
            this.$router.push('/analysis');
          })
          .catch(error => {
            this.result = {
              status: error.response.status,
              data: error.response.data,
            };
            this.label = '';
            this.message = '上傳檔案時出現錯誤。';  // 如果出現錯誤，顯示一個錯誤消息
          });
    },
  },
}
</script>
