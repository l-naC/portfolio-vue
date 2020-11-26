<template>
    <div class="w-screen h-screen bg-gray-800 flex items-center justify-center text-center">
        <div class="w-full">
            <h2 class="font-bold text-xl text-gray-600 m-3">Skills</h2>
            <div class="w-full flex flex-row justify-evenly flex-wrap">
                <div v-for="(skill, index) in skillsData" :key="index">

                    <div class="card-default cursor-pointer" v-on:click="show(index)">
                        <p class="cardtext-default">{{ skill.name }}</p>
                    </div>
                </div>
            </div>
            <div class="w-full" v-if="isDisplay">
                <p class="w-11/12 text-sm mx-auto my-5 text-white">{{ array.description }}</p>

                <transition-group name="list-complete" tag="div" class="w-96 h-96 p-16 my-5 mx-auto bg-white rounded-full flex justify-evenly items-center flex-wrap">
                    <span v-for="item in array.outils" :key="item" class="list-complete-item">
                    {{ item }}
                    </span>
                </transition-group>
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
            isDisplay: false,
            array: ''
        }
    },
    methods: {
        show: function (e) {
            this.isDisplay = true;
            this.array = this.skillsData[e]
            this.array.outils = _.shuffle(this.array.outils)
        },
    }
}
</script>

<style scoped>
    .card-default {
        @apply w-32 h-32 rounded-full bg-white shadow-2xl flex items-center justify-center
    }

    .cardtext-default {
        @apply text-sm
    }

    .list-complete-item {
        transition: all .5s ease;
    }

    span:nth-of-type(2n) {
        padding-top: 2rem;
        margin-right: 2rem;
    }
</style>