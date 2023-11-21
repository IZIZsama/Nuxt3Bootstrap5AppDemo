<template>
  
  <div>
    <header>
      <NuxtLink to="/" class="custom-link">
        <h1>抜き場</h1>
      </NuxtLink>
    </header>
    
    <section>
      <h2>自己紹介</h2>
      <div class="container">
      <img :src="profileImage" alt="プロフィール写真" class="profile-image">
      <div class="profile-description">
        <p>こんにちは！私は小泉です。私はエロに情熱を注いでいます。このウェブサイトは、私の趣味とおすすめの絵師様を紹介する場です。</p>
        <p>学校名: 京都デザイン＆テクノロジー専門学校</p>
        <p>趣味: ゲーム・サバゲ・旅行・音楽鑑賞</p>
        <p>出身地: 京都</p>
        <p>職業: 学生</p>
        <p>Twitter: <a href="https://twitter.com/etietisama" target="_blank">@etietisama</a></p>
        <p>性癖: 中出し・JK・潮吹き・レズ・痴女・NTR・オナニー・寝取られ・貧乳・フェラ・手コキ・ハーレム・媚薬・パイズリ・女子大生・不倫・乱交・個人撮影・3P・コスプレ・逆レイプ・パイパン・温泉・口内射精・3D・オネショタ・触手・エロゲー・CG・サキュバス・エルフ・敗北ヒロイン・異種姦・快楽落ち・ボテ腹・ロリ・奴隷・時間停止・肉便器・アへ顔・リョナ・孕ませ・処女・ゴブリン・学園物・近親相姦・レイプ等</p>
        <p>最後に一言！: 犯罪者予備軍ではございません。純粋にエロを一緒に楽しみましょう！</p>
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
