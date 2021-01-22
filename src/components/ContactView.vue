<template>
    <div class="w-screen h-screen flex items-center justify-evenly flex-col sm:flex-col md:flex-row lg:flex-row" id="section-contact">
        <div class="w-1/2" id="image-contact">
            <img class="m-auto" src="../assets/images/ie.png" alt="ie">
        </div>
        <div class="w-full sm:w-full md:w-1/2 lg:w-1/2 flex items-center flex-col" id="form-contact">
            <h3 class="my-3 text-center">Une idée ? Un projet ? N'hésitez pas à me contacter</h3>
            <p v-if="errors.length">
                <b>Please correct the following error(s):</b>
                <ul>
                    <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
                </ul>
            </p>
            <form class="w-4/5 shadow-2xl bg-white rounded-lg my-5" @submit.prevent="sendEmail" novalidate="true">
                <div class="sm:rounded-md">
                    <div class="px-4 py-5 sm:p-6">
                        <div class="grid grid-cols-6 gap-6">
                            <div class="col-span-6">
                                <label for="first_name" class="block text-sm font-medium text-gray-700">Nom</label>
                                <input type="text" id="name" name="name" v-model="name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm bg-gray-100 rounded-md">
                            </div>

                            <div class="col-span-6">
                                <label for="email_address" class="block text-sm font-medium text-gray-700">Adresse email</label>
                                <input type="text" id="email_address" name="email" v-model="email" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm bg-gray-100 rounded-md" placeholder="you@example.com">
                            </div>

                            <div class="col-span-6">
                                <label for="message" class="block text-sm font-medium text-gray-700">
                                    Message
                                </label>
                                <div class="mt-1">
                                    <textarea id="message" name="message" v-model="message" rows="3" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm bg-gray-100 rounded-md"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p class="text-xs text-center font-thin" :class="healthStyle">{{ alert }}</p>
                    <div class="px-4 py-3 text-right sm:px-6">
                        <button type="submit" class="inline-flex justify-center border border-transparent shadow-sm text-sm font-medium bg-black hover:bg-gray-500 rounded-full py-3 px-6 text-white focus:outline-none">
                            Envoyer
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
                this.errors.push("Name required.");
            }
            if (!this.email) {
                this.errors.push('Email required.');
            } else if (!this.validEmail(this.email)) {
                this.errors.push('Valid email required.');
            }
            if (!this.message) {
                this.errors.push("Message required.");
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
.demo {
  font-family: sans-serif;
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 20px 30px;
  margin-top: 1em;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;
}

.form-item {
  margin: 1em auto;
}

.form-item label {
  display: block;
}

button {
  font-size: 1em;
}

</style>