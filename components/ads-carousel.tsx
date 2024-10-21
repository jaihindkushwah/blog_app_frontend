"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

const movies = [
  {
    title: "The Space Adventure",
    poster:
      "https://static-cse.canva.com/blob/1232107/tools-feature_add-text-to-photo_hero_mobile.ad06590a.jpg",
  },
  {
    title: "Mystery in the Woods",
    poster:
      "https://content-management-files.canva.com/cdn-cgi/image/f=auto,q=70/f37ccd42-3387-4302-aa00-302d23ba5940/magic-write_promo-showcase_012x.png",
  },

  {
    title: "Mystery in the Woods",
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNorcJka_yVYmdFnfraAkwPM4ldSExzd8fsA&s",
  },
  {
    title: "Love in Paris",
    poster:
      "https://moonsterleather.com/cdn/shop/articles/creative_writing_journal_1920x.jpg?v=1695818824",
  },
];

export default function AdsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + movies.length) % movies.length
    );
  };

  return (
    <div className="flex items-center w-full ">
      <Card className="w-full overflow-hidden">
        <CardContent className="p-0 relative">
          <div className="relative  aspect-video">
            {movies.map((movie, index) => (
              <>
                <div
                  key={movie.title}
                  className={`absolute top-0 z-0 left-0 w-full h-full transition-opacity duration-500 ${
                    index === currentIndex ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={movie.poster}
                    alt={`${movie.title} poster`}
                    fill
                    className="object-cover"
                  />
                </div>
              </>
            ))}
          </div>
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
            aria-label="Previous movie"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
            aria-label="Next movie"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {movies.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 rounded-full ${
                  index === currentIndex ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </CardContent>
        <h1 className={`text-lg  p-1 text-center`}>
          {movies[currentIndex].title}
        </h1>
      </Card>
    </div>
  );
}
