<template>
    <div>
        <Screen1 v-if="screen === 1" @navigate="navigate" />
        <Screen2 v-else-if="screen === 2" @navigate="navigate" />
        <Screen3 v-else />
    </div>
</template>

<script>
import Screen1 from './components/Screen1.vue';
import Screen2 from './components/Screen2.vue';
import Screen3 from './components/Screen3.vue';

export default {
    data() {
        return { screen: 1 };
    },
    methods: {
        navigate(nextScreen) {
            this.screen = nextScreen;
        },
    },
    components: { Screen1, Screen2, Screen3 },
};
</script>
