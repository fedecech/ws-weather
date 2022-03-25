import create from "zustand";

/**
 * Hook to tore selected location info
 */
export const useSelectedLocationStore = create((set) => ({
  location: null,
  setLocation: (city, countryCode) =>
    set({ location: `${city},${countryCode}` }),
  reset: () => set({ location: null }),
}));
