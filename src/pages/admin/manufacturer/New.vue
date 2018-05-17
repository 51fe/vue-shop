<template>
  <manufacturer-form
    @save-manufacturer="addManufacturer"
    :model="model">
  </manufacturer-form>
</template>

<script>
import {mapActions} from 'vuex'
import ManufacturerForm from '../../../components/manufacturer/ManufacturerForm'

export default {
  name: 'New',
  components: {ManufacturerForm},
  data () {
    return {
      model: {}
    }
  },
  methods: mapActions(['addManufacturer'])
}
</script>

