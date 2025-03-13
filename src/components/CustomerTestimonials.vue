<script>
import { store } from '../store.js';
import FeedbackCard from './Card/FeedbackCard.vue';

export default {
    components: {
        FeedbackCard
    },
    data() {
        return {
            store,
            curIndex: 0 // Indice del gruppo corrente
        };
    },
    computed: {
        // Restituisce il gruppo di feedback attualmente visibile
        currentFeedbackGroup() {
            return this.store.trusted_feedback[this.curIndex];
        }
    },
    methods: {
        next() {
            // Passa al gruppo successivo
            if (this.curIndex === this.store.trusted_feedback.length - 1) {
                this.curIndex = 0; // Torna al primo gruppo
            } else {
                this.curIndex++; // Passa al gruppo successivo
            }
        },
        prev() {
            // Passa al gruppo precedente
            if (this.curIndex === 0) {
                this.curIndex = this.store.trusted_feedback.length - 1; // Torna all'ultimo gruppo
            } else {
                this.curIndex--; // Passa al gruppo precedente
            }
        }
    }
};
</script>

<template>
    <section class="bg-black px-10">
        <div class="p-8">
            <h5 class="text-cyan-600 text-xl mb-2.5 text-center">CUSTOMER TESTIMONIALS</h5>
            <h2 class="text-5xl font-bold mb-8 text-white text-center">Trusted Feedback</h2>
            <p class="text-center text-white">
                We work intensively in search of ideals that can add up in the lives of
                our customers. It is what moves us, and we are grateful for the recognition.
            </p>
        </div>
        <div class="p-16 flex justify-between items-center gap-5 text-white w-full">
            <!-- Freccia sinistra -->
            <div @click="prev" class="cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-10 text-cyan-600">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
            </div>

            <!-- Componente FeedbackCard -->
            <FeedbackCard :trusted_feedback="currentFeedbackGroup" />

            <!-- Freccia destra -->
            <div @click="next" class="cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-10 text-cyan-600">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
            </div>
        </div>
    </section>
</template>