<template>
  <div class="container admin">
    <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
      <ul class="admin-menu">
        <li>
          <router-link :to="{name: 'Manufacturers'}">
            品牌列表
          </router-link>
        </li>
        <li v-if="manufacturers.length > 0">
          <router-link :to="{name: 'AdminProducts'}">
            商品列表
          </router-link>
        </li>
      </ul>
    </div>
    <router-view />
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'Admin',
  computed: mapState(['manufacturers'])
}
</script>

<style lang="less">
  @import '../../styles/variables';

  .admin {
    padding-top: 30px;
    padding-bottom: 30px;
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

      &.router-link-active, &.router-link-exact-active {
        border-left-width: 8px;
        text-decoration: none;
      }
    }

    @media screen and (max-width: 767px) {
      .container {
        padding-left: 0;
        padding-right: 0;

        &.admin {
          padding-top: 15px;
          padding-bottom: 15px;
        }
      }

      .admin-menu {
        margin-bottom: 15px;
      }
    }
  }
</style>
