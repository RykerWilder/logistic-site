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
    <section class="h-[80vh] relative">
        <div class="flex flex-col justify-center items-start p-20 w-[50%]">
            <h5 class="text-cyan-600 text-xl font-bold">LOGISTIC SERVICES</h5>
            <h1 class="font-extrabold text-white text-8xl">CARGO<br>TRANSPORT</h1>
            <p class="text-white text-2xl mb-5">Fractional or exclusive road cargo transportation to all regions,
                with small, medium and large vehicles.</p>
            <div>
                <button
                    class="rounded-full transition border-1 border-cyan-600 text-white p-3 px-4 cursor-pointer bg-cyan-600 mr-1.5 hover:bg-transparent ">GET
                    IN TOUCH</button>
                <button
                    class="rounded-full transition text-white p-3 px-4 cursor-pointer border-1 border-cyan-600 hover:bg-cyan-600">READ
                    MORE</button>
            </div>
        </div>

        <!-- SEARCH BAR -->
        <div class="absolute right-0 top-0 bg-transparent h-full w-[400px] flex justify-center items-center" v-if="store.searchBar === true">
            <svg @click="store.searchBar = false" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="absolute top-2.5 left-2.5 size-10 cursor-pointer text-white z-10">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
            <div class="flex flex-col items-center gap-6">
                <h3 class="text-4xl font-bold text-center text-white z-10">What are you looking for?</h3>
                <input type="text" placeholder="Search Here" class="width-[80%] bg-slate-400 p-3 rounded-md focus:outline-0 z-10 text-white">
            </div>
        </div>
    </section>
</template>

<style scoped>
section {
    background-image: url(../assets/img/bg-hero.jpg);
    background-position: center;
    background-attachment: fixed;
}

div:nth-child(2)::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 400px;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);        
}
</style>