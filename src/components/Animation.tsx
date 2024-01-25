"use client"

import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion';

interface Props {
    children: JSX.Element;
    width?: "fit-content" | "100%";
    className?: string;
}

export default function SlideUp({ children, className, width = "fit-content" }: Props) {
    const ref = useRef(null);
    const isInview = useInView(ref, { once: true });

    const mainControls = useAnimation();

    useEffect(()=>{
        if(isInview){
            //Fire the animation
            mainControls.start("visible");
        }
    }, [isInview, mainControls]);
  return (
    <div ref={ref} style={{ position: "relative", width}}>
        <motion.div
           variants={{
            hidden: { opacity: 0, y: 75},
            visible: { opacity: 1, y: 0},
           }}
           initial="hidden"
           animate={mainControls}
           transition={{ duration: 1.5, delay:0.1}}
        >
            { children }
        </motion.div>
    </div>
  )
}







// "use client"

// import React, { useEffect, useRef, ReactNode } from "react";

// interface InViewProps {
//   children: ReactNode;
//   width?: string;
// }

// export default function InView({ children, width = 'fit-content' }: InViewProps) {
//   const [isVisible, setIsVisible] = React.useState(false);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const observerRef = useRef<IntersectionObserver | null>(null);

//   useEffect(() => {
//     const options = {
//       root: null,
//       rootMargin: '0px',
//       threshold: 0.5,
//     };

//     const handleIntersection = (entries: IntersectionObserverEntry[]) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           if (observerRef.current) {
//             observerRef.current.unobserve(entry.target);
//           }
//         } else {
//           setIsVisible(false);
//         }
//       });
//     };

//     observerRef.current = new IntersectionObserver(handleIntersection, options);

//     // Capture the current value of containerRef.current
//     const currentContainerRef = containerRef.current;

//     if (currentContainerRef && observerRef.current) {
//       observerRef.current.observe(currentContainerRef);
//     }

//     return () => {
//       // Use the captured variable in the cleanup function
//       if (currentContainerRef && observerRef.current) {
//         observerRef.current.unobserve(currentContainerRef);
//       }
//     };
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       className={`reveal-container ${isVisible ? 'visible' : 'hidden'}`}
//       style={{ position: 'relative', width, overflow: 'hidden' }}
//     >
//       <div className="main-content">{children}</div>
//     </div>
//   );
// }






// // "use client"

// // import React, { useEffect, useRef, ReactNode } from "react";

// // interface InViewProps {
// //   children: ReactNode;
// //   width?: string;
// // }

// // export default function InView({ children, width = 'fit-content' }: InViewProps) {
// //   const [isVisible, setIsVisible] = React.useState(false);
// //   const containerRef = useRef<HTMLDivElement>(null);
// //   const observerRef = useRef<IntersectionObserver | null>(null);

// //   useEffect(() => {
// //     const options = {
// //       root: null, // use the viewport as the root
// //       rootMargin: '0px', // no margin
// //       threshold: 0.5, // 50% of the target element must be visible
// //     };

// //     const handleIntersection = (entries: IntersectionObserverEntry[]) => {
// //       entries.forEach((entry) => {
// //         if (entry.isIntersecting) {
// //           setIsVisible(true);
// //           if (observerRef.current) {
// //             observerRef.current.unobserve(entry.target); // Stop observing once visible
// //           }
// //         } else {
// //           setIsVisible(false);
// //         }
// //       });
// //     };

// //     observerRef.current = new IntersectionObserver(handleIntersection, options);

// //     if (containerRef.current && observerRef.current) {
// //       observerRef.current.observe(containerRef.current);
// //     }

// //     return () => {
// //       if (containerRef.current && observerRef.current) {
// //         observerRef.current.unobserve(containerRef.current);
// //       }
// //     };
// //   }, []);

// //   return (
// //     <div
// //       ref={containerRef}
// //       className={`reveal-container ${isVisible ? 'visible' : 'hidden'}`}
// //       style={{ position: 'relative', width, overflow: 'hidden' }}
// //     >
// //       <div className="main-content">{children}</div>
// //       {/* <div className="slide-content"></div> */}
// //     </div>
// //   );
// // }
