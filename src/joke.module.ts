import { Module } from '@nestjs/common';
import { JokeResolver } from './joke.resolver';
import { JokeService } from './joke.service';

@Module({
  providers: [JokeResolver, JokeService],
})
export class JokeModule {}
