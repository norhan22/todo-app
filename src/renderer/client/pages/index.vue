<template>
  <TODO />
</template>

<script>
import TODO from '@/components/Todo.vue'

export default {
  name: 'IndexPage',
  components: {
    TODO
  },
  data () {
    return {
      externalContent: ''
    }
  },
  methods: {
    openURL (url) {
      window.open(url)
    }
  }
}
</script>

<style>

</style>
