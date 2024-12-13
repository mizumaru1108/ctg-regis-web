import { defineStore } from "pinia";

export const useOrganizationStore = defineStore("organization", {
    state: () => ({
        form: {
            nama: "",
            nomor_telpon: "",
            email: "",
            nomor_instansi: "",
        },
        errors: {},
    }),
    actions: {
        validateForm() {
            this.errors = {};
            if (!this.form.nama) this.errors.nama = "Nama is required.";
            if (!this.form.nomor_telpon)
                this.errors.nomor_telpon = "Nomor telpon is required.";
            if (!this.form.email) this.errors.email = "Email is required.";
            if (!this.form.nomor_instansi)
                this.errors.nomor_instansi = "Nomor instansi is required.";
            return Object.keys(this.errors).length === 0;
        },
        clearForm() {
            this.form.nama = "";
            this.form.nomor_telpon = "";
            this.form.email = "";
            this.form.nomor_instansi = "";
        },
    },
});
