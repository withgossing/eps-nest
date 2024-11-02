import { Injectable } from '@nestjs/common';
import { CreateCodeValueDto } from './dto/create-code-value.dto';
import { UpdateCodeValueDto } from './dto/update-code-value.dto';

@Injectable()
export class CodeValueService {
  create(createCodeValueDto: CreateCodeValueDto) {
    return 'This action adds a new codeValue';
  }

  findAll() {
    return `This action returns all codeValue`;
  }

  findOne(id: number) {
    return `This action returns a #${id} codeValue`;
  }

  update(id: number, updateCodeValueDto: UpdateCodeValueDto) {
    return `This action updates a #${id} codeValue`;
  }

  remove(id: number) {
    return `This action removes a #${id} codeValue`;
  }
}
