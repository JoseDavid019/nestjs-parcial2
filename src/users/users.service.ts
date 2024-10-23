import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) { }

  create(createUserDto: CreateUserDto) {
    return this.usersRepository.save(createUserDto);
  }

  findAll(): Promise<Users[]> {
    return this.usersRepository.find();
  }

  findOne(UserId: number): Promise<Users | null> {
    return this.usersRepository.findOneBy({ UserId });
  }

  async findByEmail(Email: string): Promise<Users | null> {
    return this.usersRepository.findOne({ where: { Email } });
  }

  update(UserId: number, updateUserDto: UpdateUserDto) {
    return this.usersRepository.update(UserId, updateUserDto);
  }

  async remove(UserId: number): Promise<void> {
    await this.usersRepository.delete(UserId);
  }
}
