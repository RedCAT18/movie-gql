import { getMovies, getMovie, getSuggestions } from './db';

// resolve query

const resolvers = {
  Query: {
    movies: (_, { limit, rating }) => getMovies(limit, rating),
    movie: (_, { id }) => getMovie(id),
    suggestions: (_, { id }) => getSuggestions(id)
  }
};

export default resolvers;
