import { PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';
import {IsOptional, IsString, Length, IsEmail, IsBoolean, IsInt, Min, Max} from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @IsOptional()
    @IsString()
    @Length(1, 150)
    FirstName?: string;

    @IsOptional()
    @IsString()
    @Length(1, 150)
    LastName?: string;

    @IsOptional()
    @IsInt()
    @Min(0)
    @Max(100)
    Age?: number;

    @IsOptional()
    @IsEmail()
    @Length(1, 255)
    Email?: string;

    @IsOptional()
    @IsString()
    @Length(8, 20)
    Password?: string;

    @IsOptional()
    @IsBoolean()
    Active?: boolean;
}
