// clubs.controller.ts
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ClubsService } from './clubs.service';
import { Club } from './club.entity';

@Controller('clubs')
export class ClubsController {
  constructor(private readonly clubsService: ClubsService) {}

  @Get()
  findAll(): Promise<Club[]> {
    return this.clubsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Club> {
    return this.clubsService.findOne(+id);
  }

  @Post()
  create(@Body() club: Club): Promise<Club> {
    return this.clubsService.create(club);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() club: Club): Promise<Club> {
    return this.clubsService.update(+id, club);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.clubsService.delete(+id);
  }
}