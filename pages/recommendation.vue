<template>
    <div>
      <header>
        <NuxtLink to="/" class="custom-link">
          <h1>抜き場</h1>
        </NuxtLink>
      </header>
  
      <h2>おすすめのエロゲまとめ！</h2>
  
      <Cards />
  
      <footer>
        <p>ktc23a31g0006@edu.kyoto-tech.ac.jpまでお問い合わせください</p>
      </footer>
    </div>
  </template>
   

<style>

.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s ease-in-out;
  margin-bottom: 20px;
}

.card:hover {
  transform: translateY(-5px);
}

.card-image {
  width: 100%;
  height: auto;
  display: block;
}

.card-body {
  padding: 15px;
}

ul {
  list-style: none;
  padding: 0;
}

ul li {
  margin-bottom: 5px;
}

a {
  color: #007bff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
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