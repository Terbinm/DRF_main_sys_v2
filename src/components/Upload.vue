<template>
  <div>
    <form @submit.prevent="submitForm">
<!--      <div>-->
<!--        <h3><label for="label">Description</label></h3>-->
<!--        <input type="text" class="inputT" id="label" v-model="description" required/>-->
<!--      </div>-->
      <div>
        <h3><label for="upFile">Upload File</label></h3>
        <input type="file" class="fileInput" id="upFile" @change="handleFileUpload" required/>
        <br>
      </div>
      <button type="submit" class="btn">Submit</button>
      <!--          <p>{{ message }}</p> -->
    </form>
  </div>
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
  //     const response = await axios.post('/drf/data_view/?format=api', formData )
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
      // label: '',
      need_handle: true,
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
    async submitForm() {
      const formData = new FormData();
      formData.append('description', this.description);
      formData.append('need_handle', this.need_handle);
      formData.append('upFile', this.upFile);
      try {
        const response = await axios.post("/drf/data_view/", formData);
        this.result = {
          status: response.status,
          data: response.data,
        };
        this.description = '';
        this.upFile = null;
        this.$router.push('/analysis');
      } catch (error) {
        this.result = {
          status: error.response.status,
          data: error.response.data,
        };
        this.description = '';
        this.upFile = null;
        this.$router.push('/analysis');
      }
    },
    // submitForm() {
    //   const formData = new FormData();
    //   // const router = useRouter();
    //   formData.append('description', this.description);
    //   formData.append('need_handle', this.need_handle);
    //   formData.append('upFile', this.upFile);
    //   axios.post("/drf/data_view/", formData)
    //       .then(response => {
    //         this.result = {
    //           status: response.status,
    //           data: response.data,
    //         };
    //         this.description = '';
    //         // this.message = '檔案已成功上傳！';  // 如果上傳成功，顯示一個確認消息
    //         this.$router.push('/analysis');
    //       })
    //       .catch(error => {
    //         this.result = {
    //           status: error.response.status,
    //           data: error.response.data,
    //         };
    //         this.description = '';
    //         // this.message = '上傳檔案時出現錯誤。';  // 如果出現錯誤，顯示一個錯誤消息
    //         this.$router.push('/analysis');
    //       });
    // },
  },
}
</script>
<script setup>

</script>

<style scoped>
div {
  margin-bottom: 10px;
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
.inputT {
  width: 300px;
  padding: 5px 50px;
  font-size: 16px;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
}
.fileInput {
  width: 300px;
  flex: 1;
  padding: 10px;
  margin-right: 10px;
  background-color: white;
  border: 3px solid #6DC5D1;
  border-radius: 5px;
  font-size: 16px;
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
}
</style>
