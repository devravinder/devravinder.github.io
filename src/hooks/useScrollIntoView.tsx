import { useEffect } from "react";

export default function useScrollIntoView(
  ref: React.RefObject<HTMLDivElement | null>,
) {
  const scrollIntoView = (ele: HTMLDivElement) => {
    ele.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    const ele = ref?.current;
    if (ele) scrollIntoView(ele);
  }, [ref]);
}
