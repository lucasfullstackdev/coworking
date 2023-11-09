import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CoworkingEntity } from '../coworking.entity';
import { ServiceEntity } from 'src/services/service.entity';

@Entity({ name: 'coworking_services' })
export class CoworkingServiceEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => CoworkingEntity, (coworking) => coworking.id)
  @Column({ name: 'coworking_id' })
  coworking: string;

  @ManyToOne(() => ServiceEntity, (service) => service.id)
  @Column({ name: 'service_id' })
  service: string;
}
