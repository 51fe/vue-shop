import Vue from 'vue';
import Vuex from 'vuex';
import {cartGetters} from "./getters";
import {productMutations, cartMutations, manufacturerMutations, statusMutations} from "./mutations";
import {productActions, manufacturerActions} from "./actions";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    cart: JSON.parse(localStorage.getItem('CART')) || [],
    code: -1,
    message: '',
    product: {},
    products: [],
    manufacturer: {},
    manufacturers: [],
    count: 1
  },

  getters: {...cartGetters},
  mutations: {...statusMutations, ...productMutations, ...manufacturerMutations, ...cartMutations},
  actions: {...productActions, ...manufacturerActions}
});
