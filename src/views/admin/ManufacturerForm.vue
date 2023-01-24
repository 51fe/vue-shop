<template>
  <form @submit.prevent="saveManufacturer">
    <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
      <div class="form-group">
        <label>品牌名</label>
        <input
          v-model="form.name"
          v-validate="'required'"
          type="text"
          class="form-control"
          placeholder="品牌名"
          name="name"
          :class="{'error': errors.has('name') }"
        >
        <span
          v-show="errors.has('name')"
          class="small text-danger"
        >品牌名不能为空</span>
      </div>
      <button-group :is-editing="isEditing" />
    </div>
  </form>
</template>

<script>
import {mapActions} from 'vuex'
import ButtonGroup from '../../components/ButtonGroup'

export default {
  name: 'ManufacturerForm',
  components: {ButtonGroup},
  props: {
    manufacturer: {
      type: Object,
      default: () => {}
    },
  },
  data() {
    return {
      form: {}
    }
  },
  computed: {
    isEditing() {
      return this.manufacturer !== undefined
    }
  },
  created() {
    if (this.isEditing) {
      this.form = { ...this.manufacturer }
    } else {
      this.form = {}
    }
  },
  methods: {
    ...mapActions(['addManufacturer', 'updateManufacturer']),
    saveManufacturer () {
      this.$validator.validateAll().then(isValid => {
        if (isValid) {
          const form = this.form
          this.$emit('save-manufacturer',
            this.isEditing ? this.updateManufacturer(form) : this.addManufacturer(form));
        } else {
          this.$toast.error('请确保表单填写正确');
        }
      })
    }
  }
}
</script>
