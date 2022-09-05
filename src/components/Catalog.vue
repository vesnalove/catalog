<template>
  <div class="selectors">
    <CategorySelector
      :selected="selected"
      :options="categories"
      @select="sortProducts"
    />
    <SubCategorySelector
      :subselected="subselected"
      :suboptions="subcategories"
      @subselect="sortSubProducts"
      v-if="selected != 'All'"
    />
  </div>
  <div class="catalog">
    <div class="catalog-list">
      <CatalogItem
        v-for="product in filteredProducts"
        :key="product.id"
        :productData="product"
      />
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useProductStore } from "../pinia/ProductStore";

const store = useProductStore();
const getProducts = computed(() => {
  return store.getProducts;
});

onMounted(() => {
  store.fetchProducts();
});
</script>

<script>
import CatalogItem from "./CatalogItem.vue";
import CategorySelector from "./CategorySelector.vue";
import SubCategorySelector from "./SubCategorySelector.vue";
import { CategoryFilter } from "../mixins/CategoryFilter";

export default {
  name: "catalog",
  mixins: [CategoryFilter],
  components: {
    CatalogItem,
    CategorySelector,
    SubCategorySelector,
  },
  props: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>

<style lang="scss">
.selectors {
  display: flex;
}
.catalog {
  &-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
