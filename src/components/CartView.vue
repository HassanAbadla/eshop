<template>
  <div class="fixed overflow-y-auto right-0 top-0 bg-white w-1/3 h-screen z-10 filter shadow-2xl">
      
      <div class="flex justify-between items-center h-12 border-b bg-gray-800 text-white border-indigo-300 p-2">
          <h1 class="text-left font-bold">Cart Details</h1>
          <ChevronDoubleRightIcon @click="$store.commit('toggleCart')" class="h-8 border-2 rounded-lg border-indigo-500 hover:bg-indigo-500 hover:text-white p-1 cursor-pointer"/>
      </div>

<!-- Cart View -->
    <div v-for="items in cart" :key="items.id" class="flex justify-around items-center p-2 mt-2 border-b border-indigo-200">
          <img class="w-16" :src= items.items.image alt="">
        <div class="flex flex-col text-left w-5/12">
            <p class="text-xs break-words font-semibold">{{ items.items.title }}</p>
            <p class="text-xs py-2 text-green-700">$ {{ items.items.price }}</p>
        </div>
        <!-- <div class="border border-indigo-100 rounded-full ">
            <button @click="itemQty -=1" class="py-2 px-3 border-r hover:bg-gray-100 rounded-l-full font-semibold border-indigo-100">-</button>
            <input type="text" name="" id="" class=" text-sm w-6 px-1" :value="itemQty">
            <button @click="itemQty +=1" class="py-2 px-3 border-l hover:bg-gray-100 rounded-r-full font-semibold border-indigo-100">+</button>
        </div> -->
            <ItemQty />
            <TrashIcon @click.prevent="removeFromCart(items.items)" class="h-6 text-red-500 hover:text-red-700 cursor-pointer"/>
    </div>

        <router-link :to="{ name:'Checkout' }">
            <button @click="$store.state.showCart=false" class="bg-yellow-400 my-4 hover:text-white w-full p-2 font-bold shadow-md">CHECK OUT</button>
        </router-link>
<!-- End Cart View -->

    </div>
</template>

<script>
import { ChevronDoubleRightIcon } from "@heroicons/vue/outline"
import { TrashIcon } from "@heroicons/vue/outline"
import ItemQty from './ItemQty.vue'

export default {
 components: {
     ChevronDoubleRightIcon, TrashIcon, ItemQty
 },
 methods:{
     removeFromCart(product) {
         this.$store.dispatch('removeFromCart', product)
     },
 },
 computed: {
     cart() {
         return this.$store.state.cart
     }
 }
}
</script>

<style>

</style>