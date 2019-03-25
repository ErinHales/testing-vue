import { shallowMount } from '@vue/test-utils'
import Item from '../Item.vue'

describe('Item.vue', () => {
  test('renders "item"', () => {
    const item = {
      url: 'http://some-url.com',
      title: 'some-title'
    }
    const wrapper = shallowMount(Item, {
      propsData: { item }
    })
    const a = wrapper.find('a')
    expect(a.text()).toBe(item.title)
    expect(a.attributes().href).toBe(item.url)
  })

  test('renders a link to the item.url with item.title as text', () => {  const item =
    {
      title: 'some title'
    }
    const wrapper = shallowMount(Item, {
      propsData: { item } // #B
    })
    expect(wrapper.find('a').text()).toBe(item.title) // #C
  })
})
