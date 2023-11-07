import { Body, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';
import { CreateUserDto, UpdateUserDto } from './user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User) private userModel: typeof User) {}

  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userModel.create(createUserDto);
  }

  async getUsers(): Promise<User[]> {
    return this.userModel.findAll();
  }

  async getUserById(id: number): Promise<User> {
    return this.userModel.findByPk(id);
  }

  async updateUser(
    id: number,
    updateUserDto: UpdateUserDto,
  ): Promise<[number, User[]]> {
    return this.userModel.update(updateUserDto, {
      where: { id },
      returning: true,
    });
  }

  async deleteUser(id: number): Promise<number> {
    return this.userModel.destroy({ where: { id } });
  }
}
