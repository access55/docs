<script setup lang="ts">
defineProps<{ hideSearch?: boolean }>()

const { header } = useAppConfig()
</script>

<template>
  <UHeader>
    <template #logo>
      <UColorModeImage v-bind="{ class: 'h-6 w-auto', ...header?.logo }" />
    </template>
    <template #right>
      <template v-if="header?.links">
        <UButton
          v-for="(link, index) of header.links"
          :key="index"
          v-bind="{ color: 'gray', variant: 'ghost', ...link }"
        />
      </template>
    </template>
  </UHeader>
</template>
