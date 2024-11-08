import { Injectable } from '@nestjs/common';
import { CreatePointTransactionDto } from './dto/create-point-transaction.dto';
import { UpdatePointTransactionDto } from './dto/update-point-transaction.dto';

@Injectable()
export class PointTransactionService {
  create(createPointTransactionDto: CreatePointTransactionDto) {
    return 'This action adds a new pointTransaction';
  }

  findAll() {
    return `This action returns all pointTransaction`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pointTransaction`;
  }

  update(id: number, updatePointTransactionDto: UpdatePointTransactionDto) {
    return `This action updates a #${id} pointTransaction`;
  }

  remove(id: number) {
    return `This action removes a #${id} pointTransaction`;
  }
}
