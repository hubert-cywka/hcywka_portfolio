import { RefObject, useEffect, useState } from 'react';

export const useAppearance = (element: RefObject<any>, rootMargin?: string, threshold?: number) => {
  const [isVisible, setState] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState(entry.isIntersecting);
        }
      },
      { rootMargin: rootMargin, threshold: threshold }
    );

    element.current && observer.observe(element.current);

    return () => observer.unobserve(element.current);
  }, []);

  return isVisible;
};
