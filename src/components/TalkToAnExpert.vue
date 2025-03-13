<script>
import ContactList from './ContactList.vue';

export default {
    components: {
        ContactList
    }
}
</script>

<template>

    <section class="px-10 flex bg-slate-400">
        <div class="p-8 w-[50%]">
            <h5 class="text-cyan-600 text-xl mb-2.5">TALK TO AN EXPERT</h5>
            <h2 class="text-5xl font-bold mb-8 text-white">Our <br> Business <br> Units</h2>
            <p class="text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
        <div class="p-8 w-[25%]">
            <ContactList />
            <button
            class="rounded-full transition border-1 border-cyan-600 text-white p-3 px-4 cursor-pointer  mr-1.5 hover:bg-cyan-600 ">VIEW MAP</button>
        </div>
        <div class="p-8 w-[25%]">
            <ContactList />
            <button class="rounded-full transition border-1 border-cyan-600 text-white p-3 px-4 cursor-pointer  mr-1.5 hover:bg-cyan-600 ">VIEW MAP</button>
        </div>
    </section>
</template>