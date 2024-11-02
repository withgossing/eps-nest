import { CommonEntity } from 'src/typeorm/comm/common.entity';
import { Column, Entity, Index } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'EPSP001D00' })
@Index(['senderId'])
@Index(['receiverId'])
export class PointTransaction extends CommonEntity {
  @ApiProperty({ description: '보낸 맴버 ID' })
  @Column({ name: 'sender_id', length: 16, comment: '보낸 멤버 ID' })
  senderId: string;

  @ApiProperty({ description: '받은 멤버 ID' })
  @Column({ name: 'receiver_id', length: 16, comment: '받은 멤버 ID' })
  receiverId: string;

  @ApiProperty({ description: '포인트' })
  @Column({ name: 'points', comment: '포인트' })
  points: number;

  @ApiProperty({ description: '거래 유형' })
  @Column({ name: 'transaction_type', length: 16, comment: '거래 유형' })
  transactionType: string;

  @ApiProperty({ description: '상태' })
  @Column({ name: 'status', length: 16, comment: '상태' })
  status: string;

  @ApiProperty({ description: '메시지' })
  @Column({ name: 'description', length: 1024, comment: '메시지' })
  message: string;

  @ApiProperty({ description: '거래 일시' })
  @Column({
    name: 'transaction_date',
    type: 'timestamp',
    comment: '거래 일시',
  })
  transactionDate: Date;
}
