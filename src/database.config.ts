import { SequelizeModuleOptions } from '@nestjs/sequelize';

const sequelizeConfig: SequelizeModuleOptions = {
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '1212',
  database: 'postgres',
  autoLoadModels: true,
  synchronize: true,
};

export default sequelizeConfig;
