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
  },
};

module.exports = resolvers;
