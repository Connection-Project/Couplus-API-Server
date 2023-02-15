import { createParamDecorator, ExecutionContext } from '@nestjs/common';

// * AccesstokenGuard / JwtInterceptor와 사용
export const GetUser = createParamDecorator((_, ctx: ExecutionContext) => {
    const req = ctx.switchToHttp().getRequest();
    console.log(req);
    console.log(req.user);
    return req.user;
});
