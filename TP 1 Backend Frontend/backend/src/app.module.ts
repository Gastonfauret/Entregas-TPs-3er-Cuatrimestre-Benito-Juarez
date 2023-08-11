import { Module } from '@nestjs/common';
import { PlayersController } from './app.controller';

@Module({
  imports: [],
  controllers: [PlayersController],
  providers: [],
})
export class AppModule {}
