import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'coworkings' })
export class CoworkingEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'name', unique: true })
  name: string;

  @Column({ name: 'active' })
  active: boolean;
}
