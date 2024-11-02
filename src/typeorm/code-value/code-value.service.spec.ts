import { Test, TestingModule } from '@nestjs/testing';
import { CodeValueService } from './code-value.service';

describe('CodeValueService', () => {
  let service: CodeValueService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CodeValueService],
    }).compile();

    service = module.get<CodeValueService>(CodeValueService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
