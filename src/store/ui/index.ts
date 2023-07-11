import { create } from 'zustand'

interface initState {
  isScrolling: boolean
  handleScrolling: () => void
  handleRestScrolling: () => void
}

export const useStore = create<initState>(set => ({
  // initial state
  isScrolling: false,
  // methods for manipulating state
  handleScrolling: () => {
    set({
      isScrolling: true,
    })
  },
  handleRestScrolling: () => {
    set({
      isScrolling: false,
    })
  },
}))
