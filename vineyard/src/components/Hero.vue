<template>
  <section class="hero" :style="{backgroundImage: `url(${heroBackground})`}">
    <h2 class="cursive">{{ heroTitle }}</h2>
    <p>{{ heroDescription }}</p>
  </section>

</template>

<script>
export default {
  name: "Hero",
  props: ['heroTitle', 'hero-background', 'hero-description'],
}
</script>

<style scoped>

.hero {
  width: 100vw;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-position: center;
}

.hero h2 {
  color: #ffffff;
  font-size: 3.5rem;
  font-weight: bold;
  text-shadow: 1px 1px 1px #000000;
}

.hero p {
  color: #ffffff;
  font-size: 1.25rem;
  font-weight: bold;
  text-shadow: 1px 1px 1px #000000;
}

</style>