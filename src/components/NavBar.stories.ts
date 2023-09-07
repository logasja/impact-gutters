// NavBar.stories.ts

// Replace vue3 with vue if you are using Storybook for Vue 2
import type { Meta, StoryObj } from '@storybook/vue3';

import NavBar from 'Navbar.vue';

const meta: Meta<typeof NavBar> = {
  component: NavBar,
};

export default meta;
type Story = StoryObj<typeof NavBar>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => ({
    components: { NavBar },
    template: '<NavBar />',
  }),
};