"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const logging_interceptor_1 = require("./interceptors/logging.interceptor");
const index_module_1 = require("./modules/index.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    let envAllow = process.env.ALLOW_CORS_LIST;
    let allowList = envAllow.split(',');
    app.enableCors({
        origin: allowList,
        methods: ['GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS'],
        credentials: true,
    });
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Swagger API')
        .setDescription('http://3.35.147.147/v1/api')
        .setVersion('1.0.0')
        .addCookieAuth('x-access-auth')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config, {
        include: [index_module_1.IndexModule],
        deepScanRoutes: true,
        ignoreGlobalPrefix: true,
    });
    swagger_1.SwaggerModule.setup('/swagger', app, document);
    app.setGlobalPrefix('v1/api');
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.useGlobalInterceptors(new logging_interceptor_1.LoggingInterceptor());
    app.useGlobalPipes(new common_1.ValidationPipe({
        exceptionFactory: (err) => {
            new common_1.BadRequestException({
                status: 400,
                data: {
                    resultCode: -1,
                    data: err[0].constraints,
                },
            });
        },
    }));
    const port = Number(process.env.SERVER_PORT);
    await app.listen(port, () => {
        common_1.Logger.log(`SERVER - ${port}PORT CONNECTED`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map