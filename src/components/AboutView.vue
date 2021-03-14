<template>
    <div class="w-screen h-screen flex items-center justify-evenly flex-col" id="about">
        <div class="flex items-center justify-evenly px-2 flex-col sm:flex-col md:flex-row lg:flex-row">
            <div class="w-full sm:w-full md:w-1/2 lg:w-1/2" id="text-about">
                <h1 class="sm:text-xs md:text-2xl lg:text-2xl my-2 font-normal md:font-bold lg:font-bold">{{ $t("intro.baseline") }}</h1>
                <p>
                    {{ $t("intro.pargraphe1") }}
                    <br/><br/>
                    {{ $t("intro.pargraphe2") }}
                    <br/><br/>
                    {{ $t("intro.pargraphe3") }}
                    <br/><br/>
                    {{ $t("intro.pargraphe4") }}
                </p>
                <div class="text-center my-5">
                    <a href="mailto:contact@lenaclavier.com" class="border border-transparent shadow-sm font-medium bg-yellowstars hover:bg-yellowhover rounded-full py-1 px-3 md:px-6 lg:px-6 mr-3 mr-3 mb-3 mb-3 mt-3 md:mr-3 lg:mr-3 md:mb-3 lg:mb-3 text-xs md:text-sm lg:text-sm text-white focus:outline-none">Contact me</a>
                </div>
            </div>
            <div id="image-about" class="flex md:block lg:block justify-center">
                <img class="w-1/2 md:w-full lg:w-full h-auto" src="../assets/images/torii.webp" alt="torii">
            </div>
        </div>
        <div class="w-full text-center italic h-1/4 fond mb-5 md:mb-3 lg:mb-3">
            <h3 
            class="text-xs md:text-xl lg:text-lg text-redjapan"
            v-on:mouseover="mouseover"
            v-on:mouseleave="mouseleave">
            " {{message}} "
            </h3>
            <p class="text-xs mb-2">{{ $t("intro.proverbeP") }}</p>
        </div>
    </div>
    
</template>

<script>

export default {
    name: "about-view",
    data() {
        return {
            message: '猿も木から落ちる'
        }
    },
    methods: {
        mouseover: function(){
        this.message = this.$i18n.t("intro.proverbe")
        },    
        mouseleave: function(){
        this.message = '猿も木から落ちる'
        }
    }
}
</script>

<style scoped>
    #text-about p{
        @apply text-xs md:text-base lg:text-base my-2
    }

    .fond  {
        background-image: url('../assets/images/svg/wave.svg');
        background-repeat: no-repeat;
        background-size: contain;
        background-position: bottom;
    }
</style>