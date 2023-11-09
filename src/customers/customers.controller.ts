import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CustomersService } from './customers.service';
import { CustomerDto } from './dtos/customer.dto';
import { CustomerCreateDto } from './dtos/customerCreate.dto';
import { CustomerUpdateDto } from './dtos/customerUpdate.dto';

@ApiTags('Customers')
@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Get()
  findAll(): Promise<CustomerDto[]> {
    return this.customersService.getCustomers();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<CustomerDto> {
    return this.customersService.getCustomer(id);
  }

  @Post()
  create(@Body() customerCreateDto: CustomerCreateDto) {
    return this.customersService.create(customerCreateDto);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() customerUpdateDto: CustomerUpdateDto,
  ) {
    return this.customersService.update(id, customerUpdateDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.customersService.delete(id);
  }
}
