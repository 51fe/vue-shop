<template>
  <div>
    <div class="products">
      <div class="container">
        <template v-for="product in products">
          <product-item :product="product"></product-item>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ProductItem from "./ProductItem";

export default {
  name: 'ProductList',
  components: {ProductItem},
  props: ['products']
}
</script>

<style scoped>
  .products {
    background: #F7F8FB;
    padding: 30px 0;
  }
</style>
