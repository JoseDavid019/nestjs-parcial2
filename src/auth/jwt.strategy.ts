import { PassportStrategy } from "@nestjs/passport";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { ExtractJwt, Strategy } from "passport-jwt";
import { jwtConstants } from "./jwt.constants";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: jwtConstants.secret,
        });
    }
    async validate(payload: { UserId: string; FirstName: string; LastName: string; }) {
        if (!payload.UserId) {
            throw new UnauthorizedException('Invalid token payload');
        }
        return { UserId: payload.UserId, FirstName: payload.FirstName, LastName: payload.LastName };
    }
}
