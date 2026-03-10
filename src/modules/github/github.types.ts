type GithubConfig =
{
    appId: string;
    appSlug: string;
    clientId: string;
    clientSecret: string;
    webhookSecret: string;
    privateKeyPath: string;
};

type GithubInstallCallbackQuery =
{
    installation_id?: string;
    setup_action?: string;
    state?: string;
    code?: string;
};

type GithubWebhookHeaders =
{
    event?: string;
    delivery?: string;
    signature256?: string;
};

export type {
    GithubConfig,
    GithubInstallCallbackQuery,
    GithubWebhookHeaders
};