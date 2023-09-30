// Testimonials.stories.ts

// Replace vue3 with vue if you are using Storybook for Vue 2
import type { Meta, StoryObj } from '@storybook/vue3';

import Testimonials from './Testimonials.vue';

const meta: Meta<typeof Testimonials> = {
  component: Testimonials,
};

export default meta;
type Story = StoryObj<typeof Testimonials>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
    name: 'Jacob Logas',
    description: 'A person who is very stupid, probably the dumbest',
    heroimg: 'https://images.unsplash.com/photo-1693998591024-2d3c35ada345?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
};