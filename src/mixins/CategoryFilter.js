export const CategoryFilter = {
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
        { title: "Apple", main: "Phones" },
        { title: "Xiaomi", main: "Phones" },
        { title: "Samsung", main: "Phones" },
        { title: "GPU", main: "Computer components" },
        { title: "CPU", main: "Computer components" },
        { title: "AIO", main: "Computer components" },
        { title: "Cases", main: "Computer components" },
        { title: "Windows", main: "Laptops" },
        { title: "Mac OS", main: "Laptops" },
        { title: "Xiaomi-tv", main: "TV" },
        { title: "LG-tv", main: "TV" },
        { title: "Samsung-tv", main: "TV" },
        { title: "Sony-tv", main: "TV" },
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
        if (item.category === category.title) {
          vm.sortedProducts.push(item);
        }
      });
      this.selected = category.title;
    },
    sortSubProducts(subcategory) {
      this.sortedSubProducts = [];
      let vr = this;
      this.sortedProducts.map(function (item) {
        if (item.subcategory === subcategory.title) {
          vr.sortedSubProducts.push(item);
        }
      });
      this.subselected = subcategory.title;
    },
  },
};
