import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { CellModule } from './modules/cell/cell.module';
import { CellsNetworkModule } from './modules/cells-network/cells-network.module';
import { ChurchModule } from './modules/church/church.module';
import { PeopleModule } from './modules/people/people.module';
import { VisitorsModule } from './modules/visitors/visitors.module';
import { VisitorsConvertedsModule } from './modules/visitors-converteds/visitors-converteds.module';
import { VisitorsBaptizedsModule } from './modules/visitors-baptizeds/visitors-baptizeds.module';
import { VisitorsCellsModule } from './modules/visitors-cells/visitors-cells.module';

@Module({
  imports: [UserModule, AuthModule, CellModule, CellsNetworkModule, ChurchModule, PeopleModule, VisitorsModule, VisitorsConvertedsModule, VisitorsBaptizedsModule, VisitorsCellsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
