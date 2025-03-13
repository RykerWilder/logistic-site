<script>
import HeroSection from '../components/HeroSection.vue';
import WhoWeAre from '../components/WhoWeAre.vue';
import RoadTransport from '../components/RoadTransport.vue';
import WhatAreWeDoing from '../components/WhatAreWeDoing.vue';
import CustomerTestimonials from '../components/CustomerTestimonials.vue';
import TalkToAnExpert from '../components/TalkToAnExpert.vue';

export default {
    components: {
        HeroSection,
        WhoWeAre,
        RoadTransport,
        WhatAreWeDoing,
        CustomerTestimonials,
        TalkToAnExpert
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
    </main>
</template>

<style scoped>

</style>