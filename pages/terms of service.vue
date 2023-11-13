<template>
  <div class="container">
    <header>
      <NuxtLink to="/" class="custom-link">
        <h1>抜き場</h1>
      </NuxtLink>
    </header>

    <main>
      <section class="terms-of-service">
        <h2>利用規約</h2>
        <p>抜き場をご覧いただきありがとうございます。<br>
           本規約は、ウェブメディア「抜き場」の利用者様との関係を定めるものとし記載します。</p>
        <h3>著作権等知的財産権</h3>
        <p>当サイトに引用し掲載されている動画、画像、文章の著作権は各権利所有者に帰属します...</p>
        <!-- Add all other sections here -->
      </section>
    </main>

    <footer>
      <p>ktc23a31g0006@edu.kyoto-tech.ac.jpまでお問い合わせください</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'MyTermsOfService',
  // Any additional script logic here
}
</script>

<style>
.container {
  margin-left: 100px;
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
