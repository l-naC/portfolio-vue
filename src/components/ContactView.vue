<template>
    <div class="w-screen h-screen flex items-center justify-evenly flex-col sm:flex-col md:flex-row lg:flex-row" id="contact">
        <div id="image-contact">
            <img class="m-auto w-1/2 md:w-full lg:w-full h-auto" src="../assets/images/ie.webp" alt="ie">
        </div>
        <div class="w-full md:w-1/2 lg:w-1/2 flex items-center flex-col" id="form-contact">
            <h1 class="my-3 text-center text-sm md:text-base lg:text-base">{{ $t("contact.intro") }}</h1>
            <p class="text-xs" v-if="errors.length">
                <b>{{ $t("contact.error") }}</b>
                <ul class="flex">
                    <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
                </ul>
            </p>
            <form class="w-11/12 m:w-4/5 lg:w-4/5 shadow-2xl bg-white rounded-lg my-0 md:my-5 lg:my-5" @submit.prevent="sendEmail" novalidate="true">
                <div class="sm:rounded-md">
                    <div class="p-3 md:p-2 lg:p-2" id="container-form">
                        <div class="grid grid-cols-6 gap-6">
                            <div class="col-span-6">
                                <label for="name" class="block text-sm font-medium text-gray-700">{{ $t("contact.nom") }}</label>
                                <input type="text" id="name" name="name" v-model="name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm bg-gray-100 rounded-md">
                            </div>

                            <div class="col-span-6">
                                <label for="email_address" class="block text-sm font-medium text-gray-700">{{ $t("contact.email") }}</label>
                                <input type="text" id="email_address" name="email" v-model="email" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm bg-gray-100 rounded-md" placeholder="you@example.com">
                            </div>

                            <div class="col-span-6">
                                <label for="message" class="block text-sm font-medium text-gray-700">
                                    {{ $t("contact.message") }}
                                </label>
                                <div class="mt-1">
                                    <textarea id="message" name="message" v-model="message" rows="3" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm bg-gray-100 rounded-md"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p class="text-xs text-center font-thin" :class="healthStyle">{{ alert }}</p>
                    <div class="p-1 md:px-2 md:py-2 lg:px-2 lg:py-2 text-right sm:px-6" id="button">
                        <button type="submit" class="inline-flex justify-center border border-transparent shadow-sm font-medium bg-black hover:bg-gray-500 rounded-full py-1 px-3 md:px-6 lg:px-6 mr-3 mr-3 mb-3 mb-3 md:mr-3 lg:mr-3 md:mb-3 lg:mb-3 text-xs md:text-sm lg:text-sm text-white focus:outline-none">
                            {{ $t("contact.button") }}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import emailjs from 'emailjs-com'

export default {
    name: "contact-view",
    data() {
        return{
            alert: '',
            color: '',
            errors: [],
            name: null,
            email: null,
            message: null
        }
    },
    computed: {
        healthStyle() {
            return this.color
        },
    },
    methods: {
        sendEmail(e){
            this.errors = []
            if (!this.name) {
                this.errors.push("Nom requis ");
            }
            if (!this.email) {
                this.errors.push('email requis ');
            } else if (!this.validEmail(this.email)) {
                this.errors.push('Adresse email valide ');
            }
            if (!this.message) {
                this.errors.push("Message requis ");
            }

            if (!this.errors.length) {
                emailjs.sendForm('service_sgxq6js', 'template_bqq6t19', e.target, 'user_blU1cjUdykXx9wkYrnQaW')
                    .then((result) => {
                        this.alert = 'Email envoyé'
                        this.color = 'text-green-700'
                        console.log('SUCCESS!', result.status, result.text)
                    }, (error) => {
                        this.alert = "Une erreur c'est produite lors de l'envoi, veuillez ressayer"
                        this.color = 'text-red-700'
                        console.log('FAILED...', error)
                    });

                return true;
            }
        },
        validEmail: function (email) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
    }
};
</script>

<style>

</style>