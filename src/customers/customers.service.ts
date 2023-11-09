import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CustomerDto } from './dtos/customer.dto';
import { CustomersRepository } from './customers.repository';
import { CustomerCreateDto } from './dtos/customerCreate.dto';
import { CustomerUpdateDto } from './dtos/customerUpdate.dto';

@Injectable()
export class CustomersService {
  constructor(private readonly customersRepository: CustomersRepository) {}

  async getCustomers(): Promise<CustomerDto[]> {
    return (await this.customersRepository.getCustomers()).map(
      (customer) => new CustomerDto(customer),
    );
  }

  async getCustomer(id: string): Promise<CustomerDto> {
    const customer = await this.customersRepository.getCustomer(id);

    if (customer == null) {
      throw new NotFoundException('Customer not found');
    }

    return new CustomerDto(customer);
  }

  async create(customerCreateDto: CustomerCreateDto): Promise<CustomerDto> {
    const customer = await this.customersRepository.create(customerCreateDto);
    return new CustomerDto(customer);
  }

  async update(
    id: string,
    serviceUpdateDto: CustomerUpdateDto,
  ): Promise<CustomerDto> {
    await this.customersRepository.update(id, serviceUpdateDto);
    return this.getCustomer(id);
  }

  async delete(id: string) {
    const customer = this.getCustomer(id);
    return this.customersRepository.delete((await customer).id);
  }
}
