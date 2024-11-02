import { CommonEntity } from 'src/typeorm/comm/common.entity';
import { Column, Entity, Index, JoinColumn, OneToMany } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Code } from 'src/typeorm/code/entities/code.entity';

@Entity({ name: 'EPSC001D00' })
@Index(['codeId'])
@Index(['codeId', 'valueId'])
export class CodeValue extends CommonEntity {
  @ApiProperty({ description: '코드 ID' })
  @Column({ name: 'code_id', unique: true, length: 32, comment: '코드 ID' })
  codeId: string;

  @ApiProperty({ description: '코드값 ID' })
  @Column({ name: 'value_id', length: 64, comment: '코드값 ID' })
  valueId: string;

  @ApiProperty({ description: '코드값 이름' })
  @Column({ name: 'value_name', length: 128, comment: '코드값 이름' })
  valueName: string;

  @ApiProperty({ description: '사용 여부' })
  @Column({ name: 'use_yn', length: 1, comment: '사용 여부' })
  useYn: string;

  @ApiProperty({ description: '정렬 순서' })
  @Column({ name: 'sort_order', comment: '정렬 순서' })
  sortOrder: number;

  @ApiProperty({ description: '설명' })
  @Column({ name: 'description', length: 256, comment: '설명' })
  description: string;

  @OneToMany(() => Code, (code) => code.codeValues, {
    onDelete: 'CASCADE',
    nullable: false,
  })
  @JoinColumn({ name: 'code_id' })
  code!: Code;
}
