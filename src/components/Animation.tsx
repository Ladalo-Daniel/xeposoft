import React, { useEffect, useRef, ReactNode } from "react";

interface InViewProps {
  children: ReactNode;
  width?: string;
}

export default function InView({ children, width = 'fit-content' }: InViewProps) {
  const [isVisible, setIsVisible] = React.useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const options = {
      root: null, // use the viewport as the root
      rootMargin: '0px', // no margin
      threshold: 0.5, // 50% of the target element must be visible
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (observerRef.current) {
            observerRef.current.unobserve(entry.target); // Stop observing once visible
          }
        } else {
          setIsVisible(false);
        }
      });
    };

    observerRef.current = new IntersectionObserver(handleIntersection, options);

    if (containerRef.current && observerRef.current) {
      observerRef.current.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current && observerRef.current) {
        observerRef.current.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`reveal-container ${isVisible ? 'visible' : 'hidden'}`}
      style={{ position: 'relative', width, overflow: 'hidden' }}
    >
      <div className="main-content">{children}</div>
      {/* <div className="slide-content"></div> */}
    </div>
  );
}
