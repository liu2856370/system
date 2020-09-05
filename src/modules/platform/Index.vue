<template>
  <div class="index">
      <PHeader :showArrow="true" >业务办理平台</PHeader>
  </div>
</template>

<script>
// @ is an alias to /src
import PHeader from '@/components/PHeader.vue'

export default {
  name: 'index',
  components: {
    PHeader
  }
}
</script>
