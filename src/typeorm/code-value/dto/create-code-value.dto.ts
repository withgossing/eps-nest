import { ApiProperty } from '@nestjs/swagger';
import { CreateCommonDto } from 'src/typeorm/comm/create-comm.dto';

export class CreateCodeValueDto extends CreateCommonDto {
  @ApiProperty({ description: '코드 ID' })
  codeId: string;

  @ApiProperty({ description: '코드값 ID' })
  valueId: string;

  @ApiProperty({ description: '코드값 이름' })
  valueName: string;

  @ApiProperty({ description: '사용 여부' })
  useYn: string;

  @ApiProperty({ description: '정렬 순서' })
  sortOrder: number;

  @ApiProperty({ description: '생성 처리자' })
  createdBy: string;
}
