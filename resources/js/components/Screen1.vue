<template>
    <div class="flex items-center justify-center min-h-screen">
        <div class="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 class="text-2xl font-bold mb-4">Instansi Details</h2>
            <form @submit.prevent="handleSubmit">
                <div class="mb-4">
                    <label class="block text-gray-700 mb-2">Nama Instansi</label>
                    <select v-model="form.nama_instansi" class="border rounded w-full p-2">
                        <option value="">Pilih Instansi</option>
                        <option value="Instansi 1">Instansi 1</option>
                        <option value="Instansi 2">Instansi 2</option>
                    </select>
                    <span v-if="errors.nama_instansi" class="text-red-500 text-sm">{{ errors.nama_instansi }}</span>
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 mb-2">Nomor Instansi</label>
                    <input type="text" v-model="form.nomor_instansi" class="border rounded w-full p-2" />
                    <span v-if="errors.nomor_instansi" class="text-red-500 text-sm">{{ errors.nomor_instansi }}</span>
                </div>
                <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Submit</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                nama_instansi: '',
                nomor_instansi: '',
            },
            errors: {},
        };
    },
    methods: {
        handleSubmit() {
            this.errors = {};
            if (!this.form.nama_instansi) {
                this.errors.nama_instansi = "Nama instansi is required.";
            }
            if (!this.form.nomor_instansi) {
                this.errors.nomor_instansi = "Nomor instansi is required.";
            }
            if (!Object.keys(this.errors).length) {
                console.log(this.form); // Replace this with API call
                this.$emit('navigate', 2); // Navigate to Screen 2
            }
        },
    },
};
</script>
