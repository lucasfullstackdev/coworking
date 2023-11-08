import { ServiceEntity } from '../service.entity';

export class ServiceDto {
  readonly id: string;
  readonly title: string;
  readonly active: boolean;

  constructor(service: ServiceEntity) {
    this.id = service.id;
    this.title = service.title;
    this.active = service.active;
  }
}
