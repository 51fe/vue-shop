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
  [types.UPDATE_PRODUCT_SUCCESS]() {
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
  [types.ADD_MANUFACTURER_SUCCESS](state, payload) {
    state.manufacturers.push(payload)
  },
  [types.UPDATE_MANUFACTURER_SUCCESS]() {
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
  const product = state.cart.find(p => {
    return p._id === item._id
  })
  const count = many ? state.count : 1
  if (!product) {
    state.cart.unshift({
      ...item,
      quantity: count
    })
  } else {
    product.quantity += count
  }
  localStorage.setItem('CART', JSON.stringify(state.cart));
}

export const cartMutations = {
  /**
   * Add items to cart
   * @param state
   * @param item
   */
  addCartItems(state, item) {
    addToCart(state, item, true)
  },
  /**
   * Add item to cart
   * @param state
   * @param item
   */
  addCartItem(state, item) {
    addToCart(state, item)
  },
  // Called when removing one item from cart
  removeCartItem(state, item) {
    const index = state.cart.findIndex(p => p._id === item._id)
    state.cart.splice(index, 1);
    localStorage.setItem('CART', JSON.stringify(state.cart));
  },
  /**
   * update cart item count
   * @param state
   * @param item
   */
  updateCartItem(state, item) {
    let product = state.cart.find(p => p._id === item.id)
    if (product) {
      product.quantity = item.count
    }
    localStorage.setItem('CART', JSON.stringify(state.cart));
  },
  /**
   * Changing count to prepare to update cart
   * @param state
   * @param count
   */
  willUpdateCartItem(state, count) {
    state.count = count
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

