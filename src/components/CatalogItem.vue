<template>
  <div class="catalog-item">
    <div class="catalog-item-img">
      <img
        :src="`/src/assets/catalog/${productData.image}`"
        alt="img"
        class="catalog-item-img__image"
      />
    </div>
    <div class="catalog-item-desc">
      <p class="catalog-item-desc__name">{{ productData.name }}</p>
      <p class="catalog-item-desc__price">Price: {{ productData.price }}$</p>
      <p class="catalog-item-desc__category">
        {{ productData.category }}, {{ productData.subcategory }}
      </p>
    </div>
    <div class="catalog-item-action">
      <button class="catalog-item-action__btn btn">Add to cart</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "catalog-item",
  props: {
    productData: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>

<style lang="scss">
.catalog-item {
  flex-basis: 25%;
  box-shadow: 0 0 8px 0 #e0e0e0;
  padding: 16px;
  margin-bottom: 16px;
  width: 250px;
  height: 340px;

  &-img {
    width: 240px;
    height: 145px;
    &__image {
      width: 100px;
    }
  }
  &-desc {
    &__name {
      width: 240px;
      height: 36px;
      font-weight: bold;
    }
    &__category {
      font-style: italic;
      width: 240px;
      height: 38px;
    }
  }
  &-action {
    &__btn {
      display: inline-block;
      padding: 0.75rem 1.25rem;
      border-radius: 10rem;
      border: none;
      color: #fff;
      text-transform: uppercase;
      font-size: 1rem;
      letter-spacing: 0.15rem;
      transition: all 0.3s;
      position: relative;
      overflow: hidden;
      cursor: pointer;
      z-index: 1;
      &:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #dbb0ff;
        border-radius: 10rem;
        z-index: -2;
      }
      &:before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0%;
        height: 100%;
        background-color: darken(#dbb0ff, 15%);
        transition: all 0.3s;
        border-radius: 10rem;
        z-index: -1;
      }
      &:hover {
        color: #fff;
        &:before {
          width: 100%;
        }
      }
    }
  }
}
</style>
