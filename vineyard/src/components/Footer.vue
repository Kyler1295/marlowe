<template>
 <footer>
   &copy; {{ footerDate }} Marlowe Vineyards & Jackson Enterprises
 </footer>
</template>

<script>
export default {
  name: "Footer",
  computed: {
    footerDate () {
      return new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
  footer {
    background: #000000;
    padding: 15px;
    color: #ffffff;
  }
</style>