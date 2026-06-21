import { useEffect } from "react";
import useIsMobile from "./useIsMobile";

export default function useScrollIntoView(
  ref: React.RefObject<HTMLDivElement | null>,
) {
  const isMobile = useIsMobile()
  const scrollIntoView = (ele: HTMLDivElement) => {
    ele.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    const ele = ref?.current;
    if (ele && isMobile) scrollIntoView(ele);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);
}
