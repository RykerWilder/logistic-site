<script>
import HeroSection from '../components/HeroSection.vue';
import WhoWeAre from '../components/WhoWeAre.vue';
import RoadTransport from '../components/RoadTransport.vue';
import WhatAreWeDoing from '../components/WhatAreWeDoing.vue';
import CustomerTestimonials from '../components/CustomerTestimonials.vue';

export default {
    components: {
        HeroSection,
        WhoWeAre,
        RoadTransport,
        WhatAreWeDoing,
        CustomerTestimonials
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
    </main>
</template>

<style scoped>

</style>