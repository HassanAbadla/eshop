<template>
  <div class="flex justify-between py-8 px-4 bg-gray-900  w-full m-auto">

    <div class="flex flex-col w-1/2 place-items-start">
      <div class="flex items-start space-x-1 pb-2">
        <GlobeAltIcon  class=" top-0 left-0 w-8  text-yellow-400" />
        <h1 class="font-bold text-lg tracking-wide pt-1 text-indigo-50 float-left">E-SHOP</h1>
      </div>
      <p class="text-blue-300 text-left text-sm ">WebApp built with Vuejs and Tailwindcss, with data loaded from a public Api</p>
    </div>

    <div class="flex flex-col items-center space-y-2 text-white min-w-1/2 text-xs md:text-base">
      <div class="flex flex-col md:flex md:flex-row md:space-x-1 ">
        <div class="flex space-x-1">
          <InformationCircleIcon class="w-4 md:w-8 text-yellow-400" />
          <h3 class="font-semibold pt-1 text-blue-300">Developed By:</h3>
        </div>
        
        <h4 class="pt-1 text-blue-300">Hassan Alabadla &copy;</h4>
      </div>
      <div class="flex flex-col space-y-2 ">
        <a href="https://twitter.com/Hassan_87"><p class="text-blue-300">&rarr; Twitter</p></a>
        <a href="https://github.com/HassanAbadla"><p class="text-blue-300">&rarr; Github</p></a>
      </div>
    </div>
      
  </div>
</template>

<script>
import { GlobeAltIcon  } from "@heroicons/vue/outline"
import { InformationCircleIcon } from "@heroicons/vue/outline"
export default {
    name: 'footer',
    components: {
      GlobeAltIcon, InformationCircleIcon 
    }
}
</script>