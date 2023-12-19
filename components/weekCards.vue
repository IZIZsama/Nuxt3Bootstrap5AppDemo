<template>

      <div class="card-container">
        <div class="card">
          <a href="" target="_blank" class="card-link">
            <iframe width=100% height="100%" src="/シェリッフ.mp4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <h3>ブリーズ</h3>
            <p>シェリフ3キル</p>
          </a>
        </div>
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