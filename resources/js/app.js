/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import './bootstrap';
import { createApp } from 'vue';
import './../css/app.css' // Import Tailwind styles

import app from './App.vue';

/**
 * Next, we will create a fresh Vue application instance. You may then begin
 * registering screens with the application instance so they are ready
 * to use in your application's views. An example is included for you.
 */

const appElement = createApp(app);

// import ExampleComponent from './components/ExampleComponent.vue';
// appElement.component('example-component', ExampleComponent);

/**
 * The following block of code may be used to automatically register your
 * Vue screens. It will recursively scan this directory for the Vue
 * screens and automatically register them with their "basename".
 *
 * Eg. ./screens/ExampleComponent.vue -> <example-component></example-component>
 */

// Object.entries(import.meta.glob('./**/*.vue', { eager: true })).forEach(([path, definition]) => {
//     app.component(path.split('/').pop().replace(/\.\w+$/, ''), definition.default);
// });

/**
 * Finally, we will attach the application instance to a HTML element with
 * an "id" attribute of "app". This element is included with the "auth"
 * scaffolding. Otherwise, you will need to add an element yourself.
 */

appElement.mount('#app');
