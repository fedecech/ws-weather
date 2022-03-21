import create from 'zustand'

export const useSelectedLocationStore = create(set => ({
    location: null,
    setLocation: (city, countryCode) => set({ location: `${city},${countryCode}` }),
    reset: () => set({ location: null })
}))