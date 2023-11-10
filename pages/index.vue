<template>
  <div>
    <header>
      <NuxtLink to="/">
        <h1>抜き場</h1>
      </NuxtLink>
    </header>

    <NuxtLink to="/Description">
      <h2>このサイトについて</h2>
    </NuxtLink>

    <NuxtLink to="/WeeklyPage">
      <h2>今週のオカズ</h2>
    </NuxtLink>

    <NuxtLink to="/recommendation">
      <h2>おすすめのエロゲまとめ！</h2>
    </NuxtLink>

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