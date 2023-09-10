<template>
  <Disclosure as="nav" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 font-rbno31">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton
            class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-200 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span class="absolute -inset-0.5" />
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex flex-shrink-0 items-center">
            <div class="block sm:hidden">
              <img class="h-8 w-auto" src="@/assets/img/nav-ico-sm.png"
                alt="Impact Gutters" />
            </div>
            <div class="hidden sm:block">
              <img class="h-8 w-auto" src="@/assets/img/nav-ico-lg.png"
                alt="Impact Gutters" />
            </div>
          </div>
          <!-- Full-sized screen -->
          <div class="hidden sm:ml-6 sm:block w-full">
            <div class="flex space-x-4 justify-end">
              <a v-for="item in navigation" :key="item.name" :href="item.href" :class="[
                item.current
                  ? 'bg-gray-600 text-neutral-100'
                  : 'bg-blue-600 text-neutral-100 hover:bg-gray-600 hover:text-neutral-100',
                'rounded-xl px-3 py-2 text-sm font-medium',
              ]" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Mobile menu -->
    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href" :class="[
          item.current
            ? 'bg-gray-900 text-white'
            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
          'block rounded-md px-3 py-2 text-base font-medium',
        ]" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</DisclosureButton>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup>
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/vue';
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline';

const navigation = [
  { name: 'About', href: '#', current: false },
  { name: 'Team', href: '#', current: false },
  { name: 'Contact', href: '#', current: false },
];
</script>
