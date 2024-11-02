import { Module } from '@nestjs/common';
import { PointTransactionService } from './point-transaction.service';
import { PointTransactionController } from './point-transaction.controller';

@Module({
  controllers: [PointTransactionController],
  providers: [PointTransactionService],
})
export class PointTransactionModule {}
