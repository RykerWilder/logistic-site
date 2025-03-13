<script>
export default {
    data() {
        return {
            stats: [
                { target: 128, current: 0, label: 'Certifications' },
                { target: 230, current: 0, label: 'Employees' },
                { target: 357, current: 0, label: 'Customers' },
                { target: 94, current: 0, label: 'Countries' }
            ],
            hasStarted: false // Aggiungi un flag per controllare se il conteggio è già partito
        };
    },
    methods: {
        startCount() {
            if (this.hasStarted) return; // Se il conteggio è già partito, esci
            this.hasStarted = true;

            this.stats.forEach((stat) => {
                const interval = setInterval(() => {
                    if (stat.current < stat.target) {
                        stat.current++;
                    } else {
                        clearInterval(interval);
                    }
                }, 10); // Regola la velocità del conteggio
            });
        }
    },
    mounted() {
        this.$nextTick(() => {
            // Crea un Intersection Observer
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            // Se la sezione è visibile, avvia il conteggio
                            this.startCount();
                            observer.unobserve(this.$refs.section); // Smetti di osservare dopo l'avvio
                        }
                    });
                },
                {
                    threshold: 0.9 // Avvia il conteggio quando il 50% della sezione è visibile
                }
            );
            // Osserva la sezione
            observer.observe(this.$refs.section);
        });
    }
};
</script>

<template>
    <section class="px-10 h-[70vh] flex flex-col justify-evenly">
        <div class="p-8 flex flex-col items-center">
            <h5 class="text-cyan-600 text-xl mb-2.5">WHAT ARE WE DOING</h5>
            <h2 class="text-5xl font-bold mb-8 text-white">Results in Number</h2>
            <p class="text-white">Our goal is to exceed expectations by delivering the best job possible.</p>
        </div>
        <div class="p-8 flex justify-around">
            <!-- Sposta il ref qui -->
            <div ref="section" class="flex justify-around w-full">
                <div v-for="(item, index) in stats" :key="index"
                    class="text-white font-black flex flex-col items-center">
                    <span class="text-cyan-600 text-7xl">{{ item.current }}</span>
                    <span class="stat-label">{{ item.label }}</span>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
section {
    background-image: url('../assets/img/bg-results.jpg');
    background-position: center;
    background-attachment: fixed;
}
</style>