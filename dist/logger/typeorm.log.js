"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomLogger = void 0;
const date_1 = require("../utils/date");
const fs_1 = require("fs");
const logStream = (0, fs_1.createWriteStream)('logs/typeorm.log', { flags: 'a' });
class CustomLogger {
    logQuery(query, parameters, queryRunner) {
        let allowLog = ["START", "INSERT", "UPDATE", "DELETE", "COMMIT", "ALTER", "DROP", "CREATE"];
        let queryFirst = query.split(" ")[0];
        if (allowLog.includes(queryFirst)) {
            let date = (0, date_1.formatDate)();
            logStream.write(`[${date}]${query} ${parameters === undefined ? '' : '[ ' + parameters + ' ]'}\n`);
        }
    }
    logQueryError(error, query, parameters, queryRunner) {
    }
    logQuerySlow(time, query, parameters, queryRunner) {
    }
    logSchemaBuild(message, queryRunner) {
    }
    logMigration(message, queryRunner) {
    }
    log(level, message, queryRunner) {
    }
}
exports.CustomLogger = CustomLogger;
//# sourceMappingURL=typeorm.log.js.map