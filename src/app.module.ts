import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { RoomsModule } from './rooms/rooms.module';
import { CoworkingsModule } from './coworkings/coworkings.module';
import { CoworkingEntity } from './coworkings/coworking.entity';
import { RoomEntity } from './rooms/room.entity';
import { ServicesModule } from './services/services.module';
import { ServiceEntity } from './services/service.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 2000,
      username: 'root',
      password: 'root',
      database: 'coworking',
      synchronize: true,
      entities: [CoworkingEntity, RoomEntity, ServiceEntity],
    }),
    RoomsModule,
    CoworkingsModule,
    ServicesModule,
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
