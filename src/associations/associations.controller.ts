// associations.controller.ts
import { Controller, Param, Post, Get, Put, Delete } from '@nestjs/common';
import { AssociationsService } from './associations.service';
import { Socio } from '../socios/socio.entity';

@Controller('clubs/:clubId/members')
export class AssociationsController {
  constructor(private readonly associationsService: AssociationsService) {}

  @Post(':socioId')
  async addMemberToClub(@Param('clubId') clubId: string, @Param('socioId') socioId: string): Promise<void> {
    await this.associationsService.addMemberToClub(+clubId, +socioId);
  }

  @Get()
  async findMembersFromClub(@Param('clubId') clubId: string): Promise<Socio[]> {
    return this.associationsService.findMembersFromClub(+clubId);
  }

  @Get(':socioId')
  async findMemberFromClub(@Param('clubId') clubId: string, @Param('socioId') socioId: string): Promise<Socio | null> {
    return this.associationsService.findMemberFromClub(+clubId, +socioId);
  }

  @Put()
  async updateMembersFromClub(@Param('clubId') clubId: string, @Body() newSocios: Socio[]): Promise<void> {
    await this.associationsService.updateMembersFromClub(+clubId, newSocios);
  }

  @Delete(':socioId')
  async deleteMemberFromClub(@Param('clubId') clubId: string, @Param('socioId') socioId: string): Promise<void> {
    await this.associationsService.deleteMemberFromClub(+clubId, +socioId);
  }
}