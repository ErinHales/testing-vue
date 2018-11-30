import Item from '../Item.vue'
import Vue from 'vue'

const Ctor = Vue.extend(Item)
const vm = new Ctor().$mount()

describe('Item.vue', () => {
  test('renders "item"', () => {
    const Ctor = Vue.extend(Item) // #A
    const vm = new Ctor().$mount() // #B
    expect(vm.$el.textContent).toContain('item') // #C
  })
})
