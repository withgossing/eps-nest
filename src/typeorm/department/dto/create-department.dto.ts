import { CreateCommonDto } from 'src/typeorm/comm/create-comm.dto';
import { ApiProperty } from '@nestjs/swagger';

export class CreateDepartmentDto extends CreateCommonDto {
  @ApiProperty({ description: '부서 코드' })
  deptCode: string;

  @ApiProperty({ description: '부서 이름' })
  deptName: string;

  @ApiProperty({ description: '부서 레벨' })
  deptLevel: number;

  @ApiProperty({ description: '사용 여부' })
  useYn: string;

  @ApiProperty({ description: '정렬 순서' })
  sortOrder: number;

  @ApiProperty({ description: '설명' })
  description: string;
}
