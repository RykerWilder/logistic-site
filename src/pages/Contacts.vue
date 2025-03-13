<script>
import NewsLetter from '../components/NewsLetter.vue';
import TalkToAnExpert from '../components/TalkToAnExpert.vue';
import SendAMessage from '../components/SendAMessage.vue';

export default {
    components: {
        NewsLetter,
        TalkToAnExpert,
        SendAMessage
    }
}

</script>


<template>
    <main>
        <section class="h-[50vh] flex justify-center items-center">
            <h1 class="text-center text-white text-6xl font-extrabold z-10">Contacts Us</h1>
        </section>
        <NewsLetter />
        <TalkToAnExpert />
        <SendAMessage />
    </main>
</template>

<style scoped>
section:nth-child(1) {
    background-image: url('../assets/img/bg-contact.jpg');
    background-position: center;
    background-attachment: fixed;
}
</style>