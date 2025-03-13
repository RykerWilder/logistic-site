<script>
export default {
    props: {
        cards: Array
    }
}
</script>

<template>
    <div class="bg-slate-600 rounded-md p-5 hover:scale-[110%] transition" v-for="card in cards">
        <h2 class="text-4xl font-bold mb-2.5 text-white text-center">{{ card.title }}</h2>
        <ul class="flex flex-col items-center gap-3 w-full">
            <li v-for="listItem in card.list" class="hover:text-cyan-600 cursor-pointer">{{ listItem }}</li>
        </ul>
    </div>
</template>

<style scoped>
    div {
        width: calc(100% / 3 - 64px);
    }
</style>