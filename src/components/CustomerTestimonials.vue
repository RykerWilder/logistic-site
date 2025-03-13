<script>
import { store } from '../store.js';
import FeedbackCard from './Card/FeedbackCard.vue';
export default {
    components: {
        FeedbackCard
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>

    <section class="bg-black px-10">
        <div class="p-8">
            <h5 class="text-cyan-600 text-xl mb-2.5 text-center">CUSTOMER TESTIMONIALS</h5>
            <h2 class="text-5xl font-bold mb-8 text-white text-center">Trusted Feedback</h2>
            <p class="text-center text-white">We work intensively in search of ideals that can add up in the lives of
                our customers. is what moves us and we are grateful for the recognition.</p>
        </div>
        <div class="p-16 flex justify-between items-center gap-5 text-white overflow-x-scroll overflow-y-hidden w-full">
            <FeedbackCard :feedback="store.trusted_feedback"/>
        </div>
    </section>
</template>