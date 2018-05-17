<template>
  <button class="button" @click="addItemsToCart(product)">加入购物车</button>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'AddToCartButton',
  props: ['product', 'once'],
  methods: mapMutations(['addItemsToCart'])
}
</script>
