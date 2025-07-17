export async function fetchPhotos(query = "nature", perPage = 10) {
  const response = await fetch(
    `https://api.pexels.com/v1/search?query=${query}&per_page=${perPage}`,
    {
      headers: {
        Authorization: "Mz0iC21IFLz9HuN8ypIbJ54l8OuGnpW2IsVoQrYBEyagQXt1YeBEA7H0",
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch photos");
  }

  const data = await response.json();
  return data.photos;
}
