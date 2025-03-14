<script>
import { store } from './store.js';
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import SearchBar from './components/SearchBar.vue';

export default {
    components: {
        AppHeader,
        SearchBar,
        AppFooter
    }, 
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <AppHeader />
    <SearchBar/>
    <RouterView></RouterView>
    <AppFooter />
</template>

<style scoped></style>
