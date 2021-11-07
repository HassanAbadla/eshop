<template>
<div  v-if="$store.state.showCart">
      <CartView />
    </div>
<div @click="$store.state.showCart=false" class="p-28 min-h-screen">
    
    <div @click="back" class=" fixed top-4 left-8 float-left border border-indigo-100 rounded-lg py-2 px-4 text-white z-20 hover:bg-yellow-400  ">
      <button class="font-semibold">Back</button>
    </div>
   
    <div @click="$store.state.showCart=false" class="flex ">
        <div class="w-2/3 ">

            <div v-if="$store.state.cart.length">
                <div v-for="items in $store.state.cart" :key="items.id"
                class=" flex justify-around rounded-xl m-4 p-2 filter shadow-md" 
                >            
                    <div class="p-2 border-r w-40 border-indigo-100">
                        
                        <img :src= items.items.image class="">
                    </div>
                    
                    <div class="p-2 w-2/3">
                        <h1 class="text-left text-sm font-bold text-indigo-800">{{ items.items.title }}</h1>
                        <p class="pt-6 text-left text-sm  text-indigo-800  ">{{ items.items.description }}</p>
                        <p class="pt-6 text-left text-sm  text-green-600  ">$ {{ items.items.price }}</p>
                    </div>
                    <TrashIcon @click.prevent="removeFromCart(items.items)" class="h-6 text-red-500 hover:text-red-700 cursor-pointer float-right"/>
                </div>
            </div>

            <div v-else class="bg-pink-50 filter shadow  my-4 mx-8 p-2 rounded-lg">
                <h1 class="font-bold p-2 text-3xl ">Cart is Empty!</h1>
                <p class="p-2">There is no items in your cart</p>
            </div>

        </div>

        <div class="w-1/3  h-1/2 rounded-xl mt-4 filter shadow-xl">
            <div class="flex justify-center w-full bg-yellow-400 text-white h-12 rounded-t-xl p-2 items-center">
                <h2 class="font-semibold ">Bill</h2>
            </div>
            <div class="py-2 px-4">
                <p class="text-left font-bold pb-4">items : </p>
                <div class="flex justify-between" v-for="items in $store.state.cart" :key="items.id">
                    <p class="text-xs text-left p-2 truncate w-3/4">{{ items.items.title }}</p>
                    <p class="text=sm text-green-700">$ {{ items.items.price }}</p>
                </div>
                <p class="text-left font-bold pt-4">Total Bill :</p>
                <p class="font-semibold text-green-700 text-right"><span>USD</span> {{$store.getters.cartTotal}}</p>
            </div>
            <div class=" p-4 border-t m-4 border-indigo-200">
                <button class="border border-yellow-400 rounded-xl w-2/3 font-bold py-2 px-6 hover:bg-yellow-400 hover:text-white shadow-md">Place Order</button>
            </div>
        </div>
        
    </div>
    
</div>
</template>

<script>
import { TrashIcon } from "@heroicons/vue/outline"
import CartView from '@/components/CartView.vue'

export default {
    name: 'Checkout',
    components: {
        TrashIcon, CartView
    },

    // data() {
    //     return {
    //         noItems: false
    //     }
    // },

    methods:{
        back() {
            this.$router.go(-1)
        },
        removeFromCart(product) {
         this.$store.dispatch('removeFromCart', product)
     },
    },
    computed: {
        cartTotal() {
            return this.$store.getters.cartTotal
        }
    },

    mounted() {
            return this.$store.state.cart
        
    }
}
</script>

<style>

</style>