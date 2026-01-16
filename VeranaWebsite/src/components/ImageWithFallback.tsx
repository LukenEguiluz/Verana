'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

interface ImageWithFallbackProps {
  src?: string | null;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
  onError?: () => void;
}

// Imagen placeholder SVG inline (codificado para evitar problemas con Buffer en cliente)
const PLACEHOLDER_IMAGE = `data:image/svg+xml,${encodeURIComponent(
  `<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="600" fill="#f3f4f6"/>
    <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="24" fill="#9ca3af" text-anchor="middle" dy=".3em">
      Verana Hotel
    </text>
  </svg>`
)}`;

export function ImageWithFallback({
  src,
  alt,
  fill,
  width,
  height,
  className = '',
  priority = false,
  sizes,
  onError,
}: ImageWithFallbackProps) {
  // Si no hay src, usar placeholder directamente
  const initialSrc = src || PLACEHOLDER_IMAGE;
  const [imgSrc, setImgSrc] = useState(initialSrc);
  const [hasError, setHasError] = useState(!src);

  // Actualizar imgSrc cuando src cambia
  useEffect(() => {
    if (src) {
      setImgSrc(src);
      setHasError(false);
    } else {
      setImgSrc(PLACEHOLDER_IMAGE);
      setHasError(true);
    }
  }, [src]);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImgSrc(PLACEHOLDER_IMAGE);
      onError?.();
    }
  };

  // Si no hay src o hay error, usar placeholder
  const finalSrc = (!src || hasError) ? PLACEHOLDER_IMAGE : imgSrc;

  const imageProps = fill
    ? {
        fill: true,
        className: `${className} object-cover`,
        sizes: sizes || '100vw',
      }
    : {
        width: width || 800,
        height: height || 600,
        className,
      };

  return (
    <Image
      src={finalSrc}
      alt={alt}
      {...imageProps}
      priority={priority}
      onError={handleError}
    />
  );
}
