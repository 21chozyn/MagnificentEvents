//this hook animates the list on section 3 on scroll
import anime from "animejs";
import  { useEffect, useState } from "react";

const useAnimateOnIntersection = (ref, isRight) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const deviceWidth = window.innerWidth/8; //this is to get approppriate value for translate
  useEffect(() => {
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
  useEffect(() => {
    if (!ref.current) {
      console.warn(`${ref} is not of type element`);
      return;
    }
    if (isIntersecting) {
      anime({
        targets: `.${ref.current.className}`,
        opacity: 1,
        translateX: [isRight ? deviceWidth : -deviceWidth, 0],
        delay: 0,
        duration: 1000,
        easing:"linear"
      });
    } else {
      anime({
        targets: `.${ref.current.className}`,
        opacity: 0,
        delay: 400,
        duration: 1000,
      });
    }
  }, [isIntersecting]);

  return isIntersecting;
};

export default useAnimateOnIntersection;
