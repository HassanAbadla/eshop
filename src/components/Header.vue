<template>
  <div class=" fixed bg-blue-900 p-4 min-h-10 w-full justify-center z-10 shadow-lg opacity-90" >
    
    <div class="inline-block w-1/2 ">
      <h2 class="font-semibold text-lg md:font-black md:text-xl tracking-widest -mr-8 md:m-0 uppercase text-white">e-shop</h2>
    </div>
    <div class="float-right space-y-2">
      <p class="top-0 right-0 -m-1 bg-yellow-400 rounded-full float-right text-xs w-4">{{$store.state.counter}}</p>
        <ShoppingCartIcon  @click="$store.commit('toggleCart') " class="h-8 w-8 text-gray-400 hover:text-indigo-700" />
    </div>
  </div>
</template>

<script>
import {ShoppingCartIcon} from '@heroicons/vue/outline'

export default {
    name: 'header',
    components: {
      ShoppingCartIcon
    },
}
</script>