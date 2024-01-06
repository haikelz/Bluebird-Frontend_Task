import { scrollAtom } from "@/store";
import { useAtom } from "jotai";
import { useCallback, useEffect } from "react";

export function useScroll() {
  const [scroll, setScroll] = useAtom(scrollAtom);

  const handleScroll = useCallback(() => {
    const position = window.scrollY;
    setScroll(position);
  }, [setScroll]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return scroll;
}
