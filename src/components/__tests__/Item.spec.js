import { shallowMount } from '@vue/test-utils'
import Item from '../Item.vue'

describe('Item.vue', () => {
  test('renders "item"', () => {
    const item = {
      url: 'http://some-url.com',
      title: 'some-title'
    }
    const wrapper = shallowMount(Item, { // shallowMount the component and assign it to 'wrapper'
      propsData: { item } // Options object can be used to pass props to the component for testing
    })
    const a = wrapper.find('a') // finds the first instance of an 'a' element
    expect(a.text()).toBe(item.title) // .text() get the text inside the element
    expect(a.attributes().href).toBe(item.url) // .attributes() returns an object with all the attributes assigned to an element
  })

  test('renders a link to the item.url with item.title as text', () => {  const item =
    {
      title: 'some title'
    }
    const wrapper = shallowMount(Item, {
      propsData: { item }
    })
    expect(wrapper.find('a').text()).toBe(item.title)
  })

  test('renders item.author', () => {
    const item = {
      author: 10
    }
    const wrapper = shallowMount(Item, {
      propsData: { item }
    })
      expect(wrapper.text()).toContain(item.author)
  })

  test('renders item.score', () => {
    const item = {
      score: 10
    }
    const wrapper = shallowMount(Item, {
      propsData: { item }
    })
    expect(wrapper.text()).toContain(item.score)
  })
})
