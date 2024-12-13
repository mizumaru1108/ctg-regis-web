import { defineStore } from "pinia";

export const useInstansiStore = defineStore("instansi", {
    state: () => ({
        form: {
            nama_instansi: "",
            nomor_instansi: "",
        },
        errors: {},
    }),
    actions: {
        validateForm() {
            this.errors = {};
            if (!this.form.nama_instansi) {
                this.errors.nama_instansi = "Nama instansi is required.";
            }
            if (!this.form.nomor_instansi) {
                this.errors.nomor_instansi = "Nomor instansi is required.";
            }
            return Object.keys(this.errors).length === 0;
        },
        clearForm() {
            this.form.nama_instansi = "";
            this.form.nomor_instansi = "";
        },
    },
});
