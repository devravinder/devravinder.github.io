
const MOBILE_BREAKPOINT = 768;

export default function useIsMobile(
  breakpoint = MOBILE_BREAKPOINT,
): boolean {
  return window.innerWidth < breakpoint;
}