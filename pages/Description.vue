<template>
  
  <div>
    <header>
      <NuxtLink to="/" class="custom-link">
        <h1>VALORANT攻略サイト</h1>
      </NuxtLink>
    </header>
    
    <section>
      <h2>自己紹介</h2>
      <div class="container">
      <img :src="profileImage" alt="プロフィール写真" class="profile-image">
      <div class="profile-description">
        <p>こんにちは！私は小泉です。私はゲームに情熱を注いでいます。このウェブサイトは、私のクリップとおすすめのサイトを紹介する場です。</p>
        <p>学校名: 京都デザイン＆テクノロジー専門学校</p>
        <p>趣味: ゲーム・サバゲ・旅行・音楽鑑賞</p>
        <p>出身地: 京都</p>
        <p>職業: 学生</p>
        <p>Twitter: <a href="https://twitter.com/IZIZyoutube" target="_blank">@IZIZyoutube</a></p>
        <p>最後に一言！: アセンダントにおれはなる！純粋にゲームを一緒に楽しみましょう！</p>
       </div>
      </div>
    </section>

    <footer>
      <p>ktc23a31g0006@edu.kyoto-tech.ac.jpまでお問い合わせください</p>
    </footer>
  </div>

</template>

<style>
.profile-image {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  display: block;
  margin: 0 auto;
}

.profile-description p {
  margin-bottom: 1rem;
}
</style>

<script>
export default {
  name: 'ProfileComponent',
  data() {
    return {
      profileImage: '/20220313_021839000_iOS.jpg'
    };
  }
}
</script>
