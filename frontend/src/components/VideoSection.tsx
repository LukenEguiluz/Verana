'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ImageWithFallback } from './ImageWithFallback';

interface VideoSectionProps {
  vimeoId?: string;
  thumbnailUrl: string;
  thumbnailAlt: string;
  title?: string;
}

export function VideoSection({
  vimeoId = '4068659',
  thumbnailUrl,
  thumbnailAlt,
  title = 'Play Video',
}: VideoSectionProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative w-full aspect-video rounded-lg overflow-hidden group cursor-pointer">
      <AnimatePresence mode="wait">
        {!isPlaying ? (
          <motion.div
            key="thumbnail"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative w-full h-full"
            onClick={() => setIsPlaying(true)}
          >
            <ImageWithFallback
              src={thumbnailUrl}
              alt={thumbnailAlt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 80vw"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="relative">
                <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl">
                  <svg
                    className="w-10 h-10 text-amber-600 ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <motion.div
                  className="absolute inset-0 bg-white/30 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              </div>
              <span className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white font-medium text-lg">
                {title}
              </span>
            </motion.div>
          </motion.div>
        ) : (
          <motion.iframe
            key="video"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            src={`https://player.vimeo.com/video/${vimeoId}?autoplay=1&title=0&byline=0&portrait=0`}
            className="w-full h-full"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title={title}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
