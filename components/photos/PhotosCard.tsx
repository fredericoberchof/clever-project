"use client";

import { Photo } from "@/types/photo";
import Link from "next/link";
import Image from "next/image";

type PhotoCardProps = {
  photo: Photo;
  isFavorite: boolean;
  toggleFavorite: (id: number) => void;
};

export default function PhotoCard({
  photo,
  isFavorite,
  toggleFavorite,
}: PhotoCardProps) {
  return (
    <div className="flex items-start gap-4">
      <button
        type="button"
        onClick={() => toggleFavorite(photo.id)}
        className="text-xl focus:outline-none"
        aria-label={isFavorite ? "Unfavorite" : "Favorite"}
      >
        {isFavorite ? (
          <svg width="20" height="20" fill="#FFD700" viewBox="0 0 24 24">
            <path d="M12 17.75l-6.172 3.245 1.179-6.881-5-4.873 6.9-1.002L12 2.25l3.093 6.989 6.9 1.002-5 4.873 1.179 6.881z" />
          </svg>
        ) : (
          <svg
            width="20"
            height="20"
            fill="none"
            stroke="#FFD700"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M12 17.75l-6.172 3.245 1.179-6.881-5-4.873 6.9-1.002L12 2.25l3.093 6.989 6.9 1.002-5 4.873 1.179 6.881z" />
          </svg>
        )}
      </button>

      <Image
        src={photo.src.medium}
        alt={photo.alt}
        width={75}
        height={75}
        className="w-20 h-20 object-cover rounded-lg"
        loading="lazy"
      />

      <div className="flex flex-col flex-1">
        <p className="font-bold text-[14px]">{photo.photographer}</p>
        <p className="text-[#111827] text-[14px]">
          {photo.alt || "No alt text"}
        </p>
        <p className="text-[14px] text-gray-500 flex items-center gap-1">
          <span style={{ color: photo.avg_color }}>#{photo.id}</span>
          <span
            className="inline-block ml-1 w-[12px] h-[12px]"
            style={{ backgroundColor: photo.avg_color }}
          ></span>
        </p>
      </div>

      <Link
        href={photo.photographer_url}
        target="_blank"
        className="text-[#0075EB] text-[12px] flex items-center gap-1 transition-colors hover:text-blue-800"
      >
        <Image
          src="/links.svg"
          alt="Link icon"
          width={12}
          height={12}
          loading="lazy"
        />
        Portfolio
      </Link>
    </div>
  );
}
