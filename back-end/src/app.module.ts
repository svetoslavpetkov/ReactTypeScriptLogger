import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersistenceService } from './persistence/persistence.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, PersistenceService],
})
export class AppModule {}
