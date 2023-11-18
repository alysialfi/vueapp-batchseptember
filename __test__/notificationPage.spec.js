import { mount } from '@vue/test-utils'
import NotificationPage from '../src/components/NotificationPage.vue'

describe('NotificationPage.vue Unit Test', () => {
    const wrapper = mount(NotificationPage)

    it('should have Notification as a title', () => {
        expect(wrapper.text()).toMatch('Notification')
    })
    it('should open notification modal', async () => {
        await wrapper.find('#show-btn').trigger('click')
        expect(wrapper.find('#modal').text()).toMatch('Add Notification')
    });
})