import { defineStore } from "pinia";

export const useFormStore = defineStore("form", {
    state: () => ({
        loading: false,
        success: false,
        error: null,
    }),
    actions: {
        async submitForm(apiEndpoint, formData) {
            this.loading = true;
            this.success = false;
            this.error = null;
            try {
                const response = await fetch(apiEndpoint, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formData),
                });

                if (!response.ok) {
                    throw new Error("Failed to submit form");
                }

                const data = await response.json();
                this.success = true;
                return data;
            } catch (err) {
                this.error = err.message || "Unknown error";
            } finally {
                this.loading = false;
            }
        },
    },
});
