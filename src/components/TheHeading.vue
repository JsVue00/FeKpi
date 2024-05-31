<template>
    <div class="flex md:px-10 justify-between text-text2 items-center h-14 bg-background2 ">
        <div>
            {{ $t('hello') }}
        </div>
        <div class="flex justify-end gap-4 items-center ">
            <!-- <el-icon>
                <MuteNotification />
            </el-icon> -->
            <el-badge :value="2" class="item" type="danger">
                <el-button size="small" type="danger" plain>Delayed</el-button>
            </el-badge>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { MuteNotification } from '@element-plus/icons-vue'
</script>