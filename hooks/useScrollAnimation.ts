import { useEffect, useRef } from 'react';
import { useScroll, useTransform, MotionValue, UseScrollOptions } from 'framer-motion';

export const useScrollAnimation = (
  outputRange: [number, number],
  options: UseScrollOptions = {}
) => {
  const { scrollYProgress } = useScroll({
    ...options,
    offset: options.offset || ['start end', 'end start'] as any,
  });

  return useTransform(scrollYProgress, [0, 1], outputRange);
};

export const useScrollReveal = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return ref;
};

export const useParallaxScroll = (speed: number = 0.5): MotionValue<number> => {
  const { scrollY } = useScroll();
  return useTransform(scrollY, (value) => value * speed);
};
