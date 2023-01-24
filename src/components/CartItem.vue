<template>
  <div class="container product-details">
    <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
      <router-link :to="{name: 'Detail', params: { id: product._id }}">
        <img
          class="img-responsive"
          :src="product.image"
          alt=""
        >
      </router-link>
    </div>
    <div class="col-lg-8 col-md-8 col-sm-6 col-xs-12">
      <div class="product-details-description">
        <h4>{{ product.name }}</h4>
      </div>
      <div class="product-details-price-cart">
        <div>{{ product.price | currency }}</div>
        <cart-control
          :product="product"
          :added="added"
        />
        <div>{{ product.price * product.quantity | currency }}</div>
        <span
          class="iconfont icon-delete"
          title="移除"
          @click="removeCartItem(product)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
import CartControl from './CartControl'

export default {
  name: 'CartItem',
  components: {CartControl},
  props: {
    product: {
      type: Object,
      default: function(){}
    }
  },
  computed:{
    ...mapGetters(['addedQuantity']),
    added() {
      return this.addedQuantity(this.product._id)
    }
  },
  methods: mapMutations(['removeCartItem'])
}
</script>
