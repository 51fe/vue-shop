<template>
  <div class="container product-details">
    <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 product-details-image">
      <router-link :to="{name: 'Details', params: { id: product._id }}">
        <img class="img-responsive" :src="product.image" alt="">
      </router-link>
    </div>
    <div class="col-lg-8 col-md-8 col-sm-6 col-xs-12 product-details__info">
      <div class="product-details-description">
        <h4>{{product.name}}</h4>
      </div>
      <div class="product-details-price-cart">
        <div>{{product.price | currency }}</div>
        <cart-control :product="product"></cart-control>
        <div>{{product.price * product.quantity | currency }}</div>
        <span class="iconfont icon-delete" title="移除" @click="removeFromCart(product)"></span>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import CartControl from '../cart/CartControl'

export default {
  name: 'CartItem',
  components: {CartControl},
  props: ['product'],
  methods: mapMutations(['removeFromCart'])
}
</script>
