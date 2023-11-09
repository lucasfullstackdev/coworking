import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { CustomerEntity } from './customer.entity';
import { CustomerCreateDto } from './dtos/customerCreate.dto';
import { CustomerUpdateDto } from './dtos/customerUpdate.dto';

@Injectable()
export class CustomersRepository {
  constructor(private readonly dataSource: DataSource) {}

  async getCustomers(): Promise<CustomerEntity[]> {
    return await this.dataSource.getRepository(CustomerEntity).find();
  }

  async getCustomer(id: string): Promise<CustomerEntity> {
    return await this.dataSource.getRepository(CustomerEntity).findOne({
      where: {
        id: id,
      },
    });
  }

  async create(customerCreateDto: CustomerCreateDto): Promise<CustomerEntity> {
    return await this.dataSource
      .getRepository(CustomerEntity)
      .save(customerCreateDto);
  }

  async update(id: string, customerUpdateDto: CustomerUpdateDto) {
    return this.dataSource
      .getRepository(CustomerEntity)
      .update(id, customerUpdateDto);
  }

  async delete(id: string) {
    return this.dataSource.getRepository(CustomerEntity).delete(id);
  }
}
