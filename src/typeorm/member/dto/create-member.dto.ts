import { ApiProperty } from '@nestjs/swagger';
import { CreateCommonDto } from 'src/typeorm/comm/create-comm.dto';

export class CreateMemberDto extends CreateCommonDto {
  @ApiProperty({ description: '맴버 ID' })
  memberId: string;

  @ApiProperty({ description: '맴버 이름' })
  memberName: string;

  @ApiProperty({ description: '비밀번호' })
  password: string;

  @ApiProperty({ description: '이메일' })
  email: string;

  @ApiProperty({ description: '상태' })
  status: string;
}
