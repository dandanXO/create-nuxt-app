import { mount } from '@vue/test-utils'
import test from '@/components/test.vue'

describe('test', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(test)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
