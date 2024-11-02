import { CreateCommonDto } from 'src/typeorm/comm/create-comm.dto';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePointTransactionDto extends CreateCommonDto {
  @ApiProperty({ description: '보낸 맴버 ID' })
  senderId: string;

  @ApiProperty({ description: '받은 멤버 ID' })
  receiverId: string;

  @ApiProperty({ description: '포인트' })
  points: number;

  @ApiProperty({ description: '거래 유형' })
  transactionType: string;

  @ApiProperty({ description: '상태' })
  status: string;

  @ApiProperty({ description: '메시지' })
  message: string;

  @ApiProperty({ description: '거래 일시' })
  transactionDate: Date;
}
