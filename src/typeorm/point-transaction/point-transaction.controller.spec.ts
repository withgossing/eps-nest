import { Test, TestingModule } from '@nestjs/testing';
import { PointTransactionController } from './point-transaction.controller';
import { PointTransactionService } from './point-transaction.service';

describe('PointTransactionController', () => {
  let controller: PointTransactionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PointTransactionController],
      providers: [PointTransactionService],
    }).compile();

    controller = module.get<PointTransactionController>(PointTransactionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
