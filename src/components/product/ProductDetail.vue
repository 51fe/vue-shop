<template>
  <div class="container product-details">
    <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 product-details-image">
      <img
        class="img-responsive" :src="product.image" alt="">
    </div>
    <div class="col-lg-8 col-md-8 col-sm-6 col-xs-12 product-details__info">
      <div class="product-details-description">
        <small>{{product.manufacturer && product.manufacturer.name}}</small>
        <h4>{{product.name}}</h4>
        <div>
          {{product.description}}
        </div>
      </div>
      <div class="product-details-price-cart">
        <div>{{product.price | currency }}</div>
        <cart-control :product="product" :preparing="true"></cart-control>
        <button class="button" @click="addItemsToCart(product)">加入购物车</button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations, mapState} from 'vuex'

import CartControl from "../cart/CartControl";

export default {
  name: 'ProductDetail',
  components: {CartControl},
  props: ['product'],
  methods: mapMutations(['addItemsToCart'])
}
</script>
