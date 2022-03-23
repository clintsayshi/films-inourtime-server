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
  // Get trending movies
  async getTopTrendingMovies(time_window, limit) {
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
  // Get a specific movie
  async getMovie(id) {
    const data = await this.get(`movie/${id}`);
    //console.log(data);
    return data;
  }
  // Get detailed genres of a specific movie
  async getMovieGenres(id) {
    const movie = await this.get(`movie/${id}`);
    return movie.genres;
  }

  async getMovieProductionCompanies(id) {
    const movie = await this.get(`movie/${id}`);
    return movie.production_companies;
  }

  async getTVShow(id) {
    const data = await this.get(`tv/${id}`);
    return data;
  }

  async getGenreList(media_type) {
    return this.get(`/genre/${media_type}/list`);
  }

  /* async getTopTrendingMoviesByGenre(time_window, genre_id, limit) {
    const data = await this.get(`trending/movie/${time_window}`);
    return data.results.slice(0, limit);
  } */

  async getTopTrendingTVShows(time_window, limit) {
    const data = await this.get(`trending/tv/${time_window}`);
    return data.results.slice(0, limit);
  }
  /* async getTopTrendingTVShowsByGenre(time_window, genre_id, limit)  {
    const data = await this.get(`discover/tv/${time_window}`,{
      language: 'en-us',
      sort_by:'primary_release_data.asc',
      incude_adult: 'true',
      include_video: 'true',
      with_genres: genre_id
    });
    return data.results.slice(0, limit);
  } */
}

module.exports = MoviesAPI;
