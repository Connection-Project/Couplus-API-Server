/// <reference types="multer" />
export declare const fileUpload: {
    storage: import("multer").StorageEngine;
    limits: {
        fieldSize: number;
        fileSize: number;
    };
};
