<script setup lang="ts">
import type { NavItem } from '@nuxt/content'

const navigation = inject<Ref<NavItem[]>>('navigation')

const badgesColors = {
  post: 'blue',
  get: 'green',
  put: 'orange',
  delete: 'red',
  patch: 'purple'
}

const badgeProps = (badge: string) => ({
  color: badgesColors[badge],
  label: badge.toUpperCase()
})

const styleBadges = (items) => {
  return items.map(item => ({
    ...item,
    children: item.children ? styleBadges(item.children) : undefined,
    badge: item.badge ? badgeProps(item.badge) : undefined
  }))
}
</script>

<template>
  <UContainer>
    <UPage>
      <template #left>
        <UAside>
          <UNavigationTree :links="styleBadges(mapContentNavigation(navigation))" />
        </UAside>
      </template>
      <slot />
    </UPage>
  </UContainer>
</template>
