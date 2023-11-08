import { Module } from '@nestjs/common';
import { CoworkingsService } from './coworkings.service';
import { CoworkingController } from './coworkings.controller';
import { CoworkingRepository } from './coworkings.repository';
import { CoworkingServicesModule } from './services/coworking-services.module';

@Module({
  providers: [CoworkingsService, CoworkingRepository],
  controllers: [CoworkingController],
  imports: [CoworkingServicesModule],
})
export class CoworkingsModule {}
