<template>
  <div id="app">
    <nav>
      <div class="container">
        <ul class="nav-left">
          <li>
            <router-link
              :to="{name: 'Home'}"
              exact
            >
              <i class="iconfont icon-home" /> 首页
            </router-link>
          </li>
          <li>
            <router-link :to="{name: 'Admin'}">
              <i class="iconfont icon-admin" /> 管理
            </router-link>
          </li>
        </ul>
        <ul class="nav-right">
          <li>
            <router-link
              :to="{name: 'Cart'}"
              exact
            >
              <i class="iconfont icon-cart" /> 购物车 ({{ cartItemsCount }})
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view class="main-view" />
    <loading v-show="code === -1" />
  </div>
</template>

<script>
import {mapGetters, mapState} from 'vuex'
import Loading from "./components/Loading"

import * as types from './store/mutation-types'


export default {
  name: 'App',
  components: {Loading},
  computed: {
    ...mapState(['code', 'message']),
    ...mapGetters(['cartItemsCount']),
  },
  created() {
    // Subscriptions for mutation
    this.$store.subscribe(mutation => {
      if (mutation.payload) {
        switch (mutation.type) {
          case types.ADD_PRODUCT_SUCCESS:
            this.$toast.success('新建产品成功！', '消息')
            this.$router.push({name: 'AdminProducts'})
            break;
          case types.UPDATE_PRODUCT_SUCCESS:
            this.$toast.success('修改产品成功！', '消息')
            this.$router.push({name: 'AdminProducts'})
            break;
          case types.REMOVE_PRODUCT_SUCCESS:
            this.$toast.success('产品删除成功！', '消息')
            break;
          case types.ADD_MANUFACTURER_SUCCESS:
            this.$toast.success('新建品牌成功！', '消息')
            this.$router.push({name: 'Manufacturers'})
            break;
          case types.UPDATE_MANUFACTURER_SUCCESS:
            this.$toast.success('修改品牌成功！', '消息')
            this.$router.push({name: 'Manufacturers'})
            break;
          case types.REMOVE_MANUFACTURER_SUCCESS:
            this.$toast.success('删除品牌成功！', '消息')
            break;
          case types.ADD_CART_ITEMS:
            if (this.$route.params.id) {
              this.$router.push({name: 'Cart'})
            }
            break;
          case types.ERROR:
            this.$toast.error(this.message, '消息')
            break;
          default:
            break;
        }
      }
    })
  },
}
</script>
<style lang="less">
  @import 'styles/variables';
  @import 'styles/mixin';

  #app {
    nav {
      font-weight: 300;
      text-transform: uppercase;
      background: @grey-black;

      .container {
        display: flex;
      }

      .nav-left {
        flex-grow: 3;
        display: flex;
      }

      .nav-right {
        flex-grow: 2;
        display: flex;
        flex-direction: row-reverse;
      }

      li a {
        display: block;
        padding: 13px 16px;
        color: #fff;
        transition: color 150ms ease-out;
      }

      :hover {
        text-decoration: none;
        color: #a6a6a6;
      }

      :focus {
        text-decoration: none;
      }

      .router-link-active, router-link-exact-active {
        color: @red;
      }

      @media screen and (min-width: 768px) {
        .iconfont {
          margin-right: 4px;
        }
      }
    }

    .main-view {
      position: absolute;
      left: 0;
      right: 0;
      top: 50px;
      bottom: 0;
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
      .scrollBar;
    }
  }
</style>

