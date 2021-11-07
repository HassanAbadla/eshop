<template>
  <div class="border border-indigo-100 rounded-full ">
            <button @click="itemQty -=1" class="py-2 px-3 border-r hover:bg-gray-100 rounded-l-full font-semibold border-indigo-100">-</button>
            <input type="text" name="" id="" class=" text-sm w-6 px-1" :value="itemQty">
            <button @click="itemQty +=1" class="py-2 px-3 border-l hover:bg-gray-100 rounded-r-full font-semibold border-indigo-100">+</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            itemQty: 1
        }
    },
}
</script>

<style>

</style>