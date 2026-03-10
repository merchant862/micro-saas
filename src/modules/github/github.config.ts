import { env } from '../../bootstrap/env';
import { GithubConfig } from './github.types';

function getGithubConfig(): GithubConfig
{
    return {
        appId: env.githubAppId,
        appSlug: env.githubAppSlug,
        clientId: env.githubClientId,
        clientSecret: env.githubClientSecret,
        webhookSecret: env.githubWebhookSecret,
        privateKeyPath: env.githubPrivateKeyPath
    };
}

export 
{
    getGithubConfig
};