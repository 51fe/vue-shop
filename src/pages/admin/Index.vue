<template>
  <div class="container">
    <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
      <ul class="admin-menu">
        <li>
          <router-link :to="{name: 'Manufacturers'}">品牌列表</router-link>
        </li>
        <li v-if="manufacturers.length > 0">
          <router-link :to="{name: 'AdminProducts'}">商品列表</router-link>
        </li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'Index',
  computed: mapState(['manufacturers'])
}
</script>

<style scoped lang="less">
  @import '../../assets/less/variables';

  .admin-menu a {
    display: block;
    border: 1px solid @red-dark;
    padding: 10px 15px;
    margin-top: 4px;
    margin-bottom: 4px;
    font-weight: bold;
    color: @grey-black;

    :hover {
      color: @grey-dark;
    }

    &.router-link-active {
      border-left-width: 8px;
      text-decoration: none;
    }

    &.router-link-exact-active {
      border-left-width: 8px;
      text-decoration: none;
    }
  }

  .container {
    border-bottom: 2px solid @white-smoke;
    padding: 30px 0;
  }
</style>
