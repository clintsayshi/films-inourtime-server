// Create a resolver
const resolvers = {
  Query: {
    Movie: (_, { id }, { dataSources }) => {
      return dataSources.moviesAPI.getMovie(id);
    },
    TVShow: (_, { id }, { dataSources }) => {
      return dataSources.moviesAPI.getTVShow(id);
    },
    trendingMovies: (_, { time_window, limit }, { dataSources }) => {
      return dataSources.moviesAPI.getTrendingMovies(time_window, limit);
    },
    trendingTVShows: (_, { time_window, limit }, { dataSources }) => {
      return dataSources.moviesAPI.getTrendingTVShows(time_window, limit);
    },
    moviesByGenre: (_, { genreId, year }, { dataSources }) => {
      return dataSources.moviesAPI.getMoviesByGenre(genreId, year);
    },
    tvByGenre: (_, { genreId, year }, { dataSources }) => {
      return dataSources.moviesAPI.getTVByGenre(genreId, year);
    },
    listOfGenres: (_, { mediaType }, { dataSources }) => {
      return dataSources.moviesAPI.getListOfGenres(mediaType);
    },
    mediaConfig: (_, __, { dataSources }) => {
      return dataSources.moviesAPI.getMediaConfig();
    },
  },
  Movie: {
    genres: ({ id }, _, { dataSources }) => {
      return dataSources.moviesAPI.getMovieGenres(id);
    },
    production_companies: ({ id }, _, { dataSources }) => {
      return dataSources.moviesAPI.getMovieProductionCompanies(id);
    },
    videos: ({ id }, _, { dataSources }) => {
      return dataSources.moviesAPI.getVideos(id, "movie");
    },
  },
  TVShow: {
    genres: ({ id }, _, { dataSources }) => {
      return dataSources.moviesAPI.getTVGenres(id);
    },
    production_companies: ({ id }, _, { dataSources }) => {
      return dataSources.moviesAPI.getTVProductionCompanies(id);
    },
    networks: ({ id }, _, { dataSources }) => {
      return dataSources.moviesAPI.getTVNetworks(id);
    },
    seasons: ({ id }, _, { dataSources }) => {
      return dataSources.moviesAPI.getTVSeasons(id);
    },
    videos: ({ id }, _, { dataSources }) => {
      return dataSources.moviesAPI.getVideos(id, "tv");
    },
  },
};

module.exports = resolvers;
