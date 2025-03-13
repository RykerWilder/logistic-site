<script>
import { store } from '../store.js';
import RoadTransportCard from './Card/RoadTransportCard.vue';

export default {
    components: {
        RoadTransportCard
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
            <h5 class="text-cyan-600 text-xl mb-2.5">ROAD TRANSPORT</h5>
            <h2 class="text-5xl font-bold mb-8 text-white">Main Services</h2>
            <div class="flex gap-14">
                <p class="text-white w-[70%]">With all of this expertise and capability comes an unrivalled commitment to customer service. We will
                    work hard to understand your needs in order to develop a productive, long-term partnership.</p>
                <button class="text-white border-1 border-cyan-600 rounded-full p-2 cursor-pointer hover:bg-cyan-600">SEE ALL</button>
            </div>
        </div>
        <div class="flex p-8 gap-10">
            <RoadTransportCard :services="store.main_services"/>
        </div>
    </section>
</template>