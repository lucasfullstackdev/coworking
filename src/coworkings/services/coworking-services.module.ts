import { Module } from '@nestjs/common';
import { CoworkingServicesService } from './coworking-services.service';
import { CoworkingServicesController } from './coworkings-services.controller';
import { CoworkingServicesRepository } from './coworking-services.repository';

@Module({
  providers: [CoworkingServicesService, CoworkingServicesRepository],
  controllers: [CoworkingServicesController],
})
export class CoworkingServicesModule {}
