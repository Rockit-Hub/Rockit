<template>
    <div>
        <el-form
        :model = "data"
        :rules = "rules"
        ref="fromadd"

        >
            <el-form-item
              label="title1"
              prop="title"
            >
                <el-input v-model="data.title"></el-input>
            </el-form-item>
            <el-form-item
              label="上传banner图片"
              prop="imageUrl"
            >
                <el-upload
                  class="avatar-uploader"
                  action="http://localhost:3000/upload"
                  list-type="picture-card"
                  :show-file-list="false"
                  :on-change="changeUploader"
                  :auto-upload="false"
                >
<img width="100%" height="100%" v-if="data.imageUrl" :src="data.imageUrl" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
            </el-form-item>
            <el-form-item
              label="状态"
              prop="status"
            >
                <el-select v-model="data.status" placeholder="请选择">
                    <el-option
                    label="上线"
                    :value="1">
                    </el-option>
                    <el-option
                    label="下线"
                    :value="0">
                    </el-option>
                </el-select>
            </el-form-item>
             <el-form-item
              label="时间"
              prop="createTime"
            >
              <el-date-picker
                v-model="data.createTime"
                type="datetime"
                placeholder="选择日期时间">
              </el-date-picker>
            </el-form-item>
          </el-form>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="submitFrom('fromadd')">确 定</el-button>
          </span>
    </div>
</template>

<script>
export default {
  data() {
    return {
      data: {
        title: '',
        status: '',
        createTime: '',
        imageUrl: '',
        file: {}
      },
      rules: {
        title: [
          { required: true, message: '请输入banner名称', trigger: 'blur' },
          { min: 5, max: 20, message: '长度在 5 到 20 个字符', trigger: 'blur' }
        ],
        status: [
          { required: true, message: '请选择状态', trigger: 'blur' }
        ],
        createTime: [
          {
            required: true, message: '请选择日期', trigger: 'blur'
          }
        ],
        imageUrl: [
          {
            required: true, message: '请上传图片', trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    changeUploader(file, filelist) {
      const url = window.URL.createObjectURL(file.raw)
      console.log(file, filelist)
      console.log(url)
      this.data.imageUrl = url
      this.data.file = file
    },
    submitFrom(fromadd) {
      this.$refs[fromadd].validate((valid) => {
        console.log(valid)
      })
    }
  }
}
</script>
