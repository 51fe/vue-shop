<template>
  <div class="cart">
    <div class="cart-list">
      <div class="title">
        <h4><i class="iconfont icon-superpowers" /> {{ title }}</h4>
      </div>
      <cart-item
        v-for="product in cart"
        :key="product._id"
        :product="product"
      />
    </div>
    <div
      v-if="cart.length > 0"
      class="footer"
    >
      <div class="toolbar-wrap">
        <div class="amount-sum">
          <em>{{ cartItemsCount }}</em>件商品
        </div>
        <div class="price-sum">
          总价：<em>{{ priceSum | currency }}</em>
        </div>
        <button
          class="button go-pay-button"
          @click="goPay"
        >
          去结算
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
import * as types from '../store/mutation-types'
import axios from "../utils/request";
import CartItem from "../components/CartItem";


export default {
  name: 'Cart',
  components: {CartItem},
  computed: {
    ...mapState(['cart', 'ordered']),
    ...mapGetters(['cartItemsCount', 'cartPriceSum']),
    title() {
      return this.cartItemsCount > 0 ? '您的购物车' : '购物车是空的'
    },

    priceSum() {
      let total = 0;
      this.cart.forEach(cart => {
        total += cart.price * cart.quantity
      });
      return total;
    },
  },
  created(){
    // no need load
    this.$store.commit(types.LOADED)
  },
  methods: {
    ...mapActions(['updateProduct']),
    ...mapMutations(['removeCartItem']),
    goPay() {
      this.cart.forEach(async item => {
        await axios.put(`products/${item._id}`, {
          ...item,
          inventory: item.inventory - item.quantity
        })
        this.removeCartItem(item)
      })
      this.$alert('功能有待添加')
    }
  },
}
</script>

<style lang="less">
  @import '../styles/variables';
  @import '../styles/mixin';

  .cart {
    overflow-y: hidden;
    .cart-list {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 64px;
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
      .scrollBar;
    }
    .footer {
      position: fixed;
      bottom: 0;
      width: 100%;
      height: 64px;
      line-height: 64px;
      background-color: ghostwhite;
      border-top: 2px solid @white-smoke;
      overflow-y: hidden;
    }

    .toolbar-wrap {
      float: right;
      padding-right: 4%;
    }

    .amount-sum, .price-sum {
      display: inline-block;
      padding-right: 4px;
    }

    em {
      color: @red;
      font-weight: bold;
    }

    .go-pay-button {
      line-height: normal;
      padding-left: 32px;
      padding-right: 32px;
    }
  }
</style>
