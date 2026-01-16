'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ImageWithFallback } from './ImageWithFallback';

interface VideoBackgroundProps {
  videoUrl: string;
  videoUrlMobile?: string;
  fallbackImage: string;
  fallbackAlt: string;
  className?: string;
  overlay?: boolean;
}

export function VideoBackground({
  videoUrl,
  videoUrlMobile,
  fallbackImage,
  fallbackAlt,
  className = '',
  overlay = true,
}: VideoBackgroundProps) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [useVideo, setUseVideo] = useState(true);
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detectar si es móvil
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Optimizaciones de performance
    video.playsInline = true;
    video.muted = true;
    video.loop = true;
    video.preload = 'metadata'; // Solo carga metadata inicialmente
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', '');

    // Intentar cargar el video
    const handleCanPlay = () => {
      setIsVideoLoaded(true);
      // Reproducir solo cuando esté listo
      video.play().catch(() => {
        // Si falla la reproducción, usar imagen
        setUseVideo(false);
        setHasError(true);
      });
    };

    const handleError = () => {
      setUseVideo(false);
      setHasError(true);
    };

    const handleLoadStart = () => {
      // Cargar el video completo solo cuando sea necesario
      if (video.readyState >= 2) {
        video.load();
      }
    };

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('error', handleError);
    video.addEventListener('loadstart', handleLoadStart);

    // Cargar el video apropiado según el dispositivo
    const videoToLoad = isMobile && videoUrlMobile ? videoUrlMobile : videoUrl;
    if (video.src !== videoToLoad) {
      video.src = videoToLoad;
    }

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('error', handleError);
      video.removeEventListener('loadstart', handleLoadStart);
    };
  }, [videoUrl, videoUrlMobile, isMobile]);

  // Pausar video cuando no está visible (Intersection Observer)
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !useVideo) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, [useVideo]);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Video de fondo */}
      {useVideo && !hasError && (
        <motion.video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: isVideoLoaded ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          playsInline
          muted
          loop
          preload="metadata"
          aria-label="Background video"
        />
      )}

      {/* Imagen de fallback */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: useVideo && !hasError ? 0 : 1 }}
        animate={{ opacity: useVideo && !hasError && isVideoLoaded ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        <ImageWithFallback
          src={fallbackImage}
          alt={fallbackAlt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>

      {/* Overlay oscuro */}
      {overlay && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"
          animate={{
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      )}
    </div>
  );
}
