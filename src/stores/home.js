
import { defineStore } from 'pinia'

export const useMyStore = defineStore('myStore', {
  state: () => {
    return {
      galleryLazy: true,
      teamLazy: true,
    }
  },


})
