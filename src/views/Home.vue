<template>
  <div
    v-if="code === 1"
    class="home"
  >
    <h4 class="title">
      <div v-if="products.length === 0">
        产品还没上架，请在管理页面
        <router-link :to="{name: 'Admin'}">
          添加
        </router-link>
      </div>
      <div
        v-else
        class="iconfont icon-sale"
      >
        热卖中...
      </div>
    </h4>
    <div class="products">
      <div class="container">
        <product-item
          v-for="product in products"
          :key="product._id"
          :product="product"
        />
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import ProductItem from "../components/ProductItem";

export default {
  name: 'Home',
  components: {ProductItem},
  computed: mapState(['products', 'code']),
  created() {
    this.getAllProducts()
  },
  methods: mapActions(['getAllProducts'])
};
</script>

<style lang="less">
  @import '../styles/variables';

  .home {
    .products {
      background: #f7f8fb;
      padding: 30px 0;
    }

    .iconfont {
      &.icon-sale {
        font-size: 18px;
        color: @red;
      }
    }
  }
</style>
