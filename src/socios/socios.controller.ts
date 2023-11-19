// socios.controller.ts
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { SociosService } from './socios.service';
import { Socio } from './socio.entity';

@Controller('members')
export class SociosController {
  constructor(private readonly sociosService: SociosService) {}

  @Get()
  findAll(): Promise<Socio[]> {
    return this.sociosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Socio> {
    return this.sociosService.findOne(+id);
  }

  @Post()
  create(@Body() socio: Socio): Promise<Socio> {
    return this.sociosService.create(socio);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() socio: Socio): Promise<Socio> {
    return this.sociosService.update(+id, socio);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.sociosService.delete(+id);
  }
}