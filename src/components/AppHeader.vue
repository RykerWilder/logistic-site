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

    <header class="relative">
        <!-- HEADER TOP -->
        <div class="bg-cyan-950 h-[50px] flex items-center justify-center">
            <ul class="flex justify-around text-slate-600 w-full">
                <li class="flex gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    Open Hours: Mon - Sat - 09:00 - 18:00
                </li>
                <li class="flex gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                    +1 (305) 1234-5678
                </li>
                <li class="flex gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                    hello@example.com
                </li>
            </ul>
        </div>

        <!-- HEADER BOTTOM -->
        <div class="bg-cyan-950 h-[100px] text-slate-600 flex justify-center items-center">
            <ul class="flex justify-center items-center gap-6 w-screen">
                <li class="h-[100px]">
                    <img class="max-h-full" src="../assets/img/logo.svg" alt="logo">
                </li>
                <li class="hover:text-white"><router-link :to="{ name: 'home' }"
                        :class="{ 'text-white': $route.name === 'home' }">Home</router-link></li>
                <li class="hover:text-white"><router-link :to="{ name: 'about' }"
                        :class="{ 'text-white': $route.name === 'about' }">About</router-link></li>
                <li class="hover:text-white"><router-link :to="{ name: 'contact' }"
                        :class="{ 'text-white': $route.name === 'contact' }">Contact Us</router-link></li>
                <li class="hover:text-white cursor-pointer" @click="store.searchBar = true">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </li>
                <li><button class="p-3 transition hover:bg-slate-600 hover:text-white rounded-full cursor-pointer">Buy
                        Nexgen</button>
                </li>
            </ul>
        </div>

        
    </header>


</template>