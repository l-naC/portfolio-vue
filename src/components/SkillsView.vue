<template>
    <div class="w-screen h-screen flex items-center justify-center text-center" id="skills">
        <div class="w-full" id="test">
            <div class="flex flex-row items-center">
                <h1 class="font-medium m-0 cursor-pointer title-skills text-3xl md:text-5xl lg:text-5xl uppercase text-redjapan font-mineBold hover:text-black" v-on:click="all()">{{ $t("competences.titre") }}</h1>
                <div class="w-2/12 flex flex-col content-center justify-evenly flex-wrap my-5">
                    <div class="card-skills block md:hidden lg:hidden" v-for="(skill, index) in skillsData" :key="index">
                        <div class="card-default cursor-pointer transition duration-500 ease-in-out transform hover:scale-110 m-3" v-on:click="show(index)">
                            <p v-if="hover && indexSkill==index" class="card-text-default">{{ $t('skills['+skill['id']+'].name') }}</p>
                            <img class="w-1/3 skills-icon" v-else :src="skill.icon" alt="icon">
                        </div>
                    </div>
                    <div class="card-skills hidden md:block lg:block" v-for="(skill, index) in skillsData" :key="index">
                        <div @mouseover="hoverIn(index)" @mouseout="hoverOut(index)" class="card-default cursor-pointer transition duration-500 ease-in-out transform hover:scale-110 m-3" v-on:click="show(index)">
                            <p v-if="hover && indexSkill==index" :class="styleDisplay" class="card-text-default">{{ $t('skills['+skill['id']+'].name') }}</p>
                            <img class="w-1/3 h-auto skills-icon" v-else :src="skill.icon" alt="icon">
                        </div>
                    </div>
                </div>
                <div id="infos-skills" class="w-8/12">
                    <div class="flex flex-wrap justify-center px-2" v-if="isDisplay">
                        <h2 class="text-lg md:text-2xl lg:text-2xl">{{ $t('skills['+this.array['id']+'].name') }}</h2>
                        <p class="w-full font-thin text-xs md:text-lg lg:text-lg m-2 md:m-5 lg:m-5">{{ $t('skills['+this.array['id']+'].description') }}</p>
                        <span v-for="item in array.outils" :key="item" class="transition duration-500 ease-in-out p-2 md:p-3 lg::p-3" :style="textStyle">
                            {{ item }}
                        </span>
                    </div>
                    <div class="w-full md:w-4/5 lg:w-4/5 flex flex-wrap justify-center m-auto" v-else>
                        <template v-for="(skill, index) in skillsData" :key="index">
                            <span v-for="item in skillsData[index].outils" :key="item" class="transition duration-500 ease-in-out p-1 md:p-3 lg::p-3" :style="textStyle">
                                {{ item }}
                            </span>
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import portfolioData from '../data/portfolio.json'
import _ from 'lodash'

export default {
    name: "skills-view",
    components: {
    },
    data() {
        return {
            skillsData: portfolioData.skills,
            array: '',
            color: 'color: black',
            isDisplay: false,
            hover: false,
            indexSkill: '',
            skillsName: 'hidden'
        }
    },
    computed:{
        textStyle: function() {
            return this.color
        },
        styleDisplay: function () {
            return this.skillsName
        }
    },
    methods: {
        show: function (e) {
            this.isDisplay = true
            this.array = this.skillsData[e]
            this.array.outils = _.shuffle(this.array.outils)
            this.color = 'color: #B50505'
        },
        all: function () {
            this.isDisplay = false
            this.color = 'color: black'
        },
        hoverIn: function (index) {
            this.hover = true
            this.indexSkill =index
            this.skillsName = 'block'
        },
        hoverOut: function (index) {
            this.hover = false
            this.indexSkill =index
            this.skillsName = 'hidden'
        }
    }
}

</script>

<style scoped>
    .skills-icon{
        animation: animate 10s linear infinite;
    }    
    @keyframes animate{
    100% {transform: rotate(1turn); }
	}

    .test:nth-child(2)
    {
    animation-delay: -0.2s;
    }

    .test:nth-child(3)
    {
    animation-delay: -0.4s;
    }

    .title-skills{
        writing-mode: vertical-rl;
        text-orientation: upright;
        font-size: 4rem;
    }

    @media (max-width: 640px) {
        .title-skills{
           @apply text-2xl
        }
    }

    .card-default {
        @apply w-16 h-16 sm:w-16 sm:h-16 md:w-28 md:h-28 lg:w-28 lg:w-28 rounded-full bg-gray-200 shadow-2xl flex items-center justify-center hover:bg-redjapan hover:text-white
    }

    .card-text-default {
        @apply text-sm
    }

    span{
        @apply font-bold text-sm md:text-base lg:text-base
    }

    span:nth-child(2n) {
        @apply text-xs md:text-2xl lg:text-3xl 
    }
</style>