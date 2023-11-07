import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { CoworkingEntity } from './coworking.entity';
import { CoworkingCreateDto } from './dtos/coworkingCreate.dto';
import { CoworkingUpdateDto } from './dtos/coworkingUpdate.dto';

@Injectable()
export class CoworkingRepository {
  constructor(private readonly dataSource: DataSource) {}

  async getCoworkings(): Promise<CoworkingEntity[]> {
    return await this.dataSource.getRepository(CoworkingEntity).find({
      // relations: ['coworking'],
    });
  }

  async getCoworking(id: string): Promise<CoworkingEntity> {
    return await this.dataSource.getRepository(CoworkingEntity).findOne({
      where: {
        id: id,
      },
      // relations: ['coworking'],
    });
  }

  async create(coworkingCreateDto: CoworkingCreateDto) {
    return await this.dataSource
      .getRepository(CoworkingEntity)
      .save(coworkingCreateDto);
  }

  async update(id: string, coworkingUpdateDto: CoworkingUpdateDto) {
    return await this.dataSource
      .getRepository(CoworkingEntity)
      .update(id, coworkingUpdateDto);
  }

  async delete(id: string) {
    return this.dataSource.getRepository(CoworkingEntity).delete(id);
  }
}
