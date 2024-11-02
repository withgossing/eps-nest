import { PartialType } from '@nestjs/mapped-types';
import { CreateCodeValueDto } from './create-code-value.dto';

export class UpdateCodeValueDto extends PartialType(CreateCodeValueDto) {}
