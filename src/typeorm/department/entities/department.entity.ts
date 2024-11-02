import { CommonEntity } from 'src/typeorm/comm/common.entity';
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'EPSD001D00' })
@Index(['deptCode'])
export class Department extends CommonEntity {
  @ApiProperty({ description: '부서 코드' })
  @Column({ name: 'dept_code', unique: true, length: 16, comment: '부서 코드' })
  deptCode: string;

  @ApiProperty({ description: '부서 이름' })
  @Column({ name: 'dept_name', length: 128, comment: '부서 이름' })
  deptName: string;

  @ApiProperty({ description: '부서 레벨' })
  @Column({ name: 'dept_level', comment: '부서 레벨' })
  deptLevel: number;

  @ApiProperty({ description: '사용여부' })
  @Column({ name: 'use_yn', length: 1, comment: '사용여부' })
  useYn: string;

  @ApiProperty({ description: '정렬순서' })
  @Column({ name: 'sort_order', comment: '정렬순서' })
  sortOrder: number;

  @ApiProperty({ description: '설명' })
  @Column({ name: 'description', length: 256, comment: '설명' })
  description: string;

  @ManyToOne(() => Department, (department) => department.childDepartments, {
    nullable: true,
  })
  @JoinColumn({ name: 'parent_dept_id' })
  parentDepartment: Department;

  @OneToMany(() => Department, (department) => department.parentDepartment)
  childDepartments: Department[];

  @ApiProperty({ description: '하위 부서 추가' })
  addChildDepartment(child: Department) {
    if (!this.childDepartments) {
      this.childDepartments = [];
    }
    this.childDepartments.push(child);
    child.parentDepartment = this;
  }

  @ApiProperty({ description: '하위 부서 삭제' })
  removeChildDepartment(child: Department) {
    if (this.childDepartments) {
      this.childDepartments = this.childDepartments.filter(
        (dept) => dept.id !== child.id,
      );
      child.parentDepartment = null;
    }
  }
}
