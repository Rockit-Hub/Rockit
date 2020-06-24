<template>
    <div class="content-right">
        <el-button @click="showModal" type="primary">新增banner</el-button>
        <el-table
        :data="tableData"
        >
            <el-table-column
              label="封面"
              prop="cover"
            >
                <template slot-scope="scope">
                    <!-- <span>{{scope.row.cover}}</span> -->
                    <img width="150" :src="scope.row.cover" />
                </template>
            </el-table-column>
            <el-table-column
              label="开始时间"
              prop="created_at"
            >
            </el-table-column>
            <el-table-column
              label="更新时间"
              prop="updated_at"
            >
            </el-table-column>
            <el-table-column
              label="状态"
            >
            <template slot-scope="scope">
                <el-link type="primary">{{scope.row.status == 1 ? '下线' : '上线'}}</el-link>
                <!-- <a></a> -->
            </template>
            </el-table-column>
            <el-table-column
              label="操作"
            >
            <template>
                <el-link type="primary">编辑</el-link>
                <el-link type="danger">删除</el-link>
                <el-link>查看</el-link>
                <!-- <a></a> -->
            </template>
            </el-table-column>
        </el-table>

        <el-dialog
        :visible="isShowDialog"
        title="新增banner"
        :modal="false"
        :before-close="closeModel"
        >
        <AddBanner></AddBanner>
        </el-dialog>
    </div>
</template>

<script>
import AddBanner from './AddBanner.vue'

export default {
  data() {
    return {
      isShowDialog: false,
      tableData: [{
        cover: 'https://sp-webfront-cn.oss-cn-hangzhou.aliyuncs.com/skypixel/v2/public/website/assets/1591243567166-d2bb63ea2f8dfaa49051c281bbdbd238.jpg',
        created_at: '2020-02-20T08:41:22Z',
        language: 'zh-Hans',
        link_url: 'https://www.skypixel.com/users/hello-5ee20873-574d-4096-b43b-f8675656792f?from=PCWeb-banner_skypixel-creator',
        sequence: 0,
        status: 1,
        updated_at: '2020-06-04T04:06:10Z',
      }]
    }
  },
  components: {
    AddBanner
  },
  methods: {
    showModal() {
      this.isShowDialog = true
    },
    closeModel() {
      this.isShowDialog = false
    }
  }
}
</script>

<style>
    .content-right{
        width: 100%;
        padding-left: 200px;
        background: orange;
        height: 100%;
    }
</style>
