<template>
    <div class="joke-container">
      <div class="bubble">
        <div class="shark-image">
          <h1>シャークジョーク！</h1>
          <p v-if="loading">読み込み中...</p>
          <p v-else>{{ joke }}</p>
        </div>
      </div>
      <button @click="getJoke" :disabled="loading">もっとおもろいのへ！</button>
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
    border-radius: 5px;
    margin-top: 50px;
    position: relative;
  }
  
  .bubble {
    position: relative;
    background: #f0f0f0;
    border-radius: 0.4em;
    padding: 20px;
  }
  
  .shark-image {
    background: url('shark-image.png') no-repeat center; /* 画像のパスをプロジェクトの構造に合わせて更新してください */
    background-size: cover; /* 背景画像がコンテナに適合するようにサイズを調整 */
    padding: 50px; /* 内側のスペースを調整 */
    color: white; /* テキストの色を調整 */
    text-shadow: 0px 0px 4px #000000; /* テキストの視認性を高めるための影 */
  }
  
  .bubble:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 0;
    border: 20px solid transparent;
    border-top-color: #f0f0f0;
    border-bottom: 0;
    border-left: 0;
    margin-left: -10px;
    margin-bottom: -20px;
  }
  
  button {
    margin-top: 20px;
  }
  </style>