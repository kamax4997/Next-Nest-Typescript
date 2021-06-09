import { Module } from '@nestjs/common';
import { AppController } from './app/app.controller';
import { AppService } from './app/app.service';
import { envConfig } from '@common/config/env.config';
import { graphqlConfig } from '@common/config/graphql.config';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from '@modules/auth/auth.module';

@Module({
    imports: [
        MongooseModule.forRootAsync({
			useFactory: () => ({
				uri: envConfig().mongodbUri,
				useNewUrlParser: true,
				useCreateIndex: true,
				useUnifiedTopology: true,
				useFindAndModify: false,
			}),
		}),
		// GraphQLWithUploadModule.forRoot(),
		GraphQLModule.forRootAsync({
			useFactory: graphqlConfig,
		}),
		AuthModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})

export class AppModule {}
