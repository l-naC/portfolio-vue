<template>
    <div class="w-screen h-screen flex items-center justify-evenly flex-col" id="about">
        <div class="flex items-center justify-evenly p-5 flex-col sm:flex-col md:flex-row lg:flex-row">
            <div class="w-full sm:w-full md:w-1/2 lg:w-1/2" id="text-about">
                <h1 class="sm:text-lg md:text-2xl lg:text-2xl my-3 font-bold">Développeuse web passionnée et à l’écoute !</h1>
                <p>
                    Ma passion est d'accompagner de A à Z, les entreprises ainsi que les particuliers souhaitant créer un site internet.
                    <br/><br/>
                    Je saurais vous accompagner tout au long de votre projet, depuis l’établissement du cahier des charges en passant par la 
                    réalisation des maquettes mais également l’intégration des pages, le développement des différentes fonctionnalités. 
                    Sans oublier, l’optimisation du référencement naturel du site et sa mise en ligne. 
                    <br/><br/>
                    Étant diplômé d'un master I et en cours de formation d'un master II, j'ai déjà acquis une grande expérience dans le domaine 
                    grâce aux différents projets sur lesquels j’ai pu travailler. Je suis convaincue d’avoir les atouts nécessaires pour 
                    vous accompagner dans vos futurs projets.  
                    <br/><br/>
                    Vous avez pu le constater, je suis aussi une personne passionnée par le Japon et sa culture.
                </p>
                <!-- <div class="text-center my-5">
                    <button class="bg-black hover:bg-gray-500 rounded-full py-3 px-6 text-white">Download my CV</button>
                </div> -->
            </div>
            <div id="image-about" class="flex md:block lg:block justify-center">
                <img class="w-1/2 md:w-full lg:w-full h-auto" src="../assets/images/torii.webp" alt="torii">
            </div>
        </div>
        <div class="w-full text-center italic h-1/4 fond p-5 mb-8 md:mb-3 lg:mb-3">
            <h3 
            class="text-2xl"
            v-on:mouseover="mouseover"
            v-on:mouseleave="mouseleave">
            " {{message}} "
            </h3>
            <p class="text-xs mb-2">(proverbe japonais)</p>
        </div>
    </div>
    
</template>

<script>

export default {
    name: "about-view",
    data() {
        return {
            message: '弘法筆を択ばず'
        }
    },
    methods: {
        mouseover: function(){
        this.message = 'La compassion portée aux autres est un bienfait pour soi'
        },    
        mouseleave: function(){
        this.message = '弘法筆を択ばず'
        }
    }
}
</script>

<style scoped>
    #text-about p{
        @apply text-xs md:text-base lg:text-base my-4
    }

    .fond  {
        background-image: url('../assets/images/svg/wave.svg');
        background-repeat: no-repeat;
        background-size: contain;
        background-position: bottom;
    }
</style>