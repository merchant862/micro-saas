import fs from 'fs/promises';
import path from 'path';
import crypto from 'crypto';

import { getGithubConfig } from './github.config';
import { GithubConfig } from './github.types';

let githubPrivateKeyCache: string | null = null;

function getGithubAppConfig(): GithubConfig
{
    return getGithubConfig();
}

function buildGithubAppInstallUrl(state?: string): string
{
    const config = getGithubConfig();

    const baseUrl = `https://github.com/apps/${config.appSlug}/installations/new`;

    if (!state)
    {
        return baseUrl;
    }

    const searchParams = new URLSearchParams(
        {
            state
        }
    );

    return `${baseUrl}?${searchParams.toString()}`;
}

async function readGithubPrivateKey(): Promise<string>
{
    if (githubPrivateKeyCache)
    {
        return githubPrivateKeyCache;
    }

    const config = getGithubConfig();
    const privateKeyPath = path.resolve(config.privateKeyPath);

    try
    {
        githubPrivateKeyCache = await fs.readFile(privateKeyPath, 'utf8');
        return githubPrivateKeyCache;
    }
    catch (error)
    {
        throw new Error(`GitHub private key not found or unreadable at path: ${privateKeyPath}`);
    }
}

function clearGithubPrivateKeyCache()
{
    githubPrivateKeyCache = null;
}

function verifyGithubWebhookSignature(payload: Buffer, signature256?: string): boolean
{
    if (!signature256)
    {
        return false;
    }

    const config = getGithubConfig();

    const expectedSignature = crypto
        .createHmac('sha256', config.webhookSecret)
        .update(payload)
        .digest('hex');

    const expectedValue = `sha256=${expectedSignature}`;

    const providedBuffer = Buffer.from(signature256);
    const expectedBuffer = Buffer.from(expectedValue);

    if (providedBuffer.length !== expectedBuffer.length)
    {
        return false;
    }

    return crypto.timingSafeEqual(providedBuffer, expectedBuffer);
}

export {
    getGithubAppConfig,
    buildGithubAppInstallUrl,
    readGithubPrivateKey,
    clearGithubPrivateKeyCache,
    verifyGithubWebhookSignature
};