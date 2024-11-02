import { ApiProperty } from '@nestjs/swagger';

export class CreateCommonDto {
  @ApiProperty({ description: '생성 처리자' })
  createdBy: string;

  @ApiProperty({ description: '수정 처리자' })
  updatedBy: string;

  @ApiProperty({ description: '삭제 처리자' })
  deletedBy: string;
}
