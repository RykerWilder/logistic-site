<script>
import ContactList from './ContactList.vue';

export default {
    components: {
        ContactList
    }
}
</script>

<template>
    <section class="px-10 flex justify-center">
        <div class="p-8 w-[70%]">
            <h5 class="text-cyan-600 text-xl mb-2.5">SEND A MESSAGE</h5>
            <h2 class="text-5xl font-bold mb-8">Get In Touch</h2>
            <p>We will respond to your message as soon as possible</p>
            <div class="mt-8">
                <div class="flex gap-10 mb-7 w-full">
                    <input type="text" placeholder="Name" class="bg-slate-400 p-3 rounded-md focus:outline-0 text-white placeholder-white w-[50%]">
                    <input type="email" placeholder="Email" class="bg-slate-400 p-3 rounded-md focus:outline-0 text-white placeholder-white w-[50%]">
                </div>
                <div class="flex gap-10 mb-7 w-full">
                    <input type="text" placeholder="Phone-number" class="bg-slate-400 p-3 rounded-md focus:outline-0 text-white placeholder-white w-[50%]">
                    <select class="bg-slate-400 p-3 rounded-md text-white w-[50%] focus:outline-0">
                        <option selected>Open this select menu</option>
                        <option value="1">Sales and Purchasing</option>
                        <option value="2">Finalcial and Accounts</option>
                        <option value="3">Human Resources</option>
                        <option value="3">Another Subjects</option>
                    </select>
                </div>
                <textarea name="" id="" placeholder="Message" class="bg-slate-400 p-3 rounded-md text-white w-full focus:outline-0 h-[100px] resize-none placeholder-white"></textarea>
                <button class="mt-7 width-[30%] rounded-full transition border-1 border-cyan-600 text-white p-3 px-4 cursor-pointer bg-cyan-600 hover:bg-transparent hover:text-cyan-600">SEND</button>
            </div>
        </div>
        <div class="p-8 w-[30%]">
            <h3 class="text-3xl font-bold mb-4">Example Inc.</h3>
            <p class="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <ContactList />
            <button class="rounded-full transition bg-cyan-800 text-white p-3 px-4 cursor-pointer  mr-1.5 hover:bg-cyan-600 hover:text-cyan-800">VIEW MAP</button>
        </div>
    </section>
</template>