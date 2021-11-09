<template>
    <SingleProduct v-if="$store.state.showDetails" :item="item" class=""/>
    <div class="px-8 ">
        
        <div class="flex flex-col space-y-3 p-4 md:grid md:grid-cols-4 md:gap-6 md:p-8 bg-gray-50 ">
            <ProductItem v-for="item in items" :key="item.id" :item="item"/>
        </div>
    </div>  

</template>

<script>
import ProductItem from "./ProductItem.vue"
import SingleProduct from "./SingleProduct.vue"

export default {
    name: 'ProductsView',
    components: {
        ProductItem, SingleProduct
    },
    
    computed: {
        items() {
            if(!this.$store.state.selected =='') {
                return this.$store.state.items.filter(item => item.category == this.$store.state.selected)
            } else {
                return this.$store.state.items
            }
        }
    },
        mounted() {
            this.$store.dispatch('getItems')
        }
}
</script>
