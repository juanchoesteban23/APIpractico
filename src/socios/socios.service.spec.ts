import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { SociosService } from './socios.service';
import { Socio } from './socio.entity';

describe('SociosService', () => {
  let service: SociosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SociosService,
        {
          provide: getRepositoryToken(Socio),
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<SociosService>(SociosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

});