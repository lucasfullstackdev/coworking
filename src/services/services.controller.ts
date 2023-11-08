import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ServiceDto } from './dtos/service.dto';
import { ServicesService } from './services.service';
import { ServiceCreateDto } from './dtos/serviceCreate.dto';
import { ServiceUpdateDto } from './dtos/serviceUpdate.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('services')
@Controller('services')
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) {}

  @Get()
  findAll(): Promise<ServiceDto[]> {
    return this.servicesService.getServices();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<ServiceDto> {
    return this.servicesService.getService(id);
  }

  @Post()
  create(@Body() serviceCreateDto: ServiceCreateDto) {
    return this.servicesService.create(serviceCreateDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() serviceUpdateDto: ServiceUpdateDto) {
    return this.servicesService.update(id, serviceUpdateDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.servicesService.delete(id);
  }
}
