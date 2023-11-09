import { Injectable, Logger } from '@nestjs/common';
import { CoworkingRepository } from './coworkings.repository';
import { CoworkingCreateDto } from './dtos/coworkingCreate.dto';
import { CoworkingUpdateDto } from './dtos/coworkingUpdate.dto';

@Injectable()
export class CoworkingsService {
  constructor(private readonly coworkingsRepository: CoworkingRepository) {}

  async getCoworkings(): Promise<any> {
    return await this.coworkingsRepository.getCoworkings();
  }

  async getCoworking(id: string): Promise<any> {
    return await this.coworkingsRepository.getCoworking(id);
  }

  async create(coworkingCreateDto: CoworkingCreateDto): Promise<any> {
    const coworking =
      await this.coworkingsRepository.create(coworkingCreateDto);

    return coworking;
  }

  async update(
    id: string,
    coworkingUpdateDto: CoworkingUpdateDto,
  ): Promise<any> {
    await this.coworkingsRepository.update(id, coworkingUpdateDto);
    return this.getCoworking(id);
  }

  async delete(id: string) {
    Logger.log(id);
    return await this.coworkingsRepository.delete(id);
  }
}
