export const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const keyAPI = ``;
export const tmdbAPI = {
  getMovieList: (type) =>
    `https://api.themoviedb.org/3/movie/${type}?language=en-US&page=1`,
  getDetailFilm: (id) => `https://api.themoviedb.org/3/movie/${id}`,
  getSrcFlim: (id) => `https://api.themoviedb.org/3/movie/${id}/videos`,
  getImg: (poster_path) => `https://image.tmdb.org/t/p/w500/${poster_path}`,
};
