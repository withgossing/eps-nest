import { ApiProperty } from '@nestjs/swagger';
import { CreateCommonDto } from 'src/typeorm/comm/create-comm.dto';

export class CreateMemberDto extends CreateCommonDto {
  @ApiProperty({ description: '멤버 ID' })
  memberId: string;

  @ApiProperty({ description: '멤버 이름' })
  memberName: string;

  @ApiProperty({ description: '멤버 비밀번호' })
  password: string;

  @ApiProperty({ description: '멤버 이메일주소' })
  email: string;
}
