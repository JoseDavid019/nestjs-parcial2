import { IsNotEmpty, IsString, Length, IsEmail, IsBoolean, IsInt, Min, Max } from 'class-validator';

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    @Length(1, 150)
    FirstName: string;

    @IsNotEmpty()
    @IsString()
    @Length(1, 150)
    LastName: string;

    @IsNotEmpty()
    @IsInt()
    @Min(0)
    @Max(100)
    Age: number;

    @IsNotEmpty()
    @IsEmail()
    @Length(1, 255)
    Email: string;

    @IsNotEmpty()
    @IsString()
    @Length(8, 255)
    Password: string;
}
