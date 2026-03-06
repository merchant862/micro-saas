import dotenv from 'dotenv';

dotenv.config();

function getEnv(name: string, fallback?: string): string
{
    const value = process.env[name] ?? fallback;

    if (value === undefined)
    {
        throw new Error(`Missing environment variable: ${name}`);
    }

    return value;
}

export const env = 
{
    appName: getEnv('APP_NAME', 'Security Platform'),
    port: Number(getEnv('PORT', '3000')),
    dbHost: getEnv('DB_HOST'),
    dbPort: Number(getEnv('DB_PORT', '3306')),
    dbName: getEnv('DB_NAME'),
    dbUser: getEnv('DB_USER'),
    dbPass: getEnv('DB_PASS'),
    redisHost: getEnv('REDIS_HOST'),
    redisPort: Number(getEnv('REDIS_PORT', '6379'))
};