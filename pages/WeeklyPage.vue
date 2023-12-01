<template>
  <div>
    <header>
      <NuxtLink to="/" class="custom-link">
        <h1>抜き場</h1>
      </NuxtLink>
    </header>

    <section>
      <h2>今週オカズ</h2>
      <weekCards />
    </section>

    <footer>
      <p>ktc23a31g0006@edu.kyoto-tech.ac.jpまでお問い合わせください</p>
    </footer>
  </div>
</template>


<style>
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
