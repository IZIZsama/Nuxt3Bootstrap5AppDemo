<template>
    <div ref="imageContainer" class="image-container">
      <img :src="imageSrc" :style="{ top: `${y}px`, left: `${x}px` }" />
    </div>
  </template>
  
  <script>
  export default {
    props: {
      imageSrc: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        x: 0,
        y: 0
      };
    },
    mounted() {
      window.addEventListener('keydown', this.handleKeydown);
    },
    beforeDestroy() {
      window.removeEventListener('keydown', this.handleKeydown);
    },
    methods: {
      handleKeydown(event) {
        switch (event.keyCode) {
          case 37: // 左キー
            this.x -= 10;
            break;
          case 38: // 上キー
            this.y -= 10;
            break;
          case 39: // 右キー
            this.x += 10;
            break;
          case 40: // 下キー
            this.y += 10;
            break;
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .image-container {
    position: relative;
    width: 300px;
    height: 300px;
    overflow: hidden;
  }
  
 
  
  img {
  position: absolute;
  transition: top 0.3s ease, left 0.3s ease; /* ここを追加 */
}
  </style>
  