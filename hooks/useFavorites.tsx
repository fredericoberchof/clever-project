import { useEffect, useState } from "react";

export function useFavorites() {
  const [favorites, setFavorites] = useState<number[] | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("favorites");
    if (stored) {
      try {
        setFavorites(JSON.parse(stored));
      } catch {
        setFavorites([]);
      }
    } else {
      setFavorites([]);
    }
  }, []);

  useEffect(() => {
    if (favorites !== null) {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  }, [favorites]);

  const toggleFavorite = (id: number) => {
    if (favorites === null) return;
    setFavorites((prev) =>
      prev!.includes(id) ? prev!.filter((fav) => fav !== id) : [...prev!, id]
    );
  };

  return { favorites: favorites ?? [], toggleFavorite };
}