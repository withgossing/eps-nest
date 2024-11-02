import { ApiProperty } from '@nestjs/swagger';
import { CreateCommonDto } from 'src/typeorm/comm/create-comm.dto';

export class CreateCodeDto extends CreateCommonDto {
  @ApiProperty({ description: '코드 ID' })
  codeId: string;

  @ApiProperty({ description: '코드 이름' })
  codeName: string;

  @ApiProperty({ description: '사용 여부' })
  useYn: string;

  @ApiProperty({ description: '설명' })
  description: string;
}
