import { Injectable } from '@nestjs/common';
import { ServiceRepository } from './services.repository';
import { ServiceDto } from './dtos/service.dto';
import { ServiceCreateDto } from './dtos/serviceCreate.dto';
import { ServiceUpdateDto } from './dtos/serviceUpdate.dto';

@Injectable()
export class ServicesService {
  constructor(private readonly servicesRepository: ServiceRepository) {}

  async getServices(): Promise<ServiceDto[]> {
    return (await this.servicesRepository.getServices()).map(
      (room) => new ServiceDto(room),
    );
  }

  async getService(id: string): Promise<ServiceDto> {
    const room = await this.servicesRepository.getService(id);

    return new ServiceDto(room);
  }

  async create(serviceCreateDto: ServiceCreateDto): Promise<ServiceDto> {
    const room = await this.servicesRepository.create(serviceCreateDto);
    return new ServiceDto(room);
  }

  async update(
    id: string,
    serviceUpdateDto: ServiceUpdateDto,
  ): Promise<ServiceDto> {
    await this.servicesRepository.update(id, serviceUpdateDto);
    return this.getService(id);
  }

  async delete(id: string) {
    return this.servicesRepository.delete(id);
  }
}
