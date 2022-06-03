import { Resolver, Query, Args } from '@nestjs/graphql';
import { Joke } from './entities/joke.entity';
import { JokeService } from './joke.service';

@Resolver((of) => Joke)
export class JokeResolver {
  constructor(private readonly jokeService: JokeService) {}

  @Query((returns) => Joke)
  randomJoke(
    @Args('category', { type: () => String, nullable: true }) category?: string,
  ): Promise<Joke> {
    return this.jokeService.getRandomJoke(category);
  }

  @Query((returns) => [String])
  categories(): Promise<string[]> {
    return this.jokeService.getCategories();
  }

  @Query((returns) => [Joke])
  searchJokes(
    @Args('query', { type: () => String, nullable: false }) query: string,
  ): Promise<Joke[]> {
    return this.jokeService.searchJokes(query);
  }
}
