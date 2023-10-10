import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { VolType } from '@/views/ModeAdminView.vue'

export const useFlightStore = defineStore('FlightStore', () => {
  const flights = ref<VolType[]>([])

  return { flights }
})
