<script>
export default {
    props: {
        services: Array
    }
}
</script>

<template>
    <div class="bg-slate-600 p-3 rounded-xl hover:scale-125" v-for="service in services">
        <div class="flex justify-between items-center mb-2.5">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="size-10 text-cyan-600">
                <path stroke-linecap="round" stroke-linejoin="round"
                    :d="service.icon" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="size-10 text-cyan-600">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
        </div>
        <h3 class="text-4xl font-bold mb-2.5">{{ service.title }}</h3>
        <p class="mb-2.5">{{ service.description }}</p>
    </div>
</template>