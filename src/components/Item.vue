<template>
  <li>
    <a :href="item.url">{{ item.title }}<br>{{ item.author }}<br>{{ item.score }}</a>
  </li>
</template>

<script>
export default {
  props: ['item']
}
</script>

<style scoped>

</style>