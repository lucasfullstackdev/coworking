import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CoworkingServicesService } from './coworking-services.service';
import { CoworkingServiceDto } from './dtos/coworking-services.dto';
import { CoworkingServiceCreateDto } from './dtos/coworking-services-create.dto';

@ApiTags('Coworking Services')
@Controller('coworkings/:coworking/services')
export class CoworkingServicesController {
  constructor(
    private readonly coworkingServicesService: CoworkingServicesService,
  ) {}

  @Get()
  findAll(
    @Param('coworking') coworking: string,
  ): Promise<CoworkingServiceDto[]> {
    return this.coworkingServicesService.getServices(coworking);
  }

  @Get(':service')
  findOne(
    @Param('coworking') coworking: string,
    @Param('service') service: string,
  ): Promise<CoworkingServiceDto> {
    return this.coworkingServicesService.getService(coworking, service);
  }

  @Post()
  create(
    @Body() coworkingCreateDto: CoworkingServiceCreateDto,
  ): Promise<CoworkingServiceDto> {
    return this.coworkingServicesService.create(coworkingCreateDto);
  }

  @Delete(':service')
  delete(
    @Param('coworking') coworking: string,
    @Param('service') service: string,
  ) {
    return this.coworkingServicesService.delete(coworking, service);
  }
}
