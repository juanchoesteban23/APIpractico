// clubs.service.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ClubsService } from './clubs.service';
import { Club } from './club.entity';

describe('ClubsService', () => {
  let service: ClubsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ClubsService,
        {
          provide: getRepositoryToken(Club),
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<ClubsService>(ClubsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

});