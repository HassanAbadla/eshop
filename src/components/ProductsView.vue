<template>
    <SingleProduct v-if="$store.state.showDetails" :item="item" class=""/>
    <div class="px-8 ">
        
        <div class="grid grid-cols-4 gap-6 p-8 bg-gray-50 ">
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
