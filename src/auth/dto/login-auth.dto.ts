import { IsEmail, Length } from "class-validator";

export class LoginAuthDto {
    @IsEmail()
    Email: string;

    @Length(8, 20)
    Password: string;
}
