<template>
    <div class="w-screen h-screen flex items-center justify-center text-center" id="section-skills">
        <div class="w-full" id="test">
            <div class="flex flex-row items-center">
                <h2 class="font-bold m-0 cursor-pointer title-skills uppercase text-redjapan text-6xl sm:text-6xl md:text-8xl lg:text-8xl font-mineBold hover:text-black" v-on:click="all()">Skills</h2>
                <div class="w-1/5 flex flex-col content-center justify-evenly flex-wrap my-5">
                    <div class="card-skills" v-for="(skill, index) in skillsData" :key="index">
                        <div @mouseover="hoverIn(index)" @mouseout="hoverOut(index)" class="card-default cursor-pointer transition duration-500 ease-in-out transform hover:scale-110 m-3" v-on:click="show(index)">
                            <p v-if="hover && indexSkill==index" class="card-text-default">{{ skill.name }}</p>
                            <img class="w-1/3" v-else :src="skill.icon" alt="icon">
                        </div>
                    </div>
                </div>
                <div id="infos-skills" class="w-4/5">
                    <div class="w-4/5 flex flex-wrap justify-center m-auto" v-if="isDisplay">
                        <p class="w-full font-thin text-xs sm:text-xs md:text-lg lg:text-lg m-5">{{array.description}}</p>
                        <span v-for="item in array.outils" :key="item" class="transition duration-500 ease-in-out p-3" :style="textStyle">
                            {{ item }}
                        </span>
                    </div>
                    <div class="w-4/5 flex flex-wrap justify-center m-auto" v-else>
                        <template v-for="(skill, index) in skillsData" :key="index">
                            <span v-for="item in skillsData[index].outils" :key="item" class="transition duration-500 ease-in-out p-3" :style="textStyle">
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
            indexSkill: ''
        }
    },
    computed:{
        textStyle: function() {
            return this.color
        },
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
            console.log(this.indexSkill)
        },
        hoverOut: function (index) {
            this.hover = false
            this.indexSkill =index
        }
    }
}

</script>

<style scoped>
    .title-skills{
        writing-mode: vertical-rl;
        text-orientation: upright;
    }

    .card-default {
        @apply w-16 h-16 sm:w-16 sm:h-16 md:w-28 md:h-28 lg:w-28 lg:w-28 rounded-full bg-gray-200 shadow-2xl flex items-center justify-center hover:bg-redjapan hover:text-white
    }

    .card-text-default {
        @apply text-sm
    }

    span{
        @apply font-bold
    }

    span:nth-child(2n) {
        @apply text-base sm:text-base md:text-2xl lg:text-3xl
    }
</style>