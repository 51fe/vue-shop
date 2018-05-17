<template>
  <div class="cart-control">
    <div class="cart-decrease" title="减"
      @click.stop.prevent="decrement(product)">
      <span class="iconfont icon-remove-circle"></span>
    </div>
    <input class="cart-count" :value="count"
      @input="inputHandler"></input>
    <div class="cart-add" title="加" @click.stop.prevent="increment(product)">
      <span class="iconfont icon-add-circle"></span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CartControl',
  props: ['product', 'preparing'],

  data() {
    return {
      count: this.product.quantity || 1
    }
  },

  watch: {
    count: function(count) {
      if (this.preparing) {
        this.$store.commit('preUpdateCart', count)
      } else {
        this.$store.commit('updateCart', {
            _id: this.product._id,
            quantity: count
          }
        )
      }
    }
  },

  methods: {
    increment() {
      if (this.count < this.product.inventory) {
        this.count++
      }
    },

    decrement() {
      if (this.count > 1) {
        this.count--
      }
    },

    inputHandler(e) {
      let val = e.target.value
      // Should be a positive integer
      if (/^[1-9]\d*$/.test(val) && val < this.product.inventory) {
        this.count = parseInt(val)
      } else {
        event.target.value = this.count
      }
    }
  }
}
</script>
<style lang="less" scoped>
  .cart-control {
    div {
      display: inline-block;
      vertical-align: middle;
      line-height: 24px;
    }

    .cart-count {
      display: inline-block;
      width: 40px;
      padding: 2px 6px;
      color: #555555;
      background-color: #fff;
      border: 1px solid #ccc;
      font-size: 14px;
      text-align: center;
    }

    .cart-add {
      margin-right: 8px;
    }
  }

</style>
