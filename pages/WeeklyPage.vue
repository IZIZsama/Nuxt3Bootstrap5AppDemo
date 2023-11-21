<template>
  <div>
    <header>
      <NuxtLink to="/" class="custom-link">
        <h1>抜き場</h1>
      </NuxtLink>
    </header>

    <section>
      <h2>今週オカズ</h2>
      <div class="card-container">
        <!-- tksand様の作品カード -->
        <div class="card">
          <a href="https://twitter.com/Turkey_Sand" target="_blank" class="card-link">
            <img src="/F9sA2E0bEAAR6tW.jpg" alt="鈴仙" class="card-image">
            <div class="card-body">
              <h3>tksand様の作品</h3>
              <ul>
                <li>X@Turkey_Sand</li>
                <li><a href="https://www.pixiv.net/users/29106548" target="_blank">pixiv</a></li>
                <li><a href="http://tksand.fanbox.cc" target="_blank">fanbox</a></li>
              </ul>
              <p>この作品はおっぱいの揺れ方がよくて周りの擬音がそそられるし表情がよかった</p>
            </div>
          </a>
        </div>

        <!-- ディッコさん様の作品カード -->
        <div class="card">
          <a href="https://twitter.com/dikkosan" target="_blank" class="card-link">
            <img src="/F-TrkYLbQAApH0-.jpg" alt="お嬢" class="card-image">
            <div class="card-body">
              <h3>ディッコさん様の作品</h3>
              <ul>
                <li>X @dikkosan</li>
                <li><a href="https://t.co/z6VodwOM29" target="_blank">Fantia</a></li>
                <li><a href="https://t.co/z6VodwOM29" target="_blank">fanbox</a></li>
              </ul>
              <p>お嬢かわいい！</p>
              <a href="https://x.com/dikkosan/status/1721759977290019186?s=20" target="_blank">ポスト</a>
            </div>
          </a>
        </div>

        <!-- KAGEMUSYA様の作品カード -->
        <div class="card">
          <a href="https://twitter.com/_KAGEMUSYA" target="_blank" class="card-link">
            <img src="/F9uPDBfakAAzB6x.jpg" alt="一花" class="card-image">
            <div class="card-body">
              <h3>KAGEMUSYA様の作品</h3>
              <ul>
                <li>X:@_KAGEMUSYA</li>
                <li><a href="http://kagemusya-web.fanbox.cc" target="_blank">fanbox</a></li>
              </ul>
              <p>この作品はハメ撮りされている一花がアヘ顔さらして楽しむ姿がちょー抜けます</p>
            </div>
          </a>
        </div>

        <!-- 藤崎ひかり様の作品カード -->
        <div class="card">
          <a href="https://twitter.com/pedori3" target="_blank" class="card-link">
            <iframe width=100% height="100%" src="/【僕の彼女は猫又おかゆ】ショート版.mp4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div class="card-body">
              <h3>藤崎ひかり様の作品</h3>
              <ul>
                <li>X@pedori3</li>
                <li><a href="https://t.co/CwYKHFCUft" target="_blank">fantia</a></li>
                <li><a href="https://t.co/dTv3NT6GLb" target="_blank">FANBOX</a></li>
              </ul>
              <p>表情や滑らかさどれをとっても最高です!おかゆんの喜ぶお顔が抜きポイント高め！</p>
            </div>
          </a>
        </div>
      </div>
    </section>

    <footer>
      <p>ktc23a31g0006@edu.kyoto-tech.ac.jpまでお問い合わせください</p>
    </footer>
  </div>
</template>


<style>
.card-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

@media (max-width: 768px) {
  .card-container {
    grid-template-columns: 1fr;
  }
}

.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s;
  margin-bottom: 20px;
}

.card:hover {
  transform: translateY(-5px);
}

.card-image {
  width: 100%;
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
