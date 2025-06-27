
'use client';

import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface ShowcaseVideoPlayerProps {
  videoSrc: string;
  posterSrc: string;
  className?: string;
}

export default function ShowcaseVideoPlayer({ videoSrc, posterSrc, className }: ShowcaseVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    // Set initial muted state. It will be unmuted on intersection if possible.
    videoElement.muted = true; 
    videoElement.loop = true; // Ensure video loops

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoElement.play().catch(error => {
              console.warn("Video play failed (autoplay likely prevented until user interaction):", error);
              // Fallback: ensure controls are visible if autoplay fails or unmuting is blocked
              videoElement.muted = true; // Keep muted if unmuting fails
            });
          } else {
            videoElement.pause();
            videoElement.muted = true; // Mute when out of view
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the video is visible
    );

    observer.observe(videoElement);

    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, []);

  return (
    <div className={cn(
        "w-[85%] mx-auto rounded-2xl shadow-2xl p-[2px] bg-gradient-to-r from-purple-400 via-primary to-purple-600 animate-border-flow animate-fade-in-up",
        className
    )}
    style={{ backgroundSize: '400% 400%' }} // Required for border-flow animation
    >
      <div className="bg-card/80 backdrop-blur-md rounded-[calc(1rem-2px)] p-2.5"> {/* This p-2.5 provides the 10px margin around the video */}
        <div className="aspect-video bg-neutral-900 rounded-lg overflow-hidden shadow-inner">
          <video
            ref={videoRef}
            src={videoSrc}
            controls
            loop // loop attribute added here as well for good measure
            playsInline // Important for iOS autoplay behavior
            className="w-full h-full object-cover"
            poster={posterSrc}
            // muted // Muted is now controlled by useEffect
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}

    