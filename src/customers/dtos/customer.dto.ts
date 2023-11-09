import { CustomerEntity } from '../customer.entity';

export class CustomerDto {
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly phone: string;
  readonly document: string;

  constructor(customer: CustomerEntity) {
    this.id = customer.id;
    this.name = customer.name;
    this.email = customer.email;
    this.phone = customer.phone;
    this.document = customer.document;
  }
}
