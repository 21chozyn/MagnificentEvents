import anime from "animejs";
import React from "react";

const useAnimateIntoView = (ref) => {
    const [isIntersecting, setIsIntersecting] = React.useState(false);
    React.useEffect(() => {
      if (!ref.current) {
        console.warn(`${ref} is not of type element`);
        return;
      }
  
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsIntersecting(entry.isIntersecting);
        },
        { rootMargin: "-100px" }
      );
  
      observer.observe(ref.current);
      return () => observer.disconnect();
    }, []);
    React.useEffect(() => {
      if (!ref.current) {
        console.warn(`${ref} is not of type element`);
        return;
      }
      if (isIntersecting) {
        anime({
          targets: `.${ref.current.className}`,
          translateY: [50, 0],
          opacity:[0,1],
          delay: 0,
          duration: 1000,
          easing:"linear"
        });}
      // } else {
      //   anime({
      //     targets: `.${ref.current.className}`,
      //     opacity: 0,
      //     delay: 400,
      //     duration: 1000,
      //   });
      // }
    }, [isIntersecting]);
  
    return isIntersecting;
}

export default useAnimateIntoView