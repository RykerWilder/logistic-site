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
            curIndex: 0
        }
    },
    methods: {
        next() {
            if (this.curIndex === this.card.length - 1) {
                this.curIndex = 0;
                console.log('cur0');
            } else {
                this.curIndex++;
                console.log('cur++');
            }
        },
        prev() {
            if (this.curIndex === 0) {
                this.curIndex = this.card.length - 1;
                console.log('car');
            } else {
                this.curIndex--;
                console.log('cur--');
            }
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
            <div @click="prev()">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-10 text-cyan-600">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
            </div>
            <FeedbackCard :feedback="store.trusted_feedback" />
            <div @click="next()">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-10 text-cyan-600">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
            </div>
        </div>
    </section>
</template>