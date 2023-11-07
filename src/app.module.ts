import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import sequelizeConfig from './database.config';
import { User } from './users/user.model';
import { UserService } from './users/user.service';
import { UserController } from './users/user.controller';

@Module({
  imports: [
    SequelizeModule.forRoot(sequelizeConfig),
    SequelizeModule.forFeature([User]),
  ],
  providers: [UserService],
  controllers: [UserController],
})
export class AppModule {}
