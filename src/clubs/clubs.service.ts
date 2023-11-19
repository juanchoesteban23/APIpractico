// clubs.service.ts
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Club } from './club.entity';

@Injectable()
export class ClubsService {
  constructor(
    @InjectRepository(Club)
    private clubsRepository: Repository<Club>,
  ) {}

  findAll(): Promise<Club[]> {
    return this.clubsRepository.find();
  }

  findOne(id: number): Promise<Club> {
    return this.clubsRepository.findOne(id);
  }

  async create(club: Club): Promise<Club> {
    return this.clubsRepository.save(club);
  }

  async update(id: number, club: Club): Promise<Club> {
    await this.clubsRepository.update(id, club);
    return this.clubsRepository.findOne(id);
  }

  async delete(id: number): Promise<void> {
    await this.clubsRepository.delete(id);
  }
}