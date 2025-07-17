"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Photo } from "@/types/photo";
import { useFavorites } from "@/hooks/useFavorites";
import { useAuth } from "@/hooks/useAuth";
import PhotosList from "@/components/photos/PhotosList";
import { fetchPhotos } from "@/services/photosApi";
import Logo from "../ui/Logo";

export default function PhotosView() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const { favorites, toggleFavorite } = useFavorites();
  const { checkingAuth, logout } = useAuth();

  useEffect(() => {
    const load = async () => {
      try {
        setIsLoading(true);
        const photos = await fetchPhotos();
        setPhotos(photos);
      } catch (error) {
        console.error("Error loading photos:", error);
      } finally {
        setIsLoading(false);
      }
    };
    load();
  }, []);

  if (checkingAuth) return null;

  return (
    <main className="min-h-screen bg-white px-4 py-8 flex justify-center">
      <div className="w-full max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-2">
          <Logo />
          <button
            onClick={logout}
            className="text-sm font-bold text-blue-600 cursor-pointer hover:text-blue-800 transition-colors duration-200"
          >
            Logout
          </button>
        </div>
        <h1 className="font-bold text-[20px] mt-[24px] mb-8">All photos</h1>

        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="loader"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex justify-center py-10"
            >
              <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
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