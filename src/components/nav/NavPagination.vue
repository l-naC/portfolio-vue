<template>
    <ul class="relative z-0 inline-flex -space-x-px" aria-label="Pagination" v-if="data.length > 3 || currentPage > 1">
        <li class="relative inline-flex items-center px-2 rounded-l-md text-sm font-medium text-gray-500">
            <button type="button" @click="onClickPreviousPage" :disabled="isInFirstPage">
            <svg class="h-5 w-5 text-redjapan" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            </button>
        </li>

        <li class="relative inline-flex items-center px-4 text-sm font-medium text-gray-700" v-for="(page, index) in pages" :key="index">
            <button
            type="button" 
            @click="onClickPage(page.number)" 
            :disabled="page.isDisabled" 
            :class="{ active: isPageActive(page.number), 'text-redjapan': page.isDisabled}">
            {{ page.number }}
            </button>
        </li>

        <li class="relative inline-flex items-center px-2 rounded-r-md text-sm font-medium text-gray-500">
            <button type="button" @click="onClickNextPage" :disabled="isInLastPage">
            <svg class="h-5 w-5 text-redjapan" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
            </svg>
            </button>
        </li>
    </ul>
    <div class="w-full md:w-4/5 lg:w-4/5 h-3/4 flex flex-wrap justify-center sm:flex-col md:flex-row lg:flex-row m-0 md:m-5 lg:m-5">
        <projects-card
            v-for="(project, index) in paginatedData"
            :key="index"
            :projectData="project"
        />
    </div>
</template>

<script>
import ProjectsCard from '../ProjectsCard'

export default {
  name: 'transactions-paginated',
  components: {
      ProjectsCard
  },
  props: {
    data: {
      type: Array,
      required: true
    },
    maxVisibleButtons: {
      type: Number,
      required: false,
      default: 3
    },
    totalPages: {
      type: Number,
      required: true
    },
    total: {
      type: Number,
      required: true
    },
    perPage: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    },
  },
  computed: {
    paginatedData(){
      let start = (this.currentPage - 1) * this.perPage, end = start + this.perPage
      return this.data.slice(start, end)
    },
    startPage() {
      if (this.currentPage === 1) return 1
      if (this.currentPage === this.totalPages) return this.totalPages - this.maxVisibleButtons + (this.maxVisibleButtons -1)
      return this.currentPage - 1
    },
    endPage() { return Math.min(this.startPage + this.maxVisibleButtons - 1, this.totalPages) },
    pages() {
      let range = []
      for (let i = this.startPage; i <= this.endPage; i+= 1 ) {
        range.push({
          number: i,
          isDisabled: i === this.currentPage 
        });
      }
      return range
    },
    isInFirstPage() { return this.currentPage === 1 },
    isInLastPage() { return this.currentPage === this.totalPages }
  },
  emits: ['pagechanged'],
  methods: {
    onClickPreviousPage() {
      this.$emit('pagechanged', this.currentPage - 1)
    },
    onClickPage(page) {
      this.$emit('pagechanged', page)
    },
    onClickNextPage() {
      this.$emit('pagechanged', this.currentPage + 1)
    },
    isPageActive(page) {
      this.currentPage === page
      return this.currentPage
    }
  },
}
</script>


