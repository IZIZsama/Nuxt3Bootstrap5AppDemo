<template>
    <div>
      <header>
        <NuxtLink to="/">
          <h1>抜き場</h1>
        </NuxtLink>
      </header>
  
      <h2>おすすめのエロゲまとめ！</h2>
  
      <!-- ROOMのゲーム紹介カード -->
      <div class="card">
        <a href="https://www.dmm.co.jp/dc/doujin/-/detail/=/cid=d_278563/?dmmref=Mylibrary&i3_ref=recommend" target="_blank" class="card-link">
          <div class="card-body">
            <img src="/FhL3mpVaYAAIS3Z.jpg" alt="ROOM" class="card-image">
            <h3>作品名[ROOM]</h3>
            <ul>
              <li>作者・サークル[SORAREVO]</li>
            </ul>
            <NuxtLink to="https://twitter.com/SORAREVO">
              <li>Xアカウント@SORAREVO</li>
            </NuxtLink>
            <p>説明・抜きポイント[純粋な新社会人女性を様々なアングルで嬲り歪ませるのは最高でした。現実じゃできないことができるので少し変わった趣味をお持ちの方は必見です！]</p>
          </div>
        </a>
      </div>
  
      <!-- ドーナドーナのゲーム紹介カード -->
      <div class="card">
        <a href="https://dlsoft.dmm.co.jp/detail/alice_0053/" target="_blank" class="card-link">
          <div class="card-body">
            <img src="/EmBu-ZnVMAEJHDI.jpg" alt="ドーナドーナ" class="card-image">
            <h3>作品名[ドーナドーナ いっしょにわるいことをしよう]</h3>
            <ul>
              <li>作者・サークル[アリスソフト]</li>
              <NuxtLink to="https://twitter.com/alice_soft">
                <li>Xアカウント@alice_soft</li>
              </NuxtLink>
            </ul>
            <p>説明・抜きポイント:内容盛りだくさん！抜き絵盛りだくさん！さらにゲームが面白い！完全に抜け目のない（抜く場所はいっぱい）作品です！</p>
          </div>
        </a>
      </div>
  
      <!-- 喫茶ステラと死神の蝶 のゲーム紹介カード -->
      <div class="card">
        <a href="https://dlsoft.dmm.co.jp/detail/yuzu_0003/" target="_blank" class="card-link">
          <div class="card-body">
            <img src="/yuzu_0003pl.jpg" alt="喫茶ステラと死神の蝶" class="card-image">
            <h3>作品名[喫茶ステラと死神の蝶]</h3>
            <ul>
              <li>作者・サークル：ゆずソフト</li>
              <NuxtLink to="https://twitter.com/yuzusoft">
                <li>Xアカウント:@yuzusoft</li>
              </NuxtLink>
            </ul>
            <p>説明・抜きポイント：このゲームは</p>
          </div>
        </a>
      </div>
  
      <footer>
        <p>ktc23a31g0006@edu.kyoto-tech.ac.jpまでお問い合わせください</p>
      </footer>
    </div>
  </template>
   <!-- 未公開のゲーム紹介カード-->
         <!--
      <div class="card">
        <a href="" target="_blank" class="card-link">
          <div class="card-body">
            <h3>作品名[]</h3>
            <ul>
              <li>作者・サークル[]</li>
              <NuxtLink to =""><li>Xアカウント：@</li></NuxtLink>
            </ul>
            <p>説明・抜きポイント：</p>
          </div>
        </a>
        </div>
        -->

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

footer {
  text-align: center;
  padding: 1rem 0;
  background-color: #333;
  color: white;
}

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