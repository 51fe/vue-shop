<template>
  <div v-bind:class="'toast toast-' + option.type" @click="clicked()" v-on:mouseover="onMouseOver"
    v-on:mouseout="onMouseOut">
    <div class="toast-title" v-html="option.title">
    </div>
    <div class="toast-message" v-html="option.msg">
    </div>
  </div>
</template>
<script>

export default {
  name: 'VueToast',
  props: ['option'],
  created() {
    if (this.option.timeout !== undefined && this.option.timeout !== 0) {
      this.setTimeout()
    }
  },
  methods: {
    // Enter Hover
    onMouseOver() {
      if (this.option.onMouseOver !== undefined) {
        this.option.onMouseOver()
      }
      if (!this.option.closeOnHover) {
        clearInterval(this.option.intervalId)
      }
    },
    // Leave Hover
    onMouseOut() {
      if (this.option.onMouseOut !== undefined) {
        this.option.onMouseOut()
      }
      if (!this.option.closeOnHover) {
        this.setTimeout()
      }
    },
    // Set timeout to close
    setTimeout() {
      this.option.intervalId = setTimeout(() => {
        this.close()
      }, this.option.timeout)
    },
    // Clicked Toast
    clicked() {
      if (this.option.onClicked !== undefined) {
        this.option.onClicked()
      }
      this.clickClose()
    },
    // Click Close?
    clickClose() {
      if (this.option.clickClose !== undefined && this.option.clickClose === false) {
        return
      }
      this.close()
    },
    // Close Toast
    close() {
      // if toast not manuel closed.
      if (this.$parent !== null) {
        this.$parent.removeToast(this.option)
      }
    }
  }
}
</script>
