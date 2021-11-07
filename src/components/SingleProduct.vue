<template>
  <div @click.self="$store.commit('toggleDetails')" class="backdrop z-30">
    
    <div class="modal flex flex-col ">
      <!-- <div class="relative w-full bg-green-300 z-40 top-0 transition ease-in duration-700" v-if="msg">Item added successfuly</div> -->
      
        <XIcon @click="$store.commit('toggleDetails')"  class="w-6 h-6 place-self-end text-purple-500 bg-indigo-100 hover:border-red-800 hover:text-red-800 cursor-pointer border border-indigo-500 rounded-md"/>
      <div class="flex justify-between items-center ">
          <div class="w-60 flex  bg-white  ">
              <img :src= productDetails.image alt="">
          </div>
        
          <div class="flex flex-col text-left w-2/3 px-6 border-l max-h-full border-indigo-100">
            <h1 class="text-indigo-800 text-xl font-bold pb-5 tracking-wide">{{productDetails.title}}</h1>
            <p class="text-gray-800 text-sm py-2 tracking-wide leading-relaxed">{{productDetails.description}}</p>
            <p class="text-sm font-semibold text-green-700 text-right px-4 py-8">Price: $ {{productDetails.price}}</p>
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
    .modal {
        width: 800px;
        padding: 20px;
        margin: 50px auto;
        background: rgb(252, 248, 255);
        /* background: rgb(214, 38, 38); */
        border-radius: 10px;
    }
    .backdrop {
        top: 0;
        position: fixed;
        background: rgba(0,0,0,0.5);
        width: 100%;
        height: 100%;
    }
</style>
