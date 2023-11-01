<template>
  <div>
    <header>
      <h1>抜き場</h1>
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
        <img src="/F9sA2E0bEAAR6tW.jpg" alt="鈴仙">
      </article>

      <!-- KAGEMUSYA様の作品 -->
      <article>
        <h3>KAGEMUSYA様の作品</h3>
        <ul>
          <li>X@_KAGEMUSYA</li>
          <li><a href="http://kagemusya-web.fanbox.cc" target="_blank">fanbox</a></li>
        </ul>
        <p>この作品はハメ撮りされている一花がアヘ顔さらして楽しむ姿がちょー抜けます</p>
        <img src="/F9uPDBfakAAzB6x.jpg" alt="一花">
      </article>

      <!-- 紺そめ様の作品 -->
      <article>
        <h3>紺そめ様の作品</h3>
        <ul>
          <li>X@wakuradosukebe</li>
          <li><a href="http://fantia.jp/fanclubs/380131" target="_blank">fantia</a></li>
          <li><a href="http://consome2021.fanbox.cc" target="_blank">FANBOX</a></li>
        </ul>
        <p>表情や滑らかさどれをとっても最高ですローアングルから見える絶景が最高にそそられました！</p>
        <a href="https://x.com/consome2021/status/1714838782674145506?s=20" target="_blank">ポスト</a>
      </article>

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
