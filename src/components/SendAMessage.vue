<script>
import ContactList from './ContactList.vue';

export default {
    components: {
        ContactList
    }
}
</script>

<template>
    <section class="px-10 flex justify-center">
        <div class="p-8 w-[50%]">
            <h5 class="text-cyan-600 text-xl mb-2.5">SEND A MESSAGE</h5>
            <h2 class="text-5xl font-bold mb-8">Get In Touch</h2>
            <p>We will respond to your message as soon as possible</p>
        </div>
        <div class="p-8 w-[50%]">
            <h3>Example Inc.</h3>
            <p class="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <ContactList />
        </div>
    </section>

</template>