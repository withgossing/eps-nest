import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CodeService } from './code.service';
import { CreateCodeDto } from './dto/create-code.dto';
import { UpdateCodeDto } from './dto/update-code.dto';

@Controller('code')
export class CodeController {
  constructor(private readonly codeService: CodeService) {}

  @Post()
  async create(@Body() createCodeDto: CreateCodeDto) {
    return this.codeService.create(createCodeDto);
  }

  @Get()
  async findAll() {
    return this.codeService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.codeService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateCodeDto: UpdateCodeDto) {
    return this.codeService.update(+id, updateCodeDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.codeService.remove(+id);
  }

  @Get('codeId/:codeId')
  async findOneByCodeId(@Param('codeId') codeId: string) {
    return this.codeService.findOneByCodeId(codeId);
  }

  @Get('codeName/:codeName')
  async findByCodeName(@Param('codeName') codeName: string) {
    return this.codeService.findByCodeName(codeName);
  }
}
