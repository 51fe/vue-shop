export const productGetters = {
  // All products
  allProducts: state => {
    return state.products
  },
  // Get Product by ID
  productById: (state, getters) => id => {
    if (getters.allProducts.length > 1) {
      return getters.allProducts.find(p => p._id === id)
    } else {
      return state.product
    }
  }
}

export const manufacturerGetters = {
  // Get Manufacturer by ID
  manufacturersById: (state, getters) => id => {
    if (state.manufacturers.length > 0) {
      return state.manufacturers.find(p => p._id === id)
    } else {
      return state.manufacturer
    }
  }
}

export const cartGetters = {
  cartItemsCount:  (state, getter) => {
    let total = 0;
    state.cart.forEach(p => {
      total += p.quantity;
    });
    return total;
  }
}
