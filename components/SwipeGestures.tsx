import React, { useState, useEffect, useRef, TouchEvent } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface SwipeGesturesProps {
  children: React.ReactNode;
}

export const SwipeGestures: React.FC<SwipeGesturesProps> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const routes = ['/', '/services', '/projects', '/about', '/contact'];
  const minSwipeDistance = 50;

  const onTouchStart = (e: TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    const currentIndex = routes.indexOf(location.pathname);

    if (isLeftSwipe && currentIndex < routes.length - 1) {
      // Swipe left - next page
      navigate(routes[currentIndex + 1]);
      triggerHapticFeedback();
    }

    if (isRightSwipe && currentIndex > 0) {
      // Swipe right - previous page
      navigate(routes[currentIndex - 1]);
      triggerHapticFeedback();
    }
  };

  const triggerHapticFeedback = () => {
    if ('vibrate' in navigator) {
      navigator.vibrate(10);
    }
  };

  return (
    <div
      ref={containerRef}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      className="w-full"
    >
      {children}
    </div>
  );
};
