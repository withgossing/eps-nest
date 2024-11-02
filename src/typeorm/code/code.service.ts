import { Injectable } from '@nestjs/common';
import { CreateCodeDto } from './dto/create-code.dto';
import { UpdateCodeDto } from './dto/update-code.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Code } from './entities/code.entity';
import { Like, Repository } from 'typeorm';

@Injectable()
export class CodeService {
  constructor(
    @InjectRepository(Code)
    private codeRepository: Repository<Code>,
  ) {}

  async create(createCodeDto: CreateCodeDto): Promise<Code> {
    const { codeId, codeName, useYn, description, createdBy } = createCodeDto;
    const code = await this.codeRepository.save({
      codeId: codeId,
      codeName: codeName,
      useYn: useYn,
      description: description,
      createdBy: createdBy,
    });
    return code;
  }

  async findAll() {
    return this.codeRepository.find();
  }

  async findOne(id: number) {
    return this.codeRepository.findOne({ where: { id } });
  }

  async update(id: number, updateCodeDto: UpdateCodeDto) {
    const { codeId, codeName, useYn, description, updatedBy } = updateCodeDto;
    const result = await this.codeRepository.update(
      { id },
      {
        codeId: codeId,
        codeName: codeName,
        useYn: useYn,
        description: description,
        updatedBy: updatedBy,
      },
    );
    return result.affected ? true : false;
  }

  async remove(id: number) {
    const result = await this.codeRepository.delete(id);
    return result.affected ? true : false;
  }

  async delete(id: number) {
    const result = await this.codeRepository.softDelete(id);
    return result.affected ? true : false;
  }

  async findOneByCodeId(codeId: string) {
    return this.codeRepository.findOne({ where: { codeId: codeId } });
  }

  async findByCodeName(codeName: string) {
    return this.codeRepository.find({
      where: { codeName: Like(`%${codeName}%`) },
    });
  }
}
