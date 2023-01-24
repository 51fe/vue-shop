import axios from '../utils/request'
import * as types from './mutation-types'

export const productActions = {
  getAllProducts({commit}) {
    commit(types.PRELOAD)
    // Fetch actual products from the API
    axios.get('products').then(response => {
      commit(types.LOADED)
      commit(types.GET_ALL_PRODUCTS_SUCCESS, response.data)
    })
  },
  getProductById({commit}, id) {
    commit(types.PRELOAD)
    // Fetch product by ID from API
    axios.get(`products/${id}`).then(response => {
      commit(types.LOADED)
      commit(types.GET_PRODUCT_BY_ID_SUCCESS, response.data)
    })
  },
  addProduct({commit}, payload) {
    commit(types.PRELOAD)
    // Create a new product via API
    axios.post('products', payload).then(response => {
      commit(types.ADD_PRODUCT_SUCCESS, response.data)
    })
  },
  updateProduct({commit}, payload) {
    commit(types.PRELOAD)
    // Update product via API
    axios.put(`products/${payload._id}`, payload).then(response => {
      commit(types.UPDATE_PRODUCT_SUCCESS, response.data)
    })
  },
  removeProduct({commit}, id) {
    commit(types.PRELOAD)
    // Delete product via API
    axios.delete(`products/${id}`).then(response => {
      commit(types.LOADED)
      commit(types.REMOVE_PRODUCT_SUCCESS, response.data)
    })
  }
}

export const manufacturerActions = {
  getAllManufacturers({commit}) {
    commit(types.PRELOAD)
    axios.get('manufacturers').then(response => {
      commit(types.LOADED)
      commit(types.GET_ALL_MANUFACTURERS_SUCCESS, response.data)
    })
  },

  addManufacturer({commit}, payload) {
    commit(types.PRELOAD)
    axios.post('manufacturers', payload).then(response => {
      commit(types.ADD_MANUFACTURER_SUCCESS, response.data)
    })
  },
  updateManufacturer({commit}, payload) {
    commit(types.PRELOAD)
    axios.put(`manufacturers/${payload._id}`, payload).then(response => {
      commit(types.UPDATE_MANUFACTURER_SUCCESS, response.data)
    })
  },
  removeManufacturer({commit}, id) {
    commit(types.PRELOAD)
    axios.delete(`manufacturers/${id}`).then(response => {
      commit(types.LOADED)
      commit(types.REMOVE_MANUFACTURER_SUCCESS, response.data)
    })
  }
}
