import { CommonEntity } from 'src/typeorm/comm/common.entity';
import { Column, Entity, Index } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'EPSM001M00' })
@Index(['memberId'])
export class Member extends CommonEntity {
  @ApiProperty({ description: '맴버 ID' })
  @Column({ name: 'member_id', unique: true, length: 16, comment: '멤버 ID' })
  memberId: string;

  @ApiProperty({ description: '맴버 이름' })
  @Column({ name: 'member_name', length: 64, comment: '멤버 이름' })
  memberName: string;

  @ApiProperty({ description: '비밀번호' })
  @Column({ name: 'password', length: 64, comment: '비밀번호' })
  password: string;

  @ApiProperty({ description: '비밀번호' })
  @Column({ name: 'email', length: 64, comment: '이메일주소' })
  email: string;

  @ApiProperty({ description: '상태' })
  @Column({ name: 'status', length: 4, comment: '상태' })
  status: string;
}
