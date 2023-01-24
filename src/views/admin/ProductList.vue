<template>
  <div class="col-lg-9 col-md-9 col-sm-12 col-xs-12 admin-product-list ">
    <table class="table table-striped">
      <thead>
        <tr>
          <template v-if="products.length > 0">
            <th>商品名</th>
            <th>价格</th>
            <th>库存</th>
            <th>品牌</th>
          </template>
          <template v-else>
            <th colspan="4">
              产品列表为空
            </th>
          </template>
          <th colspan="2">
            <router-link :to="{name: 'NewProduct'}">
              添加
            </router-link>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="product in products"
          :key="product._id"
        >
          <td class="name">
            {{ product.name }}
          </td>
          <td class="price">
            {{ product.price }}
          </td>
          <td class="inventory">
            {{ product.inventory }}
          </td>
          <td class="manufacturer">
            {{ product.manufacturer.name }}
          </td>
          <td>
            <router-link
              title="编辑"
              :to="{name: 'EditProduct', params: { product }}"
            >
              <i class="iconfont icon-edit" />
            </router-link>
          </td>
          <td>
            <i
              class="iconfont icon-delete"
              title="删除"
              @click="deleteProduct(product._id)"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState, mapActions} from 'vuex'

export default {
  name: 'ProductList',
  computed: mapState(['products']),

  created() {
    this.getAllProducts()
  },

  methods: {
    ...mapActions(['getAllProducts', 'removeProduct']),
    deleteProduct(id) {
      this.$confirm('确定要删除该商品？').then(confirmed => {
        if (confirmed) {
          this.removeProduct(id)
        }
      })
    }
  }
}
</script>

<style lang="less">
  .admin-product-list {
    .name {
      width: 40%;
    }

    .price {
      width: 15%;
    }

    .inventory {
      width: 15%;
    }

    .manufacturer {
      width: 20%;
    }

    @media screen and (max-width: 767px) {
      .price {
        width: 18%;
      }

      .inventory {
        width: 18%;
      }
    }

    td:last-child {
      text-align: right;
    }
  }
</style>
