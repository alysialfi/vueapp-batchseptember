import { mount } from '@vue/test-utils';
import NotificationPage from '../src/components/NotificationPage.vue';

describe('NotificationPage.vue Unit Test', () => {
  const wrapper = mount(NotificationPage);

  it('should have Notification as a title', () => {
    expect(wrapper.text()).toMatch('Notification');
  });
  it('should open notification modal', async () => {
    await wrapper.find('#show-btn').trigger('click');
    expect(wrapper.find('#modal').text()).toMatch('Add Notification');
  });
  it('should be added 1 new notification', async () => {
    await wrapper.find('#show-btn').trigger('click');
    wrapper.find('#name').setValue('Alfi');
    wrapper.find('#add-btn').trigger('click');
    expect(wrapper.vm.notifs.length).toBe(4);
  });
});
