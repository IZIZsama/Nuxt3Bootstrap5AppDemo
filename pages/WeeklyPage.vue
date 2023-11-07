<template>
  <div>
   <header>
    <NuxtLink to="/workspaces/Nuxt3Bootstrap5AppDemo/pages/index.vue">
      <h1>抜き場</h1>
      </NuxtLink>
    </header>
    <section>
      <h2>今週オカズ</h2>
      <!-- tksand様の作品 -->
      <article>
        <h3>tksand様の作品</h3>
        <ul>
          <li>X@Turkey_Sand</li>
          <li><a href="https://www.pixiv.net/users/29106548" target="_blank">pixiv</a></li>
          <li><a href="http://tksand.fanbox.cc" target="_blank">fanbox</a></li>
        </ul>
        <p>この作品はおっぱいの揺れ方がよくて周りの擬音がそそられるし表情がよかった</p>
        <img src="/F9sA2E0bEAAR6tW.jpg" alt="鈴仙" class="my-image1">
      </article>

      <!-- KAGEMUSYA様の作品 -->
      <article>
        <h3>KAGEMUSYA様の作品</h3>
        <ul>
          <li>X@_KAGEMUSYA</li>
          <li><a href="http://kagemusya-web.fanbox.cc" target="_blank">fanbox</a></li>
        </ul>
        <p>この作品はハメ撮りされている一花がアヘ顔さらして楽しむ姿がちょー抜けます</p>
        <img src="/F9uPDBfakAAzB6x.jpg" alt="一花" class="my-image2">
      </article>

      <!-- 藤崎ひかり様の作品 -->
      <article>
        <h3>藤崎ひかり様の作品</h3>
        <ul>
          <li>X@pedori3</li>
          <li><a href="https://t.co/CwYKHFCUft" target="_blank">fantia</a></li>
          <li><a href="https://t.co/dTv3NT6GLb" target="_blank">FANBOX</a></li>
        </ul>
        <p>表情や滑らかさどれをとっても最高です!おかゆんの喜ぶお顔が抜きポイント高め！</p>
        <a href="https://x.com/pedori3/status/1705937133331181939?s=20" target="_blank">ポスト</a>
      </article>
      <iframe width="640" height="480" src="/【僕の彼女は猫又おかゆ】ショート版.mp4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

      <!-- わくら様の作品 -->
      <article>
        <h3>わくら様の作品</h3>
        <ul>
          <li>X @wakuradosukebe</li>
          <li><a href="http://x.gd/8CpXz" target="_blank">pixiv</a></li>
          <li><a href="http://x.gd/8CpXz" target="_blank">fanbox</a></li>
        </ul>
        <p>やはりお尻が最高です。揺れるおしりを眺めながら突かれるちんぽをみながら抜きました！ぼっちちゃんの表情もよき！</p>
        <a href="https://x.com/wakuradosukebe/status/1699352626432028684?s=20" target="_blank">ポスト</a>
      </article>
    </section>
  </div>
</template>

<style>
.my-image1 {
  width: 200px;
  height: auto; 
}
.my-image2 {
  width: 300px;
  height: auto; 
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
    }
  }
}
</script>
