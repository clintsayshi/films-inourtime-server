// Create a resolver
const resolvers = {
  Query: {
    Movie: (_, { id }, { dataSources }) => {
      return dataSources.moviesAPI.getMovie(id);
    },
    TVShow: (_, { id }, { dataSources }) => {
      return dataSources.moviesAPI.getTVShow(id);
    },
    topTrendingMovies: (_, { time_window, limit }, { dataSources }) => {
      return dataSources.moviesAPI.getTopTrendingMovies(time_window, limit);
    },
    topTrendingTVShows: (_, { time_window, limit }, { dataSources }) => {
      return dataSources.moviesAPI.getTopTrendingTVShows(time_window, limit);
    },
    /* movieGenres: (_, { media_type }, { dataSources }) => {
      return dataSources.moviesAPI.getGenreList(media_type);
    }, */
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
  },
};

module.exports = resolvers;
