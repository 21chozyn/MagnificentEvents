import  React from "react";

const useLoadImgOnIntersection = (photoLayout) => {
  React.useEffect(() => {
    const observerOptions = {
      root: null,
      // rootMargin: "-100px",
      threshold: 1.0,
    };

    const observer = new IntersectionObserver((elements) => {
      elements.forEach((element) => {
        if (element.isIntersecting) {
          const image = element.target;
          image.src = image.id;
          image.classList.remove("lazy");
          observer.unobserve(image);
        }
      });
    }, observerOptions);
    const elements = document.querySelectorAll(".lazy");
    elements.forEach((element) => observer.observe(element));
  }, [photoLayout]);
};

export default useLoadImgOnIntersection;
