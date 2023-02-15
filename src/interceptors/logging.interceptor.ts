import { Injectable, NestInterceptor, ExecutionContext, CallHandler, Logger } from '@nestjs/common';
import { createWriteStream } from 'fs';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { formatDate } from 'src/utils/date';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const { method, url } = context.getArgByIndex(0);
        Logger.log(`[${formatDate()}] Request to ${method} ${url}`);

        return next.handle().pipe(
            // tap(() => Logger.log(`[${formatDate()}] Response from ${method} ${url} \n`)),
            catchError(async (err) =>
                Logger.error(`[${formatDate()}] Error from ${method} ${url} : ${err} \n`),
            ),
        );
    }
}
