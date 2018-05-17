import Vue from 'vue';
import Vuex from 'vuex';
import {manufacturerGetters, productGetters, cartGetters} from "./getters";
import {common, productMutations, cartMutations, manufacturerMutations, statusMutations} from "./mutations";
import {productActions, manufacturerActions} from "./actions";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    cart: JSON.parse(localStorage.getItem('CART')) || [],
    code: -100,
    message: '',
    product: {},
    products: [],
    manufacturer: {},
    manufacturers: [],
    quantity: 1
  },

  getters: {...productGetters, ...manufacturerGetters, ...cartGetters},
  mutations: {...statusMutations, ...productMutations, ...manufacturerMutations, ...cartMutations},
  actions: {...productActions, ...manufacturerActions}
});
