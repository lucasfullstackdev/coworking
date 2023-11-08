import { Test, TestingModule } from '@nestjs/testing';
import { CoworkingServicesService } from './coworking-services.service';

describe('CoworkingServicesService', () => {
  let service: CoworkingServicesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoworkingServicesService],
    }).compile();

    service = module.get<CoworkingServicesService>(CoworkingServicesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
