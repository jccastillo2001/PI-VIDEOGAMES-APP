export const mapDetailsVideogames = (element) => {
  // Extraer los nombres de las plataformas
  const platforms = element.platforms.map(
    (platformData) => platformData.platform.name
  );

  // Extraer los nombres de los géneros
  const genres = element.genres.map((genreData) => genreData.name);

  return {
    id: element.id,
    name: element.name,
    description: element.description,
    platforms: platforms,
    image: element.background_image,
    released: element.released,
    rating: element.rating,
    genre: genres,
    created: false,
  };
};
