const { gql } = require("apollo-server");

module.exports = gql`
  """
  List of all available queries that clients can execute
  along with the return type of each
  In this case books returns an array of zero or more books defined below
  """
  type Query {
    "Get a TV Show by ID"
    TVShow(id: ID!): TVShow!
    "Get the top trending TV Shows today"
    trendingTVShows(time_window: String!, limit: Int!): [TVShow!]!
    "Get TV Shows by genre and year"
    tvByGenre(genreId: ID!, year: Int!): [TVShow!]
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
    genres: [Genre]
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
