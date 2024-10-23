import { HttpException, Inject, Injectable } from '@nestjs/common';
import { LoginAuthDto } from './dto/login-auth.dto';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { hash, compare } from 'bcrypt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
  ) { }

  async register(userObject: RegisterAuthDto) {
    const { Password } = userObject;
    const plainToHash = await hash(Password, 10);
    userObject = { ...userObject, Password: plainToHash };
    return this.usersService.create(userObject);
  }
  async login(userObject: LoginAuthDto) {
    const { Email, Password } = userObject;
    const findUser = await this.usersService.findByEmail(Email);
    if (!findUser) throw new HttpException('User not found', 404);
    const checkPassword = await compare(Password, findUser.Password);
    if (!checkPassword) throw new HttpException('Password incorrect', 403);
    const data = findUser;
    return data;
  }
}
