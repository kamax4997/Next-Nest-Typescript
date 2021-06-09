import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { envConfig } from '@common/config/env.config';
import * as mongoose from 'mongoose';
import * as passport from 'passport';
import * as session from 'express-session';
import { sessionConfig } from './common/config/session.config';

async function bootstrap() {
    const env = envConfig();
    const app = await NestFactory.create<NestExpressApplication>(AppModule, {
        logger:
            env.mode === 'development'
                ? ['log', 'debug', 'error', 'verbose', 'warn']
                : ['error', 'warn'],
    });
    const port = env.port;

    // Handle errors
    app.useGlobalPipes(
		new ValidationPipe({
			skipMissingProperties: false,
			transform: true,
			validationError: {
				target: false,
			},
		}),
	);

    app.enableCors({
        origin: env.clientUrl,
        methods: 'GET, HEAD, PUT, PATCH, POST, DELETE, OPTIONS',
        credentials: true,
    });

    if (env.mode === 'development') {
        mongoose.set('debug', true);
    }

    if (env.mode === 'production') {
        app.set('trust proxy', 1); // trust first cookie
    }

    // Session
    const sessionOptions = sessionConfig();
    app.use(session(sessionOptions));

    // Init passport
    app.use(passport.initialize());
    app.use(passport.session());

    await app.listen(port, () => {
        console.log(`Server is running at ${env.serverUrl}/graphql`);
    });
}

bootstrap();
