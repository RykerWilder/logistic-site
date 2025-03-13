<script>
import HeroSection from '../components/HeroSection.vue';
import WhoWeAre from '../components/WhoWeAre.vue';
import RoadTransport from '../components/RoadTransport.vue';
import WhatAreWeDoing from '../components/WhatAreWeDoing.vue';

export default {
    components: {
        HeroSection,
        WhoWeAre,
        RoadTransport,
        WhatAreWeDoing
    }
}


</script>


<template>
    <main>
        <HeroSection />
        <WhoWeAre />
        <RoadTransport />
        <WhatAreWeDoing />
    </main>
</template>

<style scoped>

</style>