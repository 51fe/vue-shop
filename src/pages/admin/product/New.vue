<template>
  <product-form
    @save-product="addProduct"
    :model="model"
    :manufacturers="manufacturers">
  </product-form>
</template>

<script>
import { mapState, mapActions} from 'vuex'
import * as types from '../../../store/mutation-types'
import ProductForm from '../../../components/product/ProductForm'

export default {
  name: 'NewProduct',
  components: {ProductForm},
  data () {
    return {
      model: {
        manufacturer: {}
      }
    }
  },
  beforeCreate () {
    this.$store.dispatch('getAllManufacturers');
    this.$store.subscribe(mutation => {
      if (mutation.payload) {
        if (mutation.type == types.GET_ALL_MANUFACTURERS_SUCCESS) {
          this.model.manufacturer = this.manufacturers[0]
        }
      }
    })
  },
  computed: mapState(['manufacturers']),
  methods: mapActions(['addProduct'])
}
</script>
