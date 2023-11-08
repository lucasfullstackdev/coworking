import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CoworkingServicesRepository } from './coworking-services.repository';
// import { CoworkingServiceEntity } from './coworking-service.entity';
import { CoworkingServiceDto } from './dtos/coworking-services.dto';
import { CoworkingServiceEntity } from './coworking-service.entity';
import { CoworkingServiceCreateDto } from './dtos/coworking-services-create.dto';

@Injectable()
export class CoworkingServicesService {
  constructor(
    private readonly coworkingServiceRepository: CoworkingServicesRepository,
  ) {}

  async getServices(coworking: string): Promise<any[]> {
    const services =
      await this.coworkingServiceRepository.getServices(coworking);

    return services.map((service) => new CoworkingServiceDto(service));
  }

  async getService(
    coworking: string,
    serviceId: string,
  ): Promise<CoworkingServiceDto> {
    const coworkingService = await this.coworkingServiceRepository.getService(
      coworking,
      serviceId,
    );

    if (coworkingService == null) {
      throw new NotFoundException('Service not found');
    }

    return new CoworkingServiceDto(coworkingService);
  }

  async create(
    coworkingServiceCreateDto: CoworkingServiceCreateDto,
  ): Promise<CoworkingServiceDto> {
    const coworkingService = await this.coworkingServiceRepository.create(
      coworkingServiceCreateDto,
    );

    return await this.getService(
      coworkingService.coworking,
      coworkingService.service,
    );
  }

  async delete(coworking: string, serviceId: string) {
    const service = await this.getService(coworking, serviceId);
    return await this.coworkingServiceRepository.delete(service.id);
  }
}
