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
                >
                    Submit
                </button>
            </form>
        </div>
    </div>
</template>

<script>
import { useOrganizationStore } from "../../store/organizationStore";
import { storeToRefs } from "pinia";

export default {
    setup(_, { emit }) {
        // Destructure `emit` from the second argument
        const instansiStore = useOrganizationStore();
        const { form, errors } = storeToRefs(instansiStore); // Reactive references

        const handleSubmit = () => {
            if (instansiStore.validateForm()) {
                console.log(form.value); // Access form values with .value
                emit("navigate", 3); // Use `emit` for navigation
            }
        };

        return {
            form,
            errors,
            handleSubmit,
        };
    },
};

// export default {
//     // data() {
//     //     return {
//     //         form: {
//     //             nama: '',
//     //             nomor_telpon: '',
//     //             email: '',
//     //             nomor_instansi: '',
//     //         },
//     //         errors: {},
//     //     };
//     // },
//     // methods: {
//     //     async handleSubmit() {
//     //         this.errors = {};
//     //         if (!this.form.nama) this.errors.nama = "Nama is required.";
//     //         if (!this.form.nomor_telpon) this.errors.nomor_telpon = "Nomor telpon is required.";
//     //         if (!this.form.email) this.errors.email = "Email is required.";
//     //         if (!this.form.nomor_instansi) this.errors.nomor_instansi = "Nomor instansi is required.";
//     //         if (!Object.keys(this.errors).length) {
//     //             try {
//     //                 const response = await fetch("http://localhost:8000/api/organizations", {
//     //                     method: "POST",
//     //                     headers: { "Content-Type": "application/json" },
//     //                     body: JSON.stringify(this.form),
//     //                 });
//     //                 if (response.ok) {
//     //                     console.log("Success:", await response.json());
//     //                     this.$emit('navigate', 3);
//     //                 } else {
//     //                     throw new Error("Failed to save.");
//     //                 }
//     //             } catch (error) {
//     //                 console.error(error);
//     //             }
//     //         }
//     //     },
//     // },
// };
</script>
