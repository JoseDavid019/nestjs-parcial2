import { PartialType } from '@nestjs/swagger';
import { LoginAuthDto } from './login-auth.dto';
import { IsString, IsEmail, IsNotEmpty, IsInt } from 'class-validator';


export class RegisterAuthDto extends PartialType(LoginAuthDto) {
    @IsNotEmpty()
    @IsString()
    FirstName: string;

    @IsNotEmpty()
    @IsString()
    LastName: string;

    @IsNotEmpty()
    @IsInt()
    Age: number;

    @IsNotEmpty()
    @IsEmail()
    Email: string;

    @IsNotEmpty()
    @IsString()
    Password: string;
}
