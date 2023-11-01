<template>
  <div>
    <header>
      <h1>抜き場</h1>
    </header>

    <section @click="redirectTo('/workspaces/Nuxt3Bootstrap5AppDemo/pages/WeeklyPage.vue')">
      <h2>このサイトについて</h2>
    </section>
    <NuxtLink to="/WeeklyPage.vue">
      <h2>今週のオカズ</h2>
    </NuxtLink>>
  </div>
</template>

<style>
h1 {
  text-align: center;
  padding: 1rem 2rem;
  background-image: linear-gradient(to right, #fa709a 0%, #fee140 100%);
}

h2 {
  position: relative;
  padding: 1rem .5rem;
  cursor: pointer; /* クリック可能であることを示すためのカーソルスタイルを追加 */
}

h2:after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5px;
  content: '';
  background-image: linear-gradient(to right, #fa709a 0%, #fee140 100%);
}
</style>

<script>
export default {
  name: 'MyComponent',
  data() {
    return {
      message: 'Hello Vue!',
      sections: {
        about: true, // 初期状態では表示
        weekly: true // 初期状態では表示
      }
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
