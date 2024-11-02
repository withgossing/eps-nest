import { ApiProperty } from '@nestjs/swagger';
import {
  BaseEntity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  DeleteDateColumn,
  UpdateDateColumn,
  Column,
} from 'typeorm';

export class CommonEntity extends BaseEntity {
  @ApiProperty({ description: '기본키' })
  @PrimaryGeneratedColumn({ comment: 'PrimaryKey' })
  id: number;

  @ApiProperty({ description: '데이터 생성 처리자' })
  @Column({
    name: 'created_by',
    length: 16,
    comment: '데이터 생성 처리자',
    nullable: false,
  })
  createdBy: string;

  @ApiProperty({ description: '데이터 생성 일시' })
  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp without time zone',
    nullable: false,
  })
  createdAt: Date;

  @ApiProperty({ description: '데이터 수정 처리자' })
  @Column({
    name: 'udpated_by',
    length: 16,
    comment: '데이터 수정 처리자',
    nullable: true,
  })
  updatedBy: string;

  @ApiProperty({ description: '데이터 수정 일시' })
  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamp without time zone',
    nullable: true,
  })
  updatedAt: Date;

  @ApiProperty({ description: '데이터 수정 처리자' })
  @Column({
    name: 'deleted_by',
    length: 16,
    comment: '데이터 삭제 처리자',
    nullable: true,
  })
  deletedBy: string;

  @ApiProperty({ description: '데이터 삭제 일시' })
  @DeleteDateColumn({
    name: 'delete_at',
    type: 'timestamp without time zone',
    nullable: true,
  })
  deleteAt: Date;
}
