const { RESTDataSource } = require("apollo-datasource-rest");

// MoviesAPI class
class MoviesAPI extends RESTDataSource {
  constructor() {
    super(); // Always call super(because this is a subclass)
    this.baseURL = "https://api.themoviedb.org/3/"; // Set the base URL for the REST API
  }

  willSendRequest(request) {
    request.params.append("api_key", "c76aa915e65a390c6b8536e7cd456131");
  }

  async getMediaConfig() {
    const data = await this.get(`configuration`);
    return data.images;
  }

  async getVideos(id, mediaType) {
    const data = await this.get(`${mediaType}/${id}/videos`);
    return data.results;
  }

  /**
  THE MOVIES SECTION
  **/

  // Get trending movies
  async getTrendingMovies(time_window, limit) {
    const data = await this.get(`trending/movie/${time_window}`);

    function compare_rating(a, b) {
      if (a.vote_average > b.vote_average) {
        return -1;
      }
      if (a.vote_average < b.vote_average) {
        return 1;
      }
      return 0;
    }
    const temp = data.results.sort(compare_rating);

    return temp.slice(0, limit);
  }
  // Get a movie by ID
  async getMovie(id) {
    const data = await this.get(`movie/${id}`);
    //console.log(data);
    return data;
  }
  // Get Movies by genre and year
  async getMoviesByGenre(genreId, year) {
    const data = await this.get(`discover/movie`, {
      with_genres: genreId,
      primary_release_year: year,
    });
    return data.results;
  }
  // Get Movie Genres
  async getMovieGenres(id) {
    const data = await this.get(`movie/${id}`);
    //console.log(data);
    return data.genres;
  }
  // Get an array of a movie's production companies
  async getMovieProductionCompanies(id) {
    const movie = await this.get(`movie/${id}`);
    return movie.production_companies;
  }

  async getListOfGenres(mediaType) {
    const data = await this.get(`/genre/${mediaType}/list`);
    return data.genres;
  }
  /**
  TV SHOWS SECTION
  **/

  async getTVShow(id) {
    const data = await this.get(`tv/${id}`);
    return data;
  }

  async getTVGenres(id) {
    const data = await this.get(`tv/${id}`);
    return data.genres;
  }

  async getTVNetworks(id) {
    const data = await this.get(`tv/${id}`);
    return data.networks;
  }

  async getTVSeasons(id) {
    const data = await this.get(`tv/${id}`);
    return data.seasons;
  }

  async getTVProductionCompanies(id) {
    const movie = await this.get(`tv/${id}`);
    return movie.production_companies;
  }
  // Get trending TV shows from the datasource
  async getTrendingTVShows(time_window, limit) {
    const data = await this.get(`trending/tv/${time_window}`);
    function compare_rating(a, b) {
      if (a.vote_average > b.vote_average) {
        return -1;
      }
      if (a.vote_average < b.vote_average) {
        return 1;
      }
      return 0;
    }
    const temp = data.results.sort(compare_rating);

    return temp.slice(0, limit);
  }
  // Get TV Shows by genre and year
  async getTVByGenre(genreId, year) {
    const data = await this.get(`discover/tv`, {
      with_genres: genreId,
      primary_release_year: year,
    });
    return data.results;
  }
}

module.exports = MoviesAPI;
