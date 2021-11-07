import { createStore } from 'vuex'
import axios from 'axios'
import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css'

export default createStore({
  state: {
    counter: 0,
    items: [],
    categories: [],
    cart: [],
    selected: '',
    showCart: false,
    showDetails: false,
    productDetails: '',
    totalBill: 0

  },

  mutations: {
    counter(state, {items}){

      state.totalBill= state.cart.price += state.cart.price
      let cartItem = state.cart.find(item => {
        return item.items.id === items.id
        
      });
      
      if(cartItem) {
        return (
          createToast({title:'Item already in Cart'},
          {type:'danger', showIcon: true, timeout:2500,toastBackgroundColor: '#8a2c42'} )
          )}
      
      state.cart.push({items})
      createToast({title:'Success', description:'Item added to Cart'},
      {type:'success', showIcon: true, timeout:2500, toastBackgroundColor:'#278f63'} )
      state.counter +=1
    },
    getItems(state, items) {
        state.items = items
    },
    getCategories(state, categories) {
      state.categories = categories
    },
    setFilter(state, newValue) {
      state.selected = newValue
    },
    
    toggleCart(state) {
      state.showCart = !state.showCart
    },
    removeFromCart(state, product) {
      state.cart = state.cart.filter(item => {
        return item.items.id !== product.id
      })
      state.counter -=1
    },
    toggleDetails(state){
      state.showDetails = !state.showDetails
    },
    details(state, {product}) {
      state.productDetails = product
      state.showDetails = !state.showDetails
    }
  },

  actions: {
    getItems({ commit }) {
      axios.get('https://fakestoreapi.com/products').then(response => {
        commit('getItems', response.data)
      })
    },
    getCategories({ commit }) {
      axios.get('https://fakestoreapi.com/products/categories').then(res => {
        commit('getCategories', res.data)
      })
    },
    counter({ commit }, {items}) {
      commit('counter', {items})
    },
    removeFromCart({ commit }, product) {
      commit('removeFromCart', product)
    },
    details({ commit }, {product}){
      commit('details', {product})
    }
  },

  getters: {
    cartTotal(state) {
      let total = 0;
      state.cart.forEach(item => {
        total += item.items.price
      })
      return total;
    }
  },

  modules: {
  }
})
