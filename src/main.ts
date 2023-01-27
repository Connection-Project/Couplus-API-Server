import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { LoggingInterceptor } from './interceptors/logging.interceptor';
import { IndexModule } from './modules/index.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    //cors SetUp
    let envAllow = process.env.ALLOW_CORS_LIST;
    let allowList = envAllow.split(',');
    app.enableCors({
        origin: allowList,
        methods: ['GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS'],
        credentials: true,
    });
    //Swagger SetUp
    const config = new DocumentBuilder()
        .setTitle('Swagger API')
        .setDescription('http://3.35.147.147/v1/api')
        .setVersion('1.0.0')
        .addCookieAuth('x-access-auth')
        .build();
    const document = SwaggerModule.createDocument(app, config, {
        include: [IndexModule],
        deepScanRoutes: true,
        ignoreGlobalPrefix: true,
    });
    SwaggerModule.setup('/swagger', app, document);

    //Server Root URL
    app.setGlobalPrefix('v1/api');

    //Global Logging Interceptor
    app.useGlobalInterceptors(new LoggingInterceptor());

    //Server Listen
    const port: number = Number(process.env.SERVER_PORT);
    await app.listen(port, () => {
        Logger.log(`SERVER - ${port}PORT CONNECTED`);
    });
}
bootstrap();
