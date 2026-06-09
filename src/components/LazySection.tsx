import type { ReactNode } from "react";
import { useLazyLoad } from "../hooks/useLazyLoad";

interface LazySectionProps {
  children: ReactNode;
  minHeight?: number;
}

export default function LazySection({
  children,
  minHeight = 1000,
}: LazySectionProps) {
  const { ref, isVisible } = useLazyLoad();

  return (
    <div ref={ref}>
      {isVisible ? children : <div style={{ minHeight }} aria-hidden="true" />}
    </div>
  );
}
