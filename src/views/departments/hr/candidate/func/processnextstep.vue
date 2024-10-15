<template>
    <div class="translate-x-4 items-center">
        <el-steps :active="actives" finish-status="success" align-center>
            <el-step title="Step 1" description="Resume" />
            <el-step title="Step 2" description="Contact" />
            <el-step title="Step 3" description="Interview" />
            <el-step title="Step 4" description="Offer" />
            <el-step title="Step 5" description="Employee" />
        </el-steps>
    </div>

    <div class="flex justify-between mt-5 ">
        <el-card style="max-width: 100%" class=" w-full bg-white h-auto ">
            <div class="mb-10 grid">
                <el-avatar shape="square" :size="150" fit="cover"
                    src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" />
                <div class="el-upload__tip mb-2">
                    jpg/png files with a size less than 500kb
                </div>
                <el-upload class="upload-demo" action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                    multiple :on-preview="handlePreview" :on-remove="handleRemove" :before-remove="beforeRemove"
                    :limit="3" :on-exceed="handleExceed">
                    <el-button type="primary" class="w-[150px]">Click to upload</el-button>
                </el-upload>
            </div>

            <p class="text-xl font-bold ">Candidate Information</p>
            <p class="text-sm italic text-stone-400">Details about the candidate’s background and skills</p>
            <el-divider />

            <el-form :model="form" label-width="auto">
                <!-- Fullname -->
                <el-form-item label="Fullname">
                    <el-input v-model="form.name" />
                </el-form-item>

                <!-- Email -->
                <el-form-item label="Email">
                    <el-input v-model="form.name" />
                </el-form-item>

                <!-- Phone -->
                <el-form-item label="Phone">
                    <el-input v-model="form.name" />
                </el-form-item>

                <!-- Resume -->
                <el-form-item label="Resume">
                    <el-input v-model="form.name" />
                </el-form-item>

                <!-- Experiences -->
                <div class="mb-5">
                    <p class="text-xl font-bold ">Experiences Information</p>
                    <p class="text-sm italic text-stone-400">Summary of the candidate's professional background and key
                        achievements</p>
                </div>
                <el-divider />

                <!-- Company name -->
                <el-form-item label="Company Name">
                    <el-input v-model="form.name" />
                </el-form-item>

                <el-form-item label="Role">
                    <el-input v-model="form.name" />
                </el-form-item>

                <el-form-item label="Start Date">
                    <el-col :span="11">
                        <el-date-picker v-model="form.date1" type="date" placeholder="Pick a date"
                            style="width: 100%" />
                    </el-col>
                    <el-col :span="2" class="text-center">
                        <span class="text-gray-500">-</span>
                    </el-col>
                    <el-col :span="11">
                        <el-time-picker v-model="form.date2" placeholder="Pick a time" style="width: 100%" />
                    </el-col>
                </el-form-item>

                <el-form-item label="Start Date">
                    <el-col :span="11">
                        <el-date-picker v-model="form.date1" type="date" placeholder="Pick a date"
                            style="width: 100%" />
                    </el-col>
                    <el-col :span="2" class="text-center">
                        <span class="text-gray-500">-</span>
                    </el-col>
                    <el-col :span="11">
                        <el-time-picker v-model="form.date2" placeholder="Pick a time" style="width: 100%" />
                    </el-col>
                </el-form-item>


                <!-- Education -->
                <div class="mb-5">
                    <p class="text-xl font-bold ">Education Information</p>
                    <p class="text-sm italic text-stone-400">Overview of the candidate's educational background and
                        qualifications</p>
                </div>
                <el-divider />

                <el-form-item label="School Name">
                    <el-input v-model="form.name" />
                </el-form-item>

                <el-form-item label="Degree">
                    <el-input v-model="form.name" />
                </el-form-item>

                <el-form-item label="Major">
                    <el-input v-model="form.name" />
                </el-form-item>

                <el-form-item label="Graduated Date">
                    <el-col :span="11">
                        <el-date-picker v-model="form.date1" type="date" placeholder="Pick a date"
                            style="width: 100%" />
                    </el-col>
                    <el-col :span="2" class="text-center">
                        <span class="text-gray-500">-</span>
                    </el-col>
                    <el-col :span="11">
                        <el-time-picker v-model="form.date2" placeholder="Pick a time" style="width: 100%" />
                    </el-col>
                </el-form-item>

                <!-- Status -->
                <el-form-item label="Status">
                    <el-select clearable v-model="form.region" placeholder="please select your zone">
                        <el-option label="Applied" value="Applied" />
                        <el-option label="Interviewing" value="Interviewing" />
                        <el-option label="Hired" value="Hired" />
                        <!-- <el-option label="Rejected" value="Rejected" />
                        <el-option label="On Hold" value="On Hold" />
                        <el-option label="Offer Sent" value="Offer Sent" />
                        <el-option label="Offer Accepted" value="Offer Accepted" />
                        <el-option label="Offer Declined" value="Offer Declined" /> -->
                    </el-select>
                </el-form-item>


                <div class="mt-5">
                    <el-divider />
                    <span class="font-bold">Or you can drag file in this above</span>

                    <el-upload class="upload-demo mt-5" drag
                        action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15" multiple>
                        <el-icon class="el-icon--upload"><upload-filled /></el-icon>
                        <div class="el-upload__text">
                            Drop file here or <em>click to upload</em>
                        </div>
                        <template #tip>
                            <div class="el-upload__tip">
                                jpg/png files with a size less than 500kb
                            </div>
                        </template>
                    </el-upload>
                </div>

                <el-form-item class="m-5">
                    <el-button type="primary" @click="onSubmit">Create</el-button>
                    <el-button type="primary" @click="onSubmitUpload">Upload file</el-button>
                    <el-button>Cancel</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import type { UploadProps, UploadUserFile } from 'element-plus'

// do not use same name with ref
const form = reactive({
    name: '',
    region: '',
    date1: '',
    date2: '',
    delivery: false,
    type: [],
    resource: '',
    desc: '',
})

const onSubmitUpload = () => {

}

const actives = ref(1)

const onSubmit = () => {
    ElMessageBox.confirm(
        'Are you want to write email for send candidate ?',
        'Warning',
        {
            confirmButtonText: 'OK',
            cancelButtonText: 'Cancel',
            type: 'warning',
        }
    )
        .then(() => {
            if (actives.value <= 5) {
                actives.value++

                ElMessage({
                    type: 'success',
                    message: 'Completed process, waiting for change process next step!',
                })
            }

        })
        .catch(() => {
            ElMessage({
                type: 'info',
                message: 'Process canceled',
            })
        })
}

const handleRemove: UploadProps['onRemove'] = (file, uploadFiles) => {
    console.log(file, uploadFiles)
}

const handlePreview: UploadProps['onPreview'] = (uploadFile) => {
    console.log(uploadFile)
}

const handleExceed: UploadProps['onExceed'] = (files, uploadFiles) => {
    ElMessage.warning(
        `The limit is 3, you selected ${files.length} files this time, add up to ${files.length + uploadFiles.length
        } totally`
    )
}

const beforeRemove: UploadProps['beforeRemove'] = (uploadFile, uploadFiles) => {
    return ElMessageBox.confirm(
        `Cancel the transfer of ${uploadFile.name} ?`
    ).then(
        () => true,
        () => false
    )
}
</script>