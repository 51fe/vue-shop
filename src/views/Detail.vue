<template>
  <div
    v-if="code === 1"
    class="container product-details"
  >
    <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
      <img
        class="img-responsive"
        :src="product.image"
        alt=""
      >
    </div>
    <div class="col-lg-8 col-md-8 col-sm-6 col-xs-12">
      <div class="product-details-description">
        <small>{{ product.manufacturer && product.manufacturer.name }}</small>
        <h4>{{ product.name }}</h4>
        <h5>{{ inventoryInfo }}</h5>
        <hr>
        <div>
          {{ product.description }}
        </div>
      </div>
      <hr>
      <div class="product-details-price-cart">
        <div>{{ product.price | currency }}</div>
        <cart-control
          :product="product"
          :added="added"
          :need-confirmed="true"
        />
        <button
          class="button"
          :disabled="added + count > product.inventory"
          @click="addCartItems(product)"
        >
          加入购物车
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapMutations, mapState} from 'vuex'
import CartControl from '../components/CartControl'

export default {
  name: 'ProductDetail',
  components: {CartControl},
  computed: {
    ...mapGetters(['addedQuantity']),
    ...mapState(['code', 'product', 'count']),
    added() {
      return this.addedQuantity(this.$route.params['id'])
    },
    inventoryInfo() {
      const inventory = this.product.inventory
      const left = inventory - this.added
      if (left > 0) {
        return left + '件可售'
      }
      return '缺货'
    }
  },
  created() {
    // reset count state to 1
    this.willUpdateCartItem(1)
    this.getProductById(this.$route.params['id'])
  },
  methods: {
    ...mapActions(['getProductById']),
    ...mapMutations(['willUpdateCartItem', 'addCartItems'])
  }
}
</script>
