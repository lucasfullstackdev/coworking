import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { ServiceEntity } from './service.entity';
import { ServiceCreateDto } from './dtos/serviceCreate.dto';
import { ServiceUpdateDto } from './dtos/serviceUpdate.dto';

@Injectable()
export class ServiceRepository {
  constructor(private readonly dataSource: DataSource) {}

  async getServices(): Promise<ServiceEntity[]> {
    return await this.dataSource.getRepository(ServiceEntity).find();
  }

  async getService(id: string): Promise<ServiceEntity> {
    return await this.dataSource.getRepository(ServiceEntity).findOne({
      where: {
        id: id,
      },
    });
  }

  async create(serviceCreateDto: ServiceCreateDto): Promise<ServiceEntity> {
    return await this.dataSource
      .getRepository(ServiceEntity)
      .save(serviceCreateDto);
  }

  async update(id: string, serviceUpdateDto: ServiceUpdateDto) {
    return this.dataSource
      .getRepository(ServiceEntity)
      .update(id, serviceUpdateDto);
  }

  async delete(id: string) {
    return this.dataSource.getRepository(ServiceEntity).delete(id);
  }
}
