<script setup lang="ts">
// props
// url, method, query, params, responses

interface QueryParams {
  key: string
  type: string
  required?: boolean
  description?: string
  validation?: string
}

interface BodyParams {
  key: string
  type: string
  required: boolean
  description: string
  validation: string
}

interface BodyObject {
  key: string
  type: string
  description: string
}

interface Responses {
  code: number
  description: string
  body: Record<string, BodyObject>
}

interface Endpoint {
  url: string
  method: string
  query?: QueryParams[]
  body?: BodyParams[]
  responses: Responses[]
}

defineProps<{ endpoint: Endpoint }>()
</script>

<template>
  {{ endpoint }}
</template>
