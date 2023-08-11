import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { join } from 'path';

@Controller('players')
export class PlayersController {
  @Get()
  getPlayers( @Res() res: Response ) {
    const players = join(__dirname, '../data/players.json')
    res.sendFile(players)    
  }
}



