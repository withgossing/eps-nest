import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CodeValueController } from './code-value.controller';
import { CodeValueService } from './code-value.service';
import { CodeValue } from './entities/code-value.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CodeValue])],
  controllers: [CodeValueController],
  providers: [CodeValueService],
})
export class CodeValueModule {}
