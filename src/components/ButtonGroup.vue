<template>
  <div class="form-group pull-right">
    <button
      type="button"
      class="button grey"
      @click="goBack"
    >
      取消
    </button>
    <button
      type="submit"
      class="button"
    >
      {{ isEditing ? '修改' : '添加' }}
    </button>
  </div>
</template>

<script>
export default {
  name: "ButtonGroup",
  props: {
    isEditing: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    goBack() {
      history.back()
    }
  }
}
</script>

<style type="less" scoped>
  .button {
    padding-top: 5px;
    padding-bottom: 5px;
  }
</style>
