import { RoomEntity } from 'src/coworkings/rooms/room.entity';
import { CustomerEntity } from 'src/customers/customer.entity';
import { ServiceEntity } from 'src/services/service.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'schedules' })
export class ScheduleEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => CustomerEntity, (customer) => customer.id)
  customer: string;

  @ManyToOne(() => ServiceEntity, (service) => service.id)
  service: string;

  @ManyToOne(() => RoomEntity, (room) => room.id)
  room: string;

  @Column({ type: 'decimal', precision: 5, scale: 2 })
  total: number;

  @Column({ type: 'timestamp' })
  startAt: Date;

  @Column({ type: 'timestamp' })
  endAt: Date;
}
