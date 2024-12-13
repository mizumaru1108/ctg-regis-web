<template>
    <div class="flex items-center justify-center min-h-screen">
        <div class="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 class="text-2xl font-bold mb-4">Personal Details</h2>
            <form @submit.prevent="handleSubmit">
                <div class="mb-4">
                    <label class="block text-gray-700 mb-2">Nama</label>
                    <input
                        type="text"
                        v-model="form.nama"
                        class="border rounded w-full p-2"
                    />
                    <span v-if="errors.nama" class="text-red-500 text-sm">{{
                        errors.nama
                    }}</span>
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 mb-2">Nomor Telpon</label>
                    <input
                        type="text"
                        v-model="form.nomor_telpon"
                        class="border rounded w-full p-2"
                    />
                    <span
                        v-if="errors.nomor_telpon"
                        class="text-red-500 text-sm"
                        >{{ errors.nomor_telpon }}</span
                    >
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 mb-2">Email</label>
                    <input
                        type="email"
                        v-model="form.email"
                        class="border rounded w-full p-2"
                    />
                    <span v-if="errors.email" class="text-red-500 text-sm">{{
                        errors.email
                    }}</span>
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 mb-2"
                        >Nomor Instansi</label
                    >
                    <input
                        type="text"
                        v-model="form.nomor_instansi"
                        class="border rounded w-full p-2"
                    />
                    <span
                        v-if="errors.nomor_instansi"
                        class="text-red-500 text-sm"
                        >{{ errors.nomor_instansi }}</span
                    >
                </div>
                <button
                    type="submit"
                    class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                    :disabled="loading"
                >
                    {{ loading ? "Submitting..." : "Submit" }}
                </button>
            </form>
        </div>
    </div>
</template>

<script>
import { useOrganizationStore } from "../../store/organizationStore";
import { storeToRefs } from "pinia";
import axios from "axios";
import { ref } from "vue";

export default {
    setup(_, { emit }) {
        const organizationStore = useOrganizationStore();
        const { form, errors } = storeToRefs(organizationStore);

        const loading = ref(false);
        const baseURL = import.meta.env.VITE_BASE_API_URL;

        const handleSubmit = async () => {
            if (organizationStore.validateForm()) {
                loading.value = true;
                try {
                    const response = await axios.post(
                        `${baseURL}/api/organizations`,
                        form.value
                    );
                    console.log("Success:", response.data);
                    emit("navigate", 3);
                } catch (error) {
                    console.error(
                        "Error submitting form:",
                        error.response?.data || error.message
                    );
                    if (error.response?.data?.errors) {
                        Object.assign(errors.value, error.response.data.errors);
                    }
                } finally {
                    loading.value = false;
                }
            }
        };

        return {
            form,
            errors,
            handleSubmit,
            loading,
        };
    },
};
</script>

<style scoped>
button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
}
</style>
