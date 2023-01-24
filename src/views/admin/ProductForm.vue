<template>
  <form @submit.prevent="saveProduct">
    <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
      <div class="form-group">
        <label>产品名</label>
        <input
          v-model="form.name"
          v-validate="'required'"
          type="text"
          class="form-control"
          placeholder="产品名"
          name="name"
          :class="{'error': errors.has('name') }"
        >
        <span
          v-show="errors.has('name')"
          class="small text-danger"
        >产品名不能为空</span>
      </div>
      <div class="form-group">
        <label>价格</label>
        <input
          v-model="form.price"
          v-validate="'required'"
          type="number"
          class="form-control"
          placeholder="价格"
          name="price"
          :class="{'error': errors.has('price') }"
        >
        <span
          v-show="errors.has('price')"
          class="small text-danger"
        >价格不能为空</span>
      </div>

      <div class="form-group">
        <label>库存</label>
        <input
          v-model="form.inventory"
          v-validate="'required'"
          type="number"
          class="form-control"
          placeholder="库存"
          name="inventory"
          :class="{'error': errors.has('inventory') }"
        >
        <span
          v-show="errors.has('inventory')"
          class="small text-danger"
        >库存不能为空</span>
      </div>
    </div>

    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
      <div class="form-group">
        <label>品牌</label>
        <select
          v-model="form.manufacturer"
          v-validate="'required'"
          class="form-control"
          placeholder="品牌"
          name="manufacturer"
          :class="{'error': errors.has('manufacturer') }"
        >
          <option
            v-for="manufacturer in manufacturers"
            :key="manufacturer._id"
            :value="manufacturer"
          >
            {{ manufacturer.name }}
          </option>
        </select>
      </div>
      <div class="form-group">
        <label>图片</label>
        <input
          v-model="form.image"
          v-validate="'required|url'"
          type="text"
          class="form-control"
          placeholder="图片"
          name="image"
          :class="{'error': errors.has('image')}"
        >
        <span
          v-show="errors.has('image')"
          class="small text-danger"
        >图片不能为空且有效</span>
      </div>
      <div class="form-group">
        <label>描述</label>
        <textarea
          v-model="form.description"
          v-validate="'required'"
          type="number"
          class="form-control"
          placeholder="描述"
          rows="5"
          name="description"
          :class="{'error': errors.has('description') }"
        />
        <span
          v-show="errors.has('description')"
          class="small text-danger"
        >描述不能为空</span>
      </div>
      <button-group :is-editing="isEditing" />
    </div>
  </form>
</template>

<script>
import ButtonGroup from '../../components/ButtonGroup'
import {mapState, mapActions} from "vuex";

export default {
  name: 'ProductForm',
  components: {ButtonGroup},
  props: {
    product: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      form: {}
    }
  },
  computed: {
    ...mapState(['manufacturers']),
    isEditing() {
      return this.product !== undefined
    }
  },
  created () {
    this.getAllManufacturers()
    if (this.isEditing) {
      this.form = { ...this.product }
    } else {
      this.form = {}
    }
  },
  methods: {
    ...mapActions(['addProduct', 'updateProduct', 'getAllManufacturers']),
    saveProduct() {
      this.$validator.validateAll().then(isValid => {
        if(isValid) {
          const form = this.form
          this.$emit('save-product', this.isEditing ? this.updateProduct(form) : this.addProduct(form))
        } else {
          this.$toast.error('请确保表单填写正确');
        }
      })
    },
    goBack() {
      history.back()
    }
  }
}
</script>
