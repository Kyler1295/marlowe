<template>
  <div class="about">
    <Hero
        hero-title="Coming Soon"
        :hero-background="require(`@/assets/johny-goerend-pnigODapPek-unsplash.jpg`)"
        hero-description="&nbsp;"
    />
  </div>
</template>

<script>
import Hero from '@/components/Hero';

export default {
  name: "About",
  components: {
    Hero
  }
}
</script>

<style scoped>

</style>