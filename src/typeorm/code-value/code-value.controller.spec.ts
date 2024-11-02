import { Test, TestingModule } from '@nestjs/testing';
import { CodeValueController } from './code-value.controller';
import { CodeValueService } from './code-value.service';

describe('CodeValueController', () => {
  let controller: CodeValueController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CodeValueController],
      providers: [CodeValueService],
    }).compile();

    controller = module.get<CodeValueController>(CodeValueController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
