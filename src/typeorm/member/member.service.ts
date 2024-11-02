import { Injectable } from '@nestjs/common';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Member } from './entities/member.entity';

@Injectable()
export class MemberService {
  constructor(
    @InjectRepository(Member)
    private readonly memberRepository: Repository<Member>,
  ) {}

  /**
   * 멤버 생성
   * @param createMemberDto
   * @returns
   */
  async create(createMemberDto: CreateMemberDto): Promise<Member> {
    const { memberId, memberName, password, email } = createMemberDto;
    const member = await this.memberRepository.save({
      memberId: memberId,
      memberName: memberName,
      password: password,
      email: email,
    });
    return member;
  }

  /**
   * 멤버 목록 조회
   * @param
   * @returns
   */
  async findAll() {
    return this.memberRepository.find();
  }

  /**
   * 멤버 단건 조회
   * @param id
   * @returns
   */
  async findOne(id: number) {
    return this.memberRepository.findOne({ where: { id: id } });
  }

  /**
   * 멤버 수정
   * @param id, updateMemberDto
   * @returns
   */
  async update(id: number, updateMemberDto: UpdateMemberDto) {
    const { memberId, memberName, password, email } = updateMemberDto;
    const result = await this.memberRepository.update(
      { id: id },
      {
        memberId: memberId,
        memberName: memberName,
        password: password,
        email: email,
      },
    );
    return result.affected ? true : false;
  }

  /**
   * 멤버 삭제 ( 데이터 삭제 )
   * @param id
   * @returns
   */
  async remove(id: number) {
    const result = await this.memberRepository.delete(id);
    return result.affected ? true : false;
  }

  /**
   * 멤버 삭제 ( 데이터 유지 )
   * @param id
   * @returns
   */
  async delete(id: number) {
    const result = await this.memberRepository.softDelete(id);
    return result.affected ? true : false;
  }
}
