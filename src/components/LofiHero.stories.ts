// LofiHero.stories.ts

// Replace vue3 with vue if you are using Storybook for Vue 2
import type { Meta, StoryObj } from '@storybook/vue3';

import LofiHero from './LofiHero.vue';

const meta: Meta<typeof LofiHero> = {
  component: LofiHero,
};

export default meta;
type Story = StoryObj<typeof LofiHero>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
    
  },
};