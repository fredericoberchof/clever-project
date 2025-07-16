"use client";

import { Photo } from "@/types/photo";
import { motion } from "framer-motion";
import PhotoCard from "./PhotosCard";

type PhotosListProps = {
  photos: Photo[];
  favorites: number[];
  toggleFavorite: (id: number) => void;
};

export default function PhotosList({
  photos,
  favorites,
  toggleFavorite,
}: PhotosListProps) {
 return (
    <div className="flex flex-col gap-[12px]">
      {photos.map((photo, idx) => (
        <motion.div
          key={photo.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.07, duration: 0.4 }}
        >
          <PhotoCard
            photo={photo}
            isFavorite={favorites.includes(photo.id)}
            toggleFavorite={toggleFavorite}
          />
        </motion.div>
      ))}
    </div>
  );
}
