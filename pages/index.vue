<template>
  <div>
    <header>
      <NuxtLink to="/" class="custom-link">
        <h1>抜き場</h1>
      </NuxtLink>
    </header>

    <NuxtLink to="/Description" class="custom-link">
      <h2>このサイトについて</h2>
    </NuxtLink>

    <NuxtLink to="/WeeklyPage" class="custom-link">
      <h2>今週のオカズ</h2>
    </NuxtLink>

    <NuxtLink to="/recommendation" class="custom-link">
      <h2>おすすめのエロゲまとめ！</h2>
    </NuxtLink>

     <NuxtLink to="/o" class="custom-link">
      <h2>おしらせ</h2>
    </NuxtLink>


        <NuxtLink to="/service" class="custom-link">
      <h2>利用規約</h2>
    </NuxtLink>

    <footer>
      <p>ktc23a31g0006@edu.kyoto-tech.ac.jpまでお問い合わせください</p>
    </footer>
  </div>
</template>




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