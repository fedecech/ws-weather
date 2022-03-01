
const tabletBreakpoint = 400;

export const useScreenType = () => window.screen.width >= tabletBreakpoint ? "tablet" : "mobile";
