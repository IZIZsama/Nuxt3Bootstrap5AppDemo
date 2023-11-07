<template>
  <div>
    <header>
    <NuxtLink to="/workspaces/Nuxt3Bootstrap5AppDemo/pages/index.vue">
      <h1>抜き場</h1>
      </NuxtLink>
    </header>

     <NuxtLink to="/How to">
      <h2>このサイトについて</h2>
    </NuxtLink>>
    <NuxtLink to="/WeeklyPage">
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
  cursor: pointer;
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
        about: true, //
        weekly: true //
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
