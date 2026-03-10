import { Request, Response } from 'express';
import { GithubInstallCallbackQuery } from '../../../modules/github/github.types';
import { getGithubAppConfig } from '../../../modules/github/github.service';

function githubInstallCallbackController(req: Request, res: Response)
{
    const query = req.query as GithubInstallCallbackQuery;
    const config = getGithubAppConfig();

    const installationId = query.installation_id;
    const setupAction = query.setup_action;
    const state = query.state;
    const code = query.code;

    if (!installationId)
    {
        return res.status(400).json(
            {
                message: 'Missing installation_id'
            }
        );
    }

    return res.status(200).json(
        {
            message: 'GitHub install callback received',
            data:
            {
                appId: config.appId,
                installationId,
                setupAction: setupAction ?? null,
                state: state ?? null,
                code: code ?? null
            }
        }
    );
}

export {
    githubInstallCallbackController
};