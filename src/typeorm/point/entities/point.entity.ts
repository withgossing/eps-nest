import { CommonEntity } from 'src/typeorm/comm/common.entity';
import { Column, Entity, Index } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'EPSP001M00' })
@Index(['memberId'])
export class Point extends CommonEntity {
  @ApiProperty({ description: '맴버 ID' })
  @Column({ name: 'member_id', unique: true, comment: '멤버 ID' })
  memberId: string;

  @ApiProperty({ description: '받은 포인트' })
  @Column({ name: 'received_points', comment: '받은 포인트' })
  receivedPoints: number;

  @ApiProperty({ description: '사용 가능 포인트' })
  @Column({ name: 'available_points', comment: '사용 가능 포인트' })
  availablePoints: number;

  @ApiProperty({ description: '포인트 받기' })
  receivePoints(points: number) {
    this.receivedPoints += points;
  }

  @ApiProperty({ description: '포인트 사용하기' })
  usePoints(points: number) {
    if (this.availablePoints >= points) {
      this.availablePoints -= points;
      return true;
    }
    return false;
  }
}
