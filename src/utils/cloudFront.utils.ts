export const cloudfrontPath = (key: string) => {
    const path = process.env.AWS_CLOUDFRONT_END_POINT + key;
    return path;
};
