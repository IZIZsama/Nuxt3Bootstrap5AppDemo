<template>
    <div class="joke-container">
      <h1>毎日のジョーク！</h1>
      <p v-if="loading">読み込み中...</p>
      <p v-else>{{ joke }}</p>
      <button @click="getJoke" :disabled="loading">もっと笑いたい！</button>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'JokeComponent',
    data() {
      return {
        joke: '',
        loading: false,
      };
    },
    methods: {
      async getJoke() {
        this.loading = true;
        try {
          const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
          this.joke = response.data.setup + ' ... ' + response.data.punchline;
        } catch (error) {
          this.joke = 'エラーが発生しました。ジョークを取得できません。';
        } finally {
          this.loading = false;
        }
      },
    },
    // コンポーネントがマウントされたときにジョークを取得します。
    mounted() {
      this.getJoke();
    },
  };
  </script>
  
  <style scoped>
  .joke-container {
    max-width: 400px;
    margin: auto;
    text-align: center;
    padding: 20px;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    border-radius: 5px;
    margin-top: 50px;
  }
  
  button {
    margin-top: 20px;
  }
  </style>
  