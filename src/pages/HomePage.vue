<script>
import HeroSection from '../components/HeroSection.vue';
import WhoWeAre from '../components/WhoWeAre.vue';
import RoadTransport from '../components/RoadTransport.vue';
import WhatAreWeDoing from '../components/WhatAreWeDoing.vue';
import CustomerTestimonials from '../components/CustomerTestimonials.vue';
import TalkToAnExpert from '../components/TalkToAnExpert.vue';
import SendAMessage from '../components/SendAMessage.vue';

export default {
    components: {
        HeroSection,
        WhoWeAre,
        RoadTransport,
        WhatAreWeDoing,
        CustomerTestimonials,
        TalkToAnExpert,
        SendAMessage
    }
}


</script>


<template>
    <main>
        <HeroSection />
        <WhoWeAre />
        <RoadTransport />
        <WhatAreWeDoing />
        <CustomerTestimonials />
        <TalkToAnExpert />
        <SendAMessage />
    </main>
</template>

<style scoped>

</style>