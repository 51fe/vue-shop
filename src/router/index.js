import Vue from 'vue'
import Router from 'vue-router'

import Home from '../views/Home'
import Cart from '../views/Cart'
import Detail from '../views/Detail'
import Admin from '../views/admin'
import ProductList from '../views/admin/ProductList'
import ProductForm from '../views/admin/ProductForm'
import ManufacturerList from '../views/admin/ManufacturerList'
import ManufacturerForm from '../views/admin/ManufacturerForm'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
      redirect: '/admin/manufacturers',
      children: [
        {
          path: 'products',
          name: 'AdminProducts',
          component: ProductList
        },
        {
          path: 'products/new',
          name: 'NewProduct',
          component: ProductForm
        },
        {
          path: 'products/edit',
          name: 'EditProduct',
          component: ProductForm,
          props: true
        },
        {
          path: 'manufacturers',
          name: 'Manufacturers',
          component: ManufacturerList
        },
        {
          path: 'manufacturers/new',
          name: 'NewManufacturer',
          component: ManufacturerForm,
        },
        {
          path: 'manufacturers/edit',
          name: 'EditManufacturer',
          component: ManufacturerForm,
          props: true
        }
      ]
    },
    {
      path: '/products/:id',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '*',
      redirect: '/',
    }
  ]
});
