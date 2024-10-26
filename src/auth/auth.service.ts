import { HttpException, Inject, Injectable } from '@nestjs/common';
import { LoginAuthDto } from './dto/login-auth.dto';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { hash, compare } from 'bcrypt';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private jwtService: JwtService,
  ) { }

  async register(userObject: RegisterAuthDto) {
    const { Email, Password } = userObject;
    const existingUser = await this.usersService.findByEmail(Email);
    if (existingUser) {
      throw new HttpException('Email is already in use', 400);
    }
    const plainToHash = await hash(Password, 10);
    return this.usersService.create({ ...userObject, Password: plainToHash });
  }
  async login(userObject: LoginAuthDto) {
    const { Email, Password } = userObject;
    const user = await this.usersService.findByEmail(Email);
    if (!user) {
      throw new HttpException('User not found', 404);
    }
    const isPasswordValid = await compare(Password, user.Password);
    if (!isPasswordValid) {
      throw new HttpException('Password incorrect', 403);
    }
    const payload = { UserId: user.UserId, FirstName: user.FirstName, LastName: user.LastName };
    const token = this.jwtService.sign(payload);
    return {
      user: {
        UserId: user.UserId,
        FirstName: user.FirstName,
        LastName: user.LastName,
      },
      token,
    };
  }
}
