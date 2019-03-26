import { shallowMount } from '@vue/test-utils'
import ItemList from '../ItemList.vue'
import Item from '../../components/Item.vue'
describe('ItemList.vue', () => {
  test('renders an Item with data for each item in window.items', () => {
    window.items = [{},{},{}] // Not sure if you can assign this to the window, but that's how they did it in the demo
    const wrapper = shallowMount(ItemList)
    const items = wrapper.findAll(Item) // .findAll() is equivalent to querySelectorAll()
    expect(items).toHaveLength(window.items.length) // Checks that the number of items is equal to the number of items in the array
    items.wrappers.forEach((wrapper, i) => {
      expect(wrapper.props().item).toBe(window.items[i]) // Checks that each of the items has the correct props
    })
  })
})