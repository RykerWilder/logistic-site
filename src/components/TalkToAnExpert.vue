<script>
import ContactList from './ContactList.vue';

export default {
    components: {
        ContactList
    }
}
</script>

<template>

    <section class="px-10 bg-slate-600 flex justify-around">
        <div class="p-8">
            <h5 class="text-cyan-600 text-xl mb-2.5">TALK TO AN EXPERT</h5>
            <h2 class="text-5xl font-bold mb-8 text-white">Our <br> Business <br> Units</h2>
            <p class="text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
        <div class="p-8">
            <ContactList />
        </div>
        <div class="p-8">
            <ContactList />
        </div>
    </section>
</template>