import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Profile, Strategy } from "passport-facebook";
import { envConfig } from '../../../common/config/env.config';

@Injectable()
export class FacebookStrategy extends PassportStrategy(Strategy, "facebook") {
    constructor() {
        const env = envConfig();
        super({
            clientID: env.facebookId,
            clientSecret: env.facebookSecret,
            callbackURL: "http://localhost:3000/facebook/redirect",
            scope: "email",
            profileFields: ["emails", "name"],
        });
    }

    async validate(
        accessToken: string,
        refreshToken: string,
        profile: Profile,
        done: (err: any, user: any, info?: any) => void
    ): Promise<any> {
        const { name, emails } = profile;
        const user = {
            email: emails[0].value,
            firstName: name.givenName,
            lastName: name.familyName,
        };
        const payload = {
            user,
            accessToken,
        };

        done(null, payload);
    }
}