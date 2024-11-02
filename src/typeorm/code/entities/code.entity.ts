import { CommonEntity } from 'src/typeorm/comm/common.entity';
import { Column, Entity, Index, OneToMany } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { CodeValue } from 'src/typeorm/code-value/entities/code-value.entity';

@Entity({ name: 'EPSC001M00' })
@Index(['codeId'])
export class Code extends CommonEntity {
  @ApiProperty({ description: '코드 ID' })
  @Column({ name: 'code_id', unique: true, length: 16, comment: '코드 ID' })
  codeId: string;

  @ApiProperty({ description: '코드 이름' })
  @Column({ name: 'code_name', length: 64, comment: '코드 이름' })
  codeName: string;

  @ApiProperty({ description: '사용 여부' })
  @Column({ name: 'use_yn', length: 1, comment: '사용 여부' })
  useYn: string;

  @ApiProperty({ description: '설명' })
  @Column({ name: 'description', length: 256, comment: '설명' })
  description: string;

  @OneToMany(() => CodeValue, (codeValue) => codeValue.code, {
    cascade: true,
  })
  codeValues: CodeValue[];

  addCodeValue(codeValue: CodeValue) {
    if (!this.codeValues) {
      this.codeValues = [];
    }
    const newCodeValue = new CodeValue();
    Object.assign(newCodeValue, codeValue);
    newCodeValue.code = this;
    this.codeValues.push(newCodeValue);
    return newCodeValue;
  }

  removeCodeValue(valueId: string) {
    if (this.codeValues) {
      this.codeValues = this.codeValues.filter((cv) => cv.valueId !== valueId);
    }
  }
}
