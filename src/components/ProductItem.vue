<template>
    <div  class="flex flex-col items-center transform hover:border-yellow-400 transition-all duration-200 justify-between bg-white h-72  rounded-xl p-2 filter shadow-md">
      <div @click="details(item.id)" class="flex w-full flex-col justify-between items-center cursor-pointer">
      <div class="h-28 static flex mb-5 w-full items-center justify-center place-items-center ">
        <img class="h-24" :src= item.image alt="item.title">
        <p class="absolute top-2 right-0 text-xs font-semibold float-right bg-yellow-400 opacity-70  text-black p-1 rounded-sm text-right"> $ {{ item.price }}</p>
      </div>
      <div class="w-full">
        <h3 class="text-sm">{{ item.title }}</h3>
      </div>
      </div>
      <div class="w-full">
        <!-- <p class="text-xs font-semibold float-right bg-yellow-300 p-3 text-gray-800 mt-2 w-28 rounded-l-full text-right">Price: $ {{ item.price }}</p> -->
        <button @click="addToCart()" class="bg-indigo-50  text-gray-800 px-8 py-2 mt-2 rounded-2xl hover:bg-indigo-200 text-xs font-semibold  border-2 border-indigo-700 scale-125 transition-all duration-200 shadow-md">Add to Cart</button>
      </div>
    </div>
</template>

<script>
export default {
    name: 'ProductItem', 
    props:['item'],

    methods: {
      addToCart() {
        this.$store.dispatch('counter', {
          items: this.item
        })
      },
      details(){
            this.$store.dispatch('details', {product: this.item})
        }
    }
}

</script>