import { Module } from '@nestjs/common';
import { CoworkingsService } from './coworkings.service';
import { CoworkingController } from './coworkings.controller';
import { CoworkingRepository } from './coworkings.repository';

@Module({
  providers: [CoworkingsService, CoworkingRepository],
  controllers: [CoworkingController],
})
export class CoworkingsModule {}
