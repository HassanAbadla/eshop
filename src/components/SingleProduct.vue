<template>
  <div @click.self="$store.commit('toggleDetails')" class="backdrop z-30 overflow-auto">
    
    <div class="w-full md:w-4/5 bg-gray-50 rounded-lg my-8 md:my-12 md:mx-auto p-4 flex flex-col ">
      <!-- <div class="relative w-full bg-green-300 z-40 top-0 transition ease-in duration-700" v-if="msg">Item added successfuly</div> -->
      
        <XIcon @click="$store.commit('toggleDetails')"  class="w-6 h-6 place-self-end text-purple-500 bg-indigo-100 hover:border-red-800 hover:text-red-800 cursor-pointer border border-indigo-500 rounded-md"/>
      <div class="flex flex-col md:flex md:flex-row md:justify-between items-center ">
          <div class="w-28 h-28 md:h-auto md:w-60 flex  bg-white  ">
              <img :src= productDetails.image class="">
          </div>
        
          <div class="flex flex-col text-left w-full md:w-2/3 p-4 md:px-6 border-t my-2 md:border-l max-h-full border-blue-100">
            <h1 class="text-indigo-800 text-sm md:text-xl font-bold pb-5 tracking-normal md:tracking-wide">{{productDetails.title}}</h1>
            <p class="text-gray-800 text-xs md:text-sm py-2 tracking-normal md:tracking-wide leading-relaxed">{{productDetails.description}}</p>
            <p class="text-xs md:text-sm font-semibold text-green-700 text-right px-4 py-8">Price: $ {{productDetails.price}}</p>
          </div>
      </div>
      <div>
          <button @click="addToCart()" class="bg-indigo-50  text-gray-800 px-8 py-2 m-auto rounded-2xl hover:bg-indigo-200 text-xs font-semibold  border-2 border-indigo-700 scale-125 transition-all duration-200">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script>
import { XIcon } from "@heroicons/vue/outline"

export default {
    name: 'SingleProduct',
    components:{
      XIcon 
    },
    methods: {
      addToCart() {
        this.$store.dispatch('counter', {
          items: this.productDetails
        })
        
      },
    },
    computed: {
     productDetails() {
         return this.$store.state.productDetails
     }
 },
    
}
</script>

<style>
    .backdrop {
        top: 0;
        position: fixed;
        background: rgba(0,0,0,0.5);
        width: 100%;
        height: 100%;
    }
</style>
