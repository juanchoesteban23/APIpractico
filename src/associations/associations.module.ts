// associations/associations.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AssociationsController } from './associations.controller';
import { AssociationsService } from './associations.service';
import { Club } from '../clubs/club.entity';
import { Socio } from '../socios/socio.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Club, Socio])],
  controllers: [AssociationsController],
  providers: [AssociationsService],
})
export class AssociationsModule {}