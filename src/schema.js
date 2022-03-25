const { gql } = require("apollo-server");

const typeDefs = gql`
  """
  List of all available queries that clients can execute
  along with the return type of each
  In this case books returns an array of zero or more books defined below
  """
  type Query {
    Movie(id: ID!): Movie!
    topTrendingMovies(time_window: String!, limit: Int!): [Movie!]!

    TVShow(id: ID!): Movie!
    topTrendingTVShows(time_window: String!, limit: Int!): [TVShow!]!

    mediaConfig: MediaConfig
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
    genres: [MovieGenre]
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

  type TVShow {
    id: ID!
    original_name: String!
    original_language: String
    name: String!
    overview: String
    tagline: String
    seasons: [Season]
    number_of_episodes: Int
    number_of_seasons: Int
    episode_runtime: [Int]
    backdrop_path: String
    poster_path: String
    first_air_date: String
    genres: [TVGenre]
    networks: [Network]
    production_companies: [ProductionCompany]
    vote_count: Int
    vote_average: Float
    popularity: Float
  }

  type ProductionCompany {
    id: ID!
    homepage: String
    logo_path: String
    name: String
    origin_country: String
  }

  type MovieGenre {
    id: ID!
    name: String
  }

  type TVGenre {
    id: ID!
    name: String!
  }

  type Network {
    id: ID!
    name: String!
    logo_path: String
    origin_country: String
  }

  type Season {
    id: ID!
    air_date: String
    episode_count: Int
    name: String
    overview: String
    poster_path: String
    season_number: Int
  }
`;

module.exports = typeDefs;
