<template>
  <div class="col-lg-9 col-md-9 col-sm-12 col-xs-12 admin-manufacturers">
    <table class="table table-striped">
      <thead>
        <tr>
          <th>{{ count > 0 ? '品牌名' : '品牌列表为空' }}</th>
          <th colspan="2">
            <router-link :to="{name: 'NewManufacturer'}">
              添加
            </router-link>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="manufacturer in manufacturers"
          :key="manufacturer._id"
        >
          <td>{{ manufacturer.name }}</td>
          <td>
            <router-link
              title="编辑"
              :to="{name: 'EditManufacturer', params: { manufacturer }}"
            >
              <i class="iconfont icon-edit" />
            </router-link>
          </td>
          <td>
            <a
              title="删除"
              @click="deleteManufacturer(manufacturer._id)"
            >
              <i class="iconfont icon-delete" />
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'

export default {
  name: 'ManufacturerList',
  computed: {
    ...mapState(['manufacturers']),
    count() {
      return this.manufacturers.length
    }
  },
  created() {
    this.getAllManufacturers()
  },
  methods: {
    ...mapActions(['getAllManufacturers', 'removeManufacturer']),
    deleteManufacturer(id) {
      this.$confirm('确定要删除该品牌？')
        .then(confirmed => {
          if (confirmed) {
            this.removeManufacturer(id)
          }
        })
    }
  }
}
</script>

<style lang="less">
  .admin-manufacturers {
    th {
      &:first-child {
        width: 90%
      }

      &:last-child {
        text-align: center;
      }

      a {
        cursor: pointer;
      }
    }

    @media screen and (max-width: 767px) {
      th:first-child {
        width: 80%
      }
    }
  }
</style>
