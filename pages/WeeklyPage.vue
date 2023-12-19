<template>
  <div class="container">
    <header>
      <NuxtLink to="/" class="custom-link">
        <h1>VALORANT攻略サイト</h1>
      </NuxtLink>
    </header>

    <div class="content">
      <div class="side-image left">
        <img src="/e7ba56e39aa9f75bcbc09ee8191f4932.png" alt="左の画像">
      </div>

      <section class="week-cards-container">
        <h2>今週のクリップ</h2>
        <weekCards />
      </section>

      <div class="side-image right">
        <img src="/8b3a4668d5f23220d5d650a999989de6.jpg" alt="右の画像">
      </div>
    </div>

    <footer>
      <p>ktc23a31g0006@edu.kyoto-tech.ac.jpまでお問い合わせください</p>
    </footer>
  </div>
</template>

<style>
.container {
  position: relative;
  max-width: 1200px;
  margin: auto;
}

.header, .footer {
  text-align: center;
}

.content {
  display: flex;
  justify-content: space-between;
}

.side-image {
  flex: 0 0 100px; /* 画像の幅を固定 */
}

.side-image img {
  height: 100vh; /* 画像をビューポートの高さに合わせる */
  width: 100px;
  object-fit: cover; /* 画像を適切にフィットさせる */
}

.week-cards-container {
  flex: 1; /* 残りのスペースを使用 */
  padding: 20px;
  text-align: center;
}

.week-cards-container h2 {
  margin-bottom: 20px;
}
</style>

<script>
export default {
  name: 'MyComponent',
  data() {
    return {
      sections: {
        about: true,
        weekly: true
      }
    };
  },
  methods: {
    toggleSection(sectionName) {
      this.sections[sectionName] = !this.sections[sectionName];
    }
  }
}
</script>
