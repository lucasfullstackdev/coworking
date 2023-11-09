import { CoworkingServiceEntity } from '../coworking-service.entity';
import { CoworkingResponseDto } from 'src/coworkings/dtos/coworking-response.dto';
import { ServiceResponseDto } from 'src/services/dtos/serviceResponse.dto';

export class CoworkingServiceDto {
  readonly id: string;
  readonly coworking: CoworkingResponseDto;
  readonly service: ServiceResponseDto;

  constructor(coworkingService?: CoworkingServiceEntity) {
    this.id = coworkingService.id;

    if (coworkingService.coworking != null) {
      const coworking = JSON.parse(JSON.stringify(coworkingService.coworking));
      this.coworking = new CoworkingResponseDto(coworking.id, coworking.name);
    }

    if (coworkingService.service != null) {
      const service = JSON.parse(JSON.stringify(coworkingService.service));
      this.service = new ServiceResponseDto(service.id, service.title);
    }
  }
}
