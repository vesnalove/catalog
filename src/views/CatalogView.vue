<template>
  <div class="catalog-view">
    <Catalog />
  </div>
</template>

<script>
import Catalog from "../components/Catalog.vue"

export default {
  name: 'catalog-view',
  components: {
    Catalog
  },
  props: {},
  data() {
    return {}
  },
  computed: {},
  methods: {},
  watch: {},
  mounted() {
    console.log('Ready');
  }
}
</script>

<style lang="scss" scoped>
  .catalog-view {
    max-width: 900px;
    margin: 0 auto;
    padding: 8px;
  }
</style>
