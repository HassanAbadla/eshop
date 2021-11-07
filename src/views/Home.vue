<template>
  <div  v-if="$store.state.showCart">
      <CartView />
  </div>
<div @click="$store.state.showCart=false" class="min-h-screen">
      <div  class="flex justify-center p-6 bg-indigo-100 ">
        <a @click="$store.state.selected=''" class="h-6 m-4 mt-24 text-xs font-semibold px-2 py-1 bg-gray-50 rounded-full border-2 border-indigo-400 cursor-pointer">All Products</a>
          <div class="h-6 m-4 cursor-pointer mt-24" v-for="(category, index) in categories" :key='index' >
              <a @click="filteredCategory(category)" class=" text-xs font-semibold px-2 py-1 bg-gray-50 rounded-full border-2 border-indigo-400">{{category}}</a>
          </div>
      </div>
      <div>
        <ProductsView  />
      </div>
</div>
</template>

<script>
// @ is an alias to /src
import ProductsView from '@/components/ProductsView.vue'
import CartView from '@/components/CartView.vue'

export default {
  name: 'Home',
  components: {
    ProductsView, CartView
  },
  date(){
    return {
      showCart: false
    }
  },
  methods: {
        filteredCategory(category) {
            this.selected = category
        },
        toggleCart() {
          this.showCart = !this.showCart
        }
    },
  computed: {
    categories() {
        return this.$store.state.categories
    },
    selected: {
      get() {
        return this.$store.state.selected
      },
      set(newValue) {
        this.$store.commit('setFilter', newValue)
      }
    }
  },

  mounted() {
    this.$store.dispatch('getCategories')
    }
}
</script>
