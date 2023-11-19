// socios.service.ts
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Socio } from './socio.entity';

@Injectable()
export class SociosService {
  constructor(
    @InjectRepository(Socio)
    private sociosRepository: Repository<Socio>,
  ) {}

  findAll(): Promise<Socio[]> {
    return this.sociosRepository.find();
  }

  findOne(id: number): Promise<Socio> {
    return this.sociosRepository.findOne(id);
  }

  async create(socio: Socio): Promise<Socio> {
    return this.sociosRepository.save(socio);
  }

  async update(id: number, socio: Socio): Promise<Socio> {
    await this.sociosRepository.update(id, socio);
    return this.sociosRepository.findOne(id);
  }

  async delete(id: number): Promise<void> {
    await this.sociosRepository.delete(id);
  }
}