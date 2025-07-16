"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Logo from "@/components/Logo";
import PhotosList from "@/components/PhotosList";
import { motion, AnimatePresence } from "framer-motion";

type Photo = {
  id: number;
  photographer: string;
  photographer_url: string;
  src: { medium: string };
  alt: string;
  avg_color: string;
};

export default function PhotosPage() {
  const router = useRouter();
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [checkingAuth, setCheckingAuth] = useState(true);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  useEffect(() => {
    const isAuth = localStorage.getItem("isAuth");
    if (!isAuth) {
      router.push("/signin");
    } else {
      setCheckingAuth(false);
    }
  }, [router]);

  useEffect(() => {
    const fetchPhotos = async () => {
      setIsLoading(true);

      const res = await fetch(
        "https://api.pexels.com/v1/search?query=nature&per_page=10",
        {
          headers: {
            Authorization:
              "Mz0iC21IFLz9HuN8ypIbJ54l8OuGnpW2IsVoQrYBEyagQXt1YeBEA7H0",
          },
        }
      );
      const data = await res.json();
      setPhotos(data.photos);
      setIsLoading(false);
    };

    fetchPhotos();
  }, []);

  if (checkingAuth) {
    return null;
  }

  return (
    <main className="min-h-screen bg-white px-4 py-8 flex justify-center">
      <div className="w-full max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-2">
          <Logo />
          <button
            onClick={() => {
              localStorage.removeItem("isAuth");
              router.push("/signin");
            }}
            className="text-sm font-bold text-blue-600 cursor-pointer hover:text-blue-800 transition-colors duration-200"
          >
            Logout
          </button>
        </div>
        <h1 className="font-bold text-[20px] mt-[24px] mb-8 font-['Helvetica']">
          All photos
        </h1>
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="loader"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex justify-center py-10"
            >
              <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            </motion.div>
          ) : (
            <motion.div
              key="photos"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <PhotosList
                photos={photos}
                favorites={favorites}
                toggleFavorite={toggleFavorite}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
