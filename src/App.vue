<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
    components: {
        AppHeader,
        AppFooter
    }
}


</script>

<template>
    <AppHeader />
    <RouterView></RouterView>
    <AppFooter />
</template>

<style scoped></style>
