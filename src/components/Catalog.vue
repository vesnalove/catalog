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
      @select="sortSubProducts"
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

export default {
  name: "catalog",
  components: {
    CatalogItem,
    CategorySelector,
    SubCategorySelector,
  },
  props: {},
  data() {
    return {
      categories: [
        { title: "All" },
        { title: "Phones" },
        { title: "Computer components" },
        { title: "Laptops" },
        { title: "TV" },
      ],
      selected: "All",
      sortedProducts: [],
      subcategories: [
        { title: "All" },
        { title: "Apple", main: "Phones" },
        { title: "Xiaomi", main: "Phones" },
        { title: "Samsung", main: "Phones" },
      ],
      subselected: "Select subcategory",
      sortedSubProducts: [],
    };
  },
  computed: {
    filteredProducts() {
      if (this.sortedProducts.length) {
        if (this.sortedSubProducts.length) {
          return this.sortedSubProducts;
        } else {
          return this.sortedProducts;
        }
      } else {
        return this.getProducts;
      }
    },
  },
  methods: {
    sortProducts(category) {
      this.sortedProducts = [];
      let vm = this;
      this.getProducts.map(function (item) {
        if (item.category.title === category.title) {
          vm.sortedProducts.push(item);
        }
      });
      this.selected = category.title;
    },
    // Fix subcategories filter
    // sortSubProducts(subcategory) {
    //   this.sortedSubProducts = [];
    //   let vr = this;
    //   this.getProducts.map(function (item) {
    //     if (item.category.subcategory === subcategory.title) {
    //       vr.sortedSubProducts.push(item);
    //     }
    //   });
    //   this.subselected = subcategory.title;
    // },
  },
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
