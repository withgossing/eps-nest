import { CreateCommonDto } from 'src/typeorm/comm/create-comm.dto';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePointDto extends CreateCommonDto {
  @ApiProperty({ description: '맴버 ID' })
  memberId: string;

  @ApiProperty({ description: '받은 포인트' })
  receivedPoints: number;

  @ApiProperty({ description: '사용 가능 포인트' })
  availablePoints: number;
}
