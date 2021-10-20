<template>
  <main :style="{backgroundImage: `url(${require('@/assets/so-white.png')})`}">
    <Nav />
    <router-view />
    <Footer />
  </main>
</template>

<script>
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default {
  components: {
    Nav,
    Footer
  }
}
</script>

<style>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css";
@import url('https://fonts.googleapis.com/css2?family=Festive&family=Italianno&family=Roboto:wght@400;700&display=swap');

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

.cursive {
  font-family: 'Italianno', cursive;
}

.festive {
  font-family: 'Festive', cursive;
}

main {
}

hr {
  border-top: 1px dashed #8c8b8b;
  width: 80%;
  margin: 30px auto;
}

</style>
