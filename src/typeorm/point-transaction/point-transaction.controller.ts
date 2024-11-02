import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PointTransactionService } from './point-transaction.service';
import { CreatePointTransactionDto } from './dto/create-point-transaction.dto';
import { UpdatePointTransactionDto } from './dto/update-point-transaction.dto';

@Controller('point-transaction')
export class PointTransactionController {
  constructor(
    private readonly pointTransactionService: PointTransactionService,
  ) {}

  @Post()
  create(@Body() createPointTransactionDto: CreatePointTransactionDto) {
    return this.pointTransactionService.create(createPointTransactionDto);
  }

  @Get()
  findAll() {
    return this.pointTransactionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pointTransactionService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePointTransactionDto: UpdatePointTransactionDto,
  ) {
    return this.pointTransactionService.update(+id, updatePointTransactionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pointTransactionService.remove(+id);
  }
}
