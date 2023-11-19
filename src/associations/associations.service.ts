// associations.service.ts
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Club } from '../clubs/club.entity';
import { Socio } from '../socios/socio.entity';

@Injectable()
export class AssociationsService {
  constructor(
    @InjectRepository(Club)
    private clubsRepository: Repository<Club>,
    @InjectRepository(Socio)
    private sociosRepository: Repository<Socio>,
  ) {}

  async addMemberToClub(clubId: number, socioId: number): Promise<void> {
    const club = await this.clubsRepository.findOne(clubId);
    const socio = await this.sociosRepository.findOne(socioId);

    if (club && socio) {
      club.socios.push(socio);
      await this.clubsRepository.save(club);
    }
  }

  async findMembersFromClub(clubId: number): Promise<Socio[]> {
    const club = await this.clubsRepository.findOne(clubId, { relations: ['socios'] });
    return club ? club.socios : [];
  }

  async findMemberFromClub(clubId: number, socioId: number): Promise<Socio | null> {
    const club = await this.clubsRepository.findOne(clubId, { relations: ['socios'] });
    return club ? club.socios.find(socio => socio.id === socioId) || null : null;
  }

  async updateMembersFromClub(clubId: number, newSocios: Socio[]): Promise<void> {
    const club = await this.clubsRepository.findOne(clubId);
    if (club) {
      club.socios = newSocios;
      await this.clubsRepository.save(club);
    }
  }

  async deleteMemberFromClub(clubId: number, socioId: number): Promise<void> {
    const club = await this.clubsRepository.findOne(clubId);
    if (club) {
      club.socios = club.socios.filter(socio => socio.id !== socioId);
      await this.clubsRepository.save(club);
    }
  }
}