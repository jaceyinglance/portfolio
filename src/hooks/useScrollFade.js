import { useEffect, useRef, useState } from 'react';

export const useScrollFade = (options = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const currentRef = domRef.current;
    if (!currentRef) return;
    
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, options);
    
    observer.observe(currentRef);
    return () => observer.disconnect();
  }, [options]);

  return [domRef, isVisible];
};
