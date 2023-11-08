import { Injectable, Logger } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { CoworkingServiceEntity } from './coworking-service.entity';
import { CoworkingServiceCreateDto } from './dtos/coworking-services-create.dto';

@Injectable()
export class CoworkingServicesRepository {
  constructor(private readonly dataSource: DataSource) { }

  async getServices(coworking: string): Promise<CoworkingServiceEntity[]> {
    return await this.dataSource.getRepository(CoworkingServiceEntity).find({
      where: {
        coworking: coworking,
      },
      relations: ['coworking', 'service'],
    });
  }

  async getService(
    coworking: string,
    service: string,
  ): Promise<CoworkingServiceEntity> {
    Logger.log({
      coworking,
      service,
    });

    return await this.dataSource.getRepository(CoworkingServiceEntity).findOne({
      where: {
        coworking: coworking,
        service: service,
      },
      relations: ['coworking', 'service'],
    });
  }

  async create(
    coworkingServiceCreateDto: CoworkingServiceCreateDto,
  ): Promise<CoworkingServiceEntity> {
    return await this.dataSource
      .getRepository(CoworkingServiceEntity)
      .save(coworkingServiceCreateDto);
  }

  async delete(id: string) {
    return this.dataSource.getRepository(CoworkingServiceEntity).delete(id);
  }
}
