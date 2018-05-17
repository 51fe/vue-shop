<template>
  <manufacturer-form
    @save-manufacturer="updateManufacturer"
    :model="model"
    :isEditing="true">
  </manufacturer-form>
</template>

<script>
import {mapGetters} from 'vuex'
import ManufacturerForm from '../../../components/manufacturer/ManufacturerForm'

export default {
  name: 'Edit',
  components: {ManufacturerForm},
  created() {
    if (!this.model.name) {
      this.$store.dispatch('getManufacturerById', this.$route.params['id'])
    }
  },

  computed: {
    ...mapGetters(['manufacturersById']),
    model() {
      return {
        ...this.manufacturersById(this.$route.params['id'])
      }
    }
  },
  methods: {
    updateManufacturer(model) {
      this.$store.dispatch('updateManufacturer', model)
    }
  }
}
</script>
