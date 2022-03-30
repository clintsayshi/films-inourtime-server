const { gql } = require("apollo-server");

module.exports = gql`
  type Query {
    "Get a movies by ID"
    Movie(id: ID!): Movie!
    "Get the top trending movies today"
    trendingMovies(time_window: String!, limit: Int!): [Movie!]!
    "Get movies by genre and year"
    moviesByGenre(genreId: ID!, year: Int!): [Movie!]

    "Get a list of genres"
    listOfGenres(mediaType: String!): [Genre!]
    "Get the config data for image sizes"
    mediaConfig: MediaConfig
  }

  "Defining a movie"
  type Movie {
    id: ID!
    original_title: String!
    original_language: String
    release_date: String
    overview: String
    adult: Boolean
    backdrop_path: String
    poster_path: String
    genres: [Genre]
    vote_count: Int
    vote_average: Float
    revenue: Int
    runtime: Int
    production_companies: [ProductionCompany]
    media_type: String
    status: String
    title: String
    popularity: Float
  }

  type Genre {
    id: ID!
    name: String
  }

  type MediaConfig {
    base_url: String
    secure_base_url: String
    backdrop_sizes: [String]
    logo_sizes: [String]
    poster_sizes: [String]
    profile_sizes: [String]
    still_sizes: [String]
  }
`;
