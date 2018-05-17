<template>
  <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
    <div class="product">
      <router-link :to="{name: 'Details', params: { id: product._id }}" class="product-link">
        <div class="product-image">
          <img
            class="img-responsive" :src="product.image" alt="">
        </div>
        <div class="product-description">
          <div class="product-info">
            <small>{{product.manufacturer.name}}</small>
            <h4>{{product.name}}</h4>
          </div>
          <div class="product-price-cart">
            {{product.price | currency }}
          </div>
        </div>
      </router-link>
      <div class="product-action">
        <button class="button" @click="addItemToCart(product)">加入购物车</button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import AddToCartButton from "./AddToCartButton";

export default {
  name: 'ProductItem',
  components: {AddToCartButton},
  props: ['product'],
  methods: mapMutations(['addItemToCart'])
}
</script>

<style lang="less">
  @import '../../assets/less/variables';

  .product {
    background: #fff;
    margin-bottom: 30px;
    position: relative;
    overflow: hidden;
    .product-description, .product-action {
      transition: 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) all;
    }

    &:hover {
      .product-description {
        opacity: .8;
        transform: translateY(-40px);
      }

      .product-action {
        transform: none;
      }
    }



    .product-image {
      width: 100%;
      img {
        display: block;
        margin-left: auto;
        margin-right: auto;
        height: 225px;
      }
    }

    .product-link {
      display: block;
      color: #3d3d3d;
      &:hover {
        text-decoration: none;
      }
    }
  }

  .product-description {
    width: 100%;
    display: flex;
    padding: 20px 20px 15px;
    background: #fff;
    small {
      color: @grey;
    }
  }

  .product-info {
    flex: 2;
  }

  .product-description

  .product-description h4 {
    font-size: 16px;
    margin-top: 16px;
  }

  .product-price-cart {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
    color: #51d2b7;

    p {
      flex-grow: 2;
      font-size: 20px;
      font-weight: bold;
    }
  }

  .product-action {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    transform: translateY(100%);
    button {
      border-radius: 0;
      width: 100%;
      display: block;
    }
  }
</style>
