// socios/socios.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SociosController } from './socios.controller';
import { SociosService } from './socios.service';
import { Socio } from './socio.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Socio])],
  controllers: [SociosController],
  providers: [SociosService],
})
export class SociosModule {}