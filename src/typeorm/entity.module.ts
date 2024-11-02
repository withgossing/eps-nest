import { Module } from '@nestjs/common';

import { CodeModule } from './code/code.module';
import { CodeValueModule } from './code-value/code-value.module';
import { DepartmentModule } from './department/department.module';
import { MemberModule } from './member/member.module';
import { PointModule } from './point/point.module';
import { PointTransactionModule } from './point-transaction/point-transaction.module';

@Module({
  imports: [
    CodeModule,
    CodeValueModule,
    DepartmentModule,
    MemberModule,
    PointModule,
    PointTransactionModule,
  ],
})
export class ormModule {}
