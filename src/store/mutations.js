import * as types from './mutation-types'

export const productMutations = {
  [types.GET_ALL_PRODUCTS_SUCCESS](state, payload=[]) {
    // Called when products have been fetched
    // Add quantity property cart reactivity
    const arr = payload.map(p => {
      return {
        ...p,
        quantity: 1
      }
    })
    // Updates state products
    state.products = arr
  },
  [types.GET_PRODUCT_BY_ID_SUCCESS](state, payload={}) {
    // Called when product is fetched
    // Add quantity property cart reactivity
    payload.quantity = 1
    // Updates state product
    state.product = payload
  },
  [types.ADD_PRODUCT_SUCCESS](state, payload) {
    state.products.push(payload)
  },
  [types.UPDATE_PRODUCT_SUCCESS](state, payload) {
  },
  [types.REMOVE_PRODUCT_SUCCESS](state, id) {
    const index = state.products.findIndex(p => p._id === id)
    state.products.splice(index, 1)
  },
}

export const manufacturerMutations = {
  [types.GET_ALL_MANUFACTURERS_SUCCESS](state, payload=[]) {
    state.manufacturers = payload
  },
  [types.GET_MANUFACTURER_BY_ID_SUCCESS](state, payload={}) {
    state.manufacturer = payload
  },
  [types.ADD_MANUFACTURER_SUCCESS](state, payload) {
    state.manufacturers.push(payload)
  },
  [types.UPDATE_MANUFACTURER_SUCCESS](state, payload) {
  },
  [types.REMOVE_MANUFACTURER_SUCCESS](state, id) {
    const index = state.manufacturers.findIndex(p => p._id === id)
    state.manufacturers.splice(index, 1)
  }
}

/**
 * Add item(s) to cart
 * @param state
 * @param item
 * @param many
 */
function addToCart(state, item, many = false) {
  const record = state.cart.find(p => {
    return p._id === item._id
  })
  if (!record) {
    state.cart.push({
      ...item,
      quantity: item.quantity
    })
  } else {
    if (many) {
      record.quantity += state.quantity
    } else {
      record.quantity += item.quantity
    }
  }
  localStorage.setItem('CART', JSON.stringify(state.cart));
}

export const cartMutations = {
  /**
   * Add items to cart
   * @param state
   * @param item
   */
  addItemsToCart(state, item) {
    addToCart(state, item, true)
  },
  /**
   * Add item to cart
   * @param state
   * @param item
   */
  addItemToCart(state, item) {
    addToCart(state, item)
  },
  // Called when removing one item from cart
  removeFromCart(state, item) {
    const index = state.cart.findIndex(p => p._id === item._id)
    state.cart.splice(index, 1);
    localStorage.setItem('CART', JSON.stringify(state.cart));
  },
  /**
   * update cart item count
   * @param state
   * @param item
   */
  updateCart(state, item) {
    let record = state.cart.find(p => p._id === item._id)
    if (record) {
      record.quantity = item.quantity
    }
    localStorage.setItem('CART', JSON.stringify(state.cart));
  },
  /**
   * Changing count to prepare to update cart
   * @param state
   * @param quantity
   */
  preUpdateCart(state, quantity) {
    state.quantity = quantity
  }
}

export const statusMutations = {
  [types.PRELOAD](state) {
    state.message =  '正在加载'
    state.code =  -1
  },
  [types.LOADED](state) {
    state.message =  '加载成功'
    state.code =  1
  },
  [types.ERROR](state, message) {
    state.message =  message
    state.code =  0
  }
}

