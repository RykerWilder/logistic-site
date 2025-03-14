<script>
import ASuccessStory from '../components/ASuccessStory.vue';
import WhatAreWeDoing from '../components/WhatAreWeDoing.vue';
import AboutTheNetwork from '../components/AboutTheNetwork.vue';

export default {
    components: {
        ASuccessStory,
        WhatAreWeDoing,
        AboutTheNetwork
    }
}

</script>


<template>
    <main>
        <section class="h-[50vh] flex justify-center items-center">
            <h1 class="text-center text-white text-6xl font-extrabold z-10">About Us</h1>
        </section>
        <ASuccessStory />
        <WhatAreWeDoing />
        <AboutTheNetwork />
    </main>
</template>

<style scoped>
section:nth-child(1) {
    background-image: url('../assets/img/bg-about.jpg');
    background-position: center;
    background-attachment: fixed;
    background-size: cover;
}

section::after {
    content: '';
    position: absolute;
    top: 150px;
    left: 0;
    width: 100%;
    height: 50vh;
    background-color: rgba(0, 0, 0, 0.3);
}
</style>