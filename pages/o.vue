<template>
  <div class="container">
    <header>
      <NuxtLink to="/" class="custom-link">
        <h1>VALORANT攻略サイト</h1>
      </NuxtLink>
    </header> 
       <h2>おしらせ</h2>
      <ul>
      <li>メンテナンス:2100年1月1日</li>
      <li>お知らせの詳細はXにて公開中！</li>
      <a href="https://twitter.com/IZIZyoutube">
      <img src="/workspaces/Nuxt3Bootstrap5AppDemo/public/MicrosoftTeams-image.png" alt="" class="card-image">
      </a>
      <li>最後にプレーした日:12月19日</li>

      </ul>

    <footer>
      <p>ktc23a31g0006@edu.kyoto-tech.ac.jpまでお問い合わせください</p>
    </footer>
  </div>
</template>


<style>
.container {
  margin-left:100px;
  margin-right: 100px; 
}
h1 {
  text-align: center;
  padding: 1rem 2rem;
  background-image: linear-gradient(to right, #fa709a 0%, #fee140 100%);
}

h2 {
  position: relative;
  padding: 1rem 0.5rem;
  cursor: pointer;
}

h2::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5px;
  content: '';
  background-image: linear-gradient(to right, #fa709a 0%, #fee140 100%);
}

footer {
  text-align: center;
  padding: 1rem 0;
  background-color: #333;
  color: white;
}
.custom-link:hover {
  color: rgb(201, 13, 185); 
  font-size: 30px;
  text-decoration: none; 
}
</style>

<script>
export default {
  name: 'MyComponent',
  data() {
    return {
      message: 'Hello Vue!',
      sections: {
        about: true,
        weekly: true
      },
      announcements: [
        { title: '新しいイベント', content: '2023年11月20日にイベントが開催されます。' },
        { title: 'メンテナンスのお知らせ', content: '2023年12月1日にシステムメンテナンスを行います。' },
        // その他のお知らせ...
      ]
    };
  },
  methods: {
    toggleSection(sectionName) {
      this.sections[sectionName] = !this.sections[sectionName];
    },
    redirectTo(path) {
      this.$router.push(path);
    }
  }
}
</script>

