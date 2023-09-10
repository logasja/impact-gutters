// Hero.stories.ts

// Replace vue3 with vue if you are using Storybook for Vue 2
import type { Meta, StoryObj } from '@storybook/vue3';

import Hero from './Hero.vue';

const meta: Meta<typeof Hero> = {
  component: Hero,
};

export default meta;
type Story = StoryObj<typeof Hero>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
    title: 'impact gutters',
    heroimg: 'https://images.unsplash.com/photo-1518736346281-76873166a64a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
};