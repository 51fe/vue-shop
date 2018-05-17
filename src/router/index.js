import Vue from 'vue';
import Router from 'vue-router';

import Home from '../pages/Home';
import Cart from '../pages/Cart';
import Details from '../pages/Detail';
import Index from '../pages/admin/Index';
import NewProduct from '../pages/admin/product/New';
import Products from '../pages/admin/product/Products';
import EditProduct from '../pages/admin/product/Edit';
import NewManufacturer from '../pages/admin/manufacturer/New';
import Manufacturers from '../pages/admin/manufacturer/Manufacturers';
import EditManufacturer from '../pages/admin/manufacturer/Edit'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      redirect: Products
    },
    {
      path: '/products',
      name: 'Products',
      component: Home,
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Index,
      redirect: Manufacturers,
      children: [
        {
          path: 'products',
          name: 'AdminProducts',
          component: Products
        },
        {
          path: 'products/new',
          name: 'NewProduct',
          component: NewProduct,
        },
        {
          path: 'products/edit/:id',
          name: 'EditProduct',
          component: EditProduct,
        },
        {
          path: 'manufacturers',
          name: 'Manufacturers',
          component: Manufacturers,
        },
        {
          path: 'manufacturers/new',
          name: 'NewManufacturer',
          component: NewManufacturer,
        },
        {
          path: 'manufacturers/edit/:id',
          name: 'EditManufacturer',
          component: EditManufacturer,
        }
      ]
    },
    {
      path: '/products/:id',
      name: 'Details',
      component: Details
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart,
    }
  ]
});
