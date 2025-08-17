<template>
    <div>
        <div class="amazon-wholesale">
            <el-form ref="wholesaleForm" :model="wholesaleForm" :inline="true" label-width="80px">
                <el-form-item label="商品名称">
                    <el-input v-model="wholesaleForm.productName" placeholder="请输入商品名称"></el-input>
                </el-form-item>
                <el-form-item label="商品价格">
                    <el-input v-model="wholesaleForm.productPrice" placeholder="请输入商品价格"></el-input>
                </el-form-item>
            </el-form>
            <div class="preview-btn">
                <el-button @click="exportTxt">导出</el-button>
                <el-button type="primary" @click="preview">预览</el-button>
            </div>


        </div>

        <div>
            <el-drawer title="预览页面" :visible.sync="drawer" :direction="direction" :before-close="handleClose">
                <!-- <json-viewer :value="mockData" :expand-depth="5" copyable boxed  style="background-color: #f5f5f5;">
                </json-viewer> -->

                <vue-json-editor v-model="mockData" :showBtns="true" :mode="'code'" lang="zh" :expandedOnStart="false"
                    @json-save="submitMock" class="code-json-editor" />
            </el-drawer>
        </div>
    </div>
</template>


<script>
import { getMockData, exportTxt} from '@/api'
import { downloadFile,getFileName } from '@/utils/FileUtil'
import vueJsonEditor from 'vue-json-editor'


export default {
    name: 'AmazonWholesale',
    components: {
        vueJsonEditor
    },
    data() {
        return {
            drawer: false,
            direction: 'rtl',
            wholesaleForm: {
                productName: '',
                productPrice: ''
            },
            mockData: {}
        }
    },
    methods: {
        preview() {
            this.$refs.wholesaleForm.validate((valid) => {
                if (valid) {
                    getMockData(10).then(res => {
                        if (res.data.code == 200) {
                            this.mockData = res.data
                        } else {
                            this.mockData = res
                        }
                    })
                    this.drawer = true

                } else {
                    console.log('表单校验失败');
                }
            });
        },
        exportTxt() {
            exportTxt(10).then(res => {
                if (res.status == 200) {
                    let fileName = getFileName(res.headers['content-disposition'])
                    downloadFile(res.data, 'text/plain', fileName)
                }
            })

        },


        submitMock() {

        }
    }


}
</script>

<style lang="scss" scoped>
.amazon-wholesale {
    padding: 20px;
}

.preview-btn {
    text-align: center;
}

.code-json-editor {
    ::v-deep {
        .jsoneditor-poweredBy {
            display: none !important;
        }

        /*修改高度*/
        div.jsoneditor-outer {
            height: 80vh;
        }

        /*修改菜单栏背景颜色,原始背景为蓝色，为了和整体页面风格一致，改为黑色*/
        div.jsoneditor-menu {
            background-color: #000;
            border-bottom: 1px solid #000;
        }

        /*修改输入框边框颜色*/
        div.jsoneditor {
            border: 1px solid #000;
        }

    }
}
</style>
