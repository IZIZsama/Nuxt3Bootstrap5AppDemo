<template>

<div>
<header>
      <h1>抜き場</h1>
    </header>
    
  <p>こんにちは！紳士の皆様！私はエロが大好きです！この気持ちを共有するべくこのサイトを作りました</p>
  <p>YoutubeやX（旧Twitter）では使えないような表現や画像がたくさん使えたほうが伝わりやすいと思いますのでぜひ今晩のお供探しの参考にしてください！</p>
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
  cursor: pointer; /* クリック可能であることを示すためのカーソルスタイルを追加 */
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
        about: true, // 初期状態では表示
        weekly: true // 初期状態では表示
      }
    };
  },
  methods: {
    toggleSection(sectionName) {
      this.sections[sectionName] = !this.sections[sectionName];
    },
    redirectTo(pageName) {
      if (pageName === 'Description') {
        this.$router.push('/workspaces/Nuxt3Bootstrap5AppDemo/pages/Description.vue');
      } else if (pageName === 'WeeklyPage') {
        this.$router.push('/workspaces/Nuxt3Bootstrap5AppDemo/pages/WeeklyPage.vue');
      }
    }
  }
}
</script>