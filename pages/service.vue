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
        <p>当サイトに引用し掲載されている動画、画像、文章の著作権は各権利所有者に帰属します。所有者の権利や名誉を侵害する目的は一切ありません。掲載に問題があり、ご連絡いただけた際は修正、削除など速やかに対応致します。</p>
        <h3>プライバシーポリシー</h3>
        <p>当サイトでは、お問い合わせや、コメント欄への投稿に、お名前（ペンネームやインターネットネーム）や、メールアドレスなどの個人情報をご登録いただく場合がございます。</p>
        <h3>個人情報の利用について</h3>
        <p>当サイトが入手した個人情報は、不正行為の防止やお送りいただいた質問に対する回答、必要な情報を電子メールなどでご連絡する際に利用するものです。これら以外の目的で利用することはありません。</p>
        <h3>個人情報の第三者への開示</h3>
        <p>当サイトでは、個人情報は大切に管理し、以下に該当する場合を除いて第三者に開示、提供することはありません。</p>
        <ul>
          <li>ご本人からの希望や了承がある場合</li>
          <li>法令等への協力のため、開示が必要となる場合</li>
        </ul>
        <p>ユーザーご本人から個人データの開示、訂正、削除をご希望される際は、申請者がユーザーご本人であることを確認した後、速やかに対応致します。</p>
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
  // Additional script logic can be added here
}
</script>

<style>
.container {
  margin-left: 0;
  margin-right: 0;
  width: 100%;
}
.container {
  margin-left: 100px;
  margin-right: 100px;
}
header, footer {
  width: 100%;
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
