import { defineStore } from 'pinia'
import axios from 'axios'

export const useProductStore = defineStore('ProductStore', {
  state: () => {
    return {
      products: [],
    }
  },
  getters: {
    getProducts(state) {
      return state.products
    }
  },
  actions: {
    async fetchProducts() {
      try {
        const data = await axios.get('http://localhost:3000/products')
        this.products = data.data
      } catch (error) {
        console.log(error);
      }
    }
  },
  mutations: {
  }
})
