<template>
  <div class="item-list">
    <h1>Vue Hacker News</h1>
    <item
      v-for="item in displayItems"
      :key="item.id"
      :item="item"
    ></item>
  </div>
</template>

<script>
import Item from '../components/Item.vue'

export default {
  components: {
    Item
  },
  data () {
    return {
      displayItems: window.items
    }
  }
}
</script>