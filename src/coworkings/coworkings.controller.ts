import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CoworkingsService } from './coworkings.service';
import { CoworkingCreateDto } from './dtos/coworkingCreate.dto';
import { CoworkingUpdateDto } from './dtos/coworkingUpdate.dto';

@Controller('coworkings')
export class CoworkingController {
  constructor(private readonly coworkingService: CoworkingsService) {}

  @Get()
  findAll() {
    return this.coworkingService.getCoworkings();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<any> {
    return this.coworkingService.getCoworking(id);
  }

  @Post()
  create(@Body() coworkingCreateDto: CoworkingCreateDto): Promise<any> {
    return this.coworkingService.create(coworkingCreateDto);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() coworkingUpdateDto: CoworkingUpdateDto,
  ) {
    return this.coworkingService.update(id, coworkingUpdateDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.coworkingService.delete(id);
  }
}
