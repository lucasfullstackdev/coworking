import { Module } from '@nestjs/common';
import { ServicesService } from './services.service';
import { ServiceRepository } from './services.repository';
import { ServicesController } from './services.controller';

@Module({
  providers: [ServicesService, ServiceRepository],
  controllers: [ServicesController],
})
export class ServicesModule {}
