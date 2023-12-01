<template>
  <div class="container">
    <header>
      <NuxtLink to="/" class="custom-link">
        <h1>抜き場</h1>
      </NuxtLink>
    </header>

    <main>
      <kiyaku />
    </main>

    <footer>
      <p>ktc23a31g0006@edu.kyoto-tech.ac.jpまでお問い合わせください</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'MyTermsOfService',
  // Additional script logic can be added here
}
</script>

<style>
.container {
  margin: 0;
  padding: 0;
  width: 100%;
}

header, footer {
  width: 100%;
  background-color:white; 
}

/* 必要に応じて他のスタイルを追加 */
</style>
