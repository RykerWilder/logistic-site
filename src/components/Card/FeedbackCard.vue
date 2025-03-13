<script>
export default {
    props: {
        feedback: Array
    }
}
</script>

<template>
    <div v-for="testimonial in feedback" class="bg-slate-600 rounded-md p-5 w-[450px]">
        <h2 class="text-center text-cyan-600 font-extrabold text-2xl mb-2.5">{{ testimonial.title }}</h2>
        <p>{{ testimonial.feedback }}</p>
    </div>
</template>