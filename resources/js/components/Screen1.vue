<template>
    <div class="flex items-center justify-center min-h-screen">
        <div class="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 class="text-2xl font-bold mb-4">Instansi Details</h2>
            <form @submit.prevent="handleSubmit">
                <div class="mb-4">
                    <label class="block text-gray-700 mb-2"
                        >Nama Instansi</label
                    >
                    <select
                        v-model="form.nama_instansi"
                        class="border rounded w-full p-2"
                    >
                        <option value="">Pilih Instansi</option>
                        <option value="Instansi 1">Instansi 1</option>
                        <option value="Instansi 2">Instansi 2</option>
                    </select>
                    <span
                        v-if="errors.nama_instansi"
                        class="text-red-500 text-sm"
                    >
                        {{ errors.nama_instansi }}
                    </span>
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
                    >
                        {{ errors.nomor_instansi }}
                    </span>
                </div>
                <button
                    type="submit"
                    class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                    Submit
                </button>
            </form>
        </div>
    </div>
</template>

<script>
import { useInstansiStore } from "../../store/instansiStore";
import { storeToRefs } from "pinia";

export default {
    setup(_, { emit }) {
        // Destructure `emit` from the second argument
        const instansiStore = useInstansiStore();
        const { form, errors } = storeToRefs(instansiStore); // Reactive references

        const handleSubmit = () => {
            if (instansiStore.validateForm()) {
                console.log(form.value); // Access form values with .value
                emit("navigate", 2); // Use `emit` for navigation
            }
        };

        return {
            form,
            errors,
            handleSubmit,
        };
    },
};
</script>
