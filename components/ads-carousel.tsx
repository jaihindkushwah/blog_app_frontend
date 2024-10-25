"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const movies = [
  {
    title: "The Space Adventure",
    poster:
      "https://static-cse.canva.com/blob/1232107/tools-feature_add-text-to-photo_hero_mobile.ad06590a.jpg",
    genre: "Sci-Fi",
    rating: 4.5,
    description:
      "An epic journey through the cosmos, exploring unknown worlds and facing unimaginable challenges.",
  },
  {
    title: "Mystery in the Woods",
    poster:
      "https://content-management-files.canva.com/cdn-cgi/image/f=auto,q=70/f37ccd42-3387-4302-aa00-302d23ba5940/magic-write_promo-showcase_012x.png",
    genre: "Thriller",
    rating: 4.2,
    description:
      "A gripping tale of suspense as a group of friends uncover dark secrets hidden in an ancient forest.",
  },
  {
    title: "Secrets of the Deep",
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNorcJka_yVYmdFnfraAkwPM4ldSExzd8fsA&s",
    genre: "Documentary",
    rating: 4.7,
    description:
      "Dive into the unexplored depths of our oceans and discover the wonders of marine life.",
  },
  {
    title: "Love in Paris",
    poster:
      "https://moonsterleather.com/cdn/shop/articles/creative_writing_journal_1920x.jpg?v=1695818824",
    genre: "Romance",
    rating: 4.0,
    description:
      "A heartwarming story of two souls finding love amidst the enchanting backdrop of the City of Lights.",
  },
];

export default function EnhancedTallAdsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [isHovered]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + movies.length) % movies.length
    );
  };

  return (
    <Card
      className="w-full max-w-sm mx-auto overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-0 relative">
        <div className="relative h-[520px]">
          <AnimatePresence initial={false}>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <Image
                src={movies[currentIndex].poster}
                alt={`${movies[currentIndex].title} poster`}
                fill
                sizes="fill"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
            </motion.div>
          </AnimatePresence>
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <h2 className="text-2xl font-bold mb-2">
              {movies[currentIndex].title}
            </h2>
            <div className="flex items-center space-x-2 mb-2">
              <Badge variant="secondary">{movies[currentIndex].genre}</Badge>
              <span className="text-yellow-400">
                ★ {movies[currentIndex].rating.toFixed(1)}
              </span>
            </div>
            <p className="mb-4 text-sm text-gray-200 line-clamp-3">
              {movies[currentIndex].description}
            </p>
            <Button className="bg-primary hover:bg-primary/90 w-full">
              <Play className="mr-2 h-4 w-4" /> Watch Now
            </Button>
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white rounded-full hover:bg-black/70"
          onClick={prevSlide}
          aria-label="Previous movie"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white rounded-full hover:bg-black/70"
          onClick={nextSlide}
          aria-label="Next movie"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
        <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {movies.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-all ${
                index === currentIndex ? "bg-white w-4" : "bg-white/50"
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
