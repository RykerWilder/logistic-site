<script>
import { store } from '../store.js';
export default {
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <!-- SEARCH BAR -->
    <div id="search-bar" class="fixed right-0 top-[150px] bg-transparent h-full w-[400px] flex justify-center items-center z-10" v-if="store.searchBar == true">
        <svg @click="store.searchBar = false" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            stroke-width="1.5" stroke="currentColor"
            class="absolute top-2.5 left-2.5 size-10 cursor-pointer text-white z-10">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
        <div class="flex flex-col items-center gap-6">
            <h3 class="text-4xl font-bold text-center text-white z-10">What are you looking for?</h3>
            <input type="text" placeholder="Search Here"
                class="w-[80%] bg-slate-400 p-3 rounded-md focus:outline-0 z-10 text-white">
        </div>
    </div>
</template>

<style scoped>
#search-bar::before {
    content: '';
    position: fixed;
    top: 150px;
    right: 0;
    width: 400px;
    height: 80vh;
    background-color: rgba(0, 0, 0, .6);
}
</style>