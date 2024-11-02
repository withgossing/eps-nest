import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CodeValueService } from './code-value.service';
import { CreateCodeValueDto } from './dto/create-code-value.dto';
import { UpdateCodeValueDto } from './dto/update-code-value.dto';

@Controller('code-value')
export class CodeValueController {
  constructor(private readonly codeValueService: CodeValueService) {}

  @Post()
  create(@Body() createCodeValueDto: CreateCodeValueDto) {
    return this.codeValueService.create(createCodeValueDto);
  }

  @Get()
  findAll() {
    return this.codeValueService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.codeValueService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCodeValueDto: UpdateCodeValueDto) {
    return this.codeValueService.update(+id, updateCodeValueDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.codeValueService.remove(+id);
  }
}
