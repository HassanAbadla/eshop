<template>
  <div  v-if="$store.state.showCart">
      <CartView />
  </div>
<div @click="$store.state.showCart=false" class="min-h-screen">
      <div  class="grid grid-cols-1  items-center md:flex md:justify-center md:p-6 bg-blue-100 ">
        
        <a @click="$store.state.selected=''" class=" md:m-4 md:mt-24 mt-20 md:mb-1 mb-2 text-xs font-semibold px-2 py-2 bg-gray-50 rounded-full border-2 border-blue-400 cursor-pointer">All Products</a>

          <div v-for="(category, index) in categories" :key='index' class="md:h-6 md:m-4 cursor-pointer md:mt-24 flex flex-col ">
              <a @click="filteredCategory(category)" class=" text-xs font-semibold px-2 py-2 mb-2 bg-gray-50 rounded-full border-2 border-blue-400">{{category}}</a>
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
