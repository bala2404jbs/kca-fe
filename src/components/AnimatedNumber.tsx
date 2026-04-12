'use client';

import { useEffect, useState } from 'react';

export default function AnimatedNumber({ value }: { value: number }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;

    let totalDuration = 1000; // 1 second
    let frameDuration = 1000 / 60; // 60 fps
    let totalFrames = Math.round(totalDuration / frameDuration);
    let currentFrame = 0;

    const timer = setInterval(() => {
      currentFrame++;
      const progress = currentFrame / totalFrames;
      // Ease out cubic
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      
      const current = Math.floor(end * easedProgress);
      setDisplayValue(current);

      if (currentFrame >= totalFrames) {
        clearInterval(timer);
        setDisplayValue(end);
      }
    }, frameDuration);

    return () => clearInterval(timer);
  }, [value]);

  return <>{displayValue.toLocaleString()}</>;
}
